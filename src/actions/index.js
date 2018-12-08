import { placesRef } from "../config/firebase";
import $ from 'jquery';
import { FETCH_PLACES, SELECT_PLACE, DELETE_PLACE, FETCH_WEATHER_SUCCESS } from "./types";

export const addPlace = newPlace => async dispatch => {
    placesRef.push().set(newPlace);
};

export const deletePlace = placeId => async dispatch => {
    placesRef.child(placeId).remove();
    dispatch({
        type: DELETE_PLACE,
        payload: placeId,
    });
};

export const fetchPlaces = () => async dispatch => {
    placesRef.on("value", snapshot => {
        dispatch({
            type: FETCH_PLACES,
            payload: snapshot.val()
        });
    });
};

export const selectPlace = place => async dispatch => {
    dispatch({
        type: SELECT_PLACE,
        payload: place,
    });

};

export const fetchWeather = data => async dispatch => {
    console.log("FW")
    const { place, type } = data;
    const { coordinates } = place;
    if (type === 'weekly') {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + coordinates.lat + "&lon=" + coordinates.lng + "&cnt=10&units=metric&APPID=b6907d289e10d714a6e88b30761fae22",
            type: "GET",
            dataType: "json",
            success: function(data){
                dispatch({
                    type: FETCH_WEATHER_SUCCESS,
                    payload: data.main,
                })
            }
        });
    } else {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + coordinates.lat + "&lon=" + coordinates.lng + "&units=metric&APPID=14fa71fd3e45b88c82835e9a1e1e1ab9",
            type: "GET",
            dataType: "json",
            success: function(data){
                    dispatch({
                        type: FETCH_WEATHER_SUCCESS,
                        payload: Object.assign(place, {dailyWeather: data.main}),
                    })
            }
        });
    }

};
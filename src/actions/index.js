import { placesRef } from "../config/firebase";
import $ from 'jquery';
import { FETCH_PLACES, SELECT_PLACE, DELETE_PLACE } from "./types";

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

// export const addPlace = (place) => ({
//     type: ADD_PLACE,
//     payload: place,
// });

export const selectPlace = place => async dispatch => {
    const { coordinates } = place;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?lat=" + coordinates.lat + "&lon=" + coordinates.lng + "&units=metric&APPID=14fa71fd3e45b88c82835e9a1e1e1ab9",
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data)
            place.weather = data.main;
            dispatch({
                type: SELECT_PLACE,
                payload: place,
            });
        }
    });

};
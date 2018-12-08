import {FETCH_PLACES, SELECT_PLACE, DELETE_PLACE, FETCH_WEATHER_SUCCESS, FETCH_WEATHER} from "../actions/types";

const INIT_STATE = {
    places: [],
    selectedPlace: null,
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_PLACES:
            const places = action.payload ? Object.keys(action.payload).map(function(i) {
                //ToDo try no
                let newPlace = action.payload[i];
                newPlace.key = i;
                return newPlace
            }) : [];
            return {
                ...state,
                places: places,
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: action.payload,
            };
        case DELETE_PLACE:
            const { selectedPlace } = state;
            const wasSelected = selectedPlace.key === action.payload;
            return {
                ...state,
                selectedPlace: wasSelected ? null : selectedPlace,
            };
        case FETCH_WEATHER:{
            return {
                ...state,
                weather: null,
            };
        }
        case FETCH_WEATHER_SUCCESS: {
            const updatedItems = state.places.map(item => {
                if(item.id === action.payload.id){
                    return { ...item, ...action.payload }
                }
                return item
            })
            console.log("redux", action.payload, updatedItems)
            return {
                ...state,
                places: updatedItems,
                selectedPlace: action.payload,
            };
        }
        default:
            return state;
    }
};
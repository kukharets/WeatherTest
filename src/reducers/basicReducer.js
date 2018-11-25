import { FETCH_PLACES, SELECT_PLACE, DELETE_PLACE } from "../actions/types";

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
            }
        default:
            return state;
    }
};
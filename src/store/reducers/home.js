import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    photos: [],
};

const loadHomePhotos = (state, action) => {
    let oldPhotos = [...state.photos];
    let data = action.payload.data;
    oldPhotos.forEach((photo) => {
        data.forEach((el, index) => {
            if (el.id === photo.id) {
                data.splice(index, 1);
            }
        });
    });
    return {
        ...state,
        photos: [...oldPhotos, ...data],
    };
};

const clearHomePhotos = (state, action) => {
    return updateObject(state, { photos: [] });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_HOME_PHOTOS:
            return loadHomePhotos(state, action);
        case actionTypes.CLEAR_HOME_PHOTOS:
            return clearHomePhotos(state, action);
        default:
            return state;
    }
};

export default reducer;

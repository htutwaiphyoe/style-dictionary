import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    photo: null,
};

const loadRandomPhoto = (state, action) => {
    return updateObject(state, {
        photo: action.payload,
    });
};
const clearRandomPhoto = (state, action) => {
    return updateObject(state, { photo: null });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_RANDOM_PHOTO:
            return loadRandomPhoto(state, action);
        case actionTypes.CLEAR_RANDOM_PHOTO:
            return clearRandomPhoto(state, action);
        default:
            return state;
    }
};

export default reducer;

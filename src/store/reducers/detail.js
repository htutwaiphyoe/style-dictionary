import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    photo: null,
};

const loadPhotoDetail = (state, action) => {
    return updateObject(state, {
        photo: action.payload,
    });
};
const clearPhotoDetail = (state, action) => {
    return updateObject(state, { photo: null });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTO_DETAIL:
            return loadPhotoDetail(state, action);
        case actionTypes.CLEAR_PHOTO_DETAIL:
            return clearPhotoDetail(state, action);
        default:
            return state;
    }
};

export default reducer;

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
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTO_DETAIL:
            return loadPhotoDetail(state, action);
        default:
            return state;
    }
};

export default reducer;

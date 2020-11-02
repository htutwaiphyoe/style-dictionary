import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    photos: [],
    loading: false,
    error: null,
};

const showHomeError = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.payload,
    });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_HOME_LOADING:
            return updateObject(state, { loading: true });
        case actionTypes.SHOW_HOME_ERROR:
            return showHomeError(state, action);
        default:
            return state;
    }
};

export default reducer;

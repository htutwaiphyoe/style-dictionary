import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    loading: false,
    error: null,
    list: null,
    isRequested: false,
    page: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ERROR:
            return updateObject(state, { error: action.payload, loading: false });
        case actionTypes.SHOW_LOADING:
            return updateObject(state, { loading: true });
        case actionTypes.HIDE_LOADING:
            return updateObject(state, { loading: false, error: null });
        case actionTypes.GET_PHOTOS_LIST:
            return updateObject(state, { list: action.payload });
        case actionTypes.FETCH_REQUEST:
            return updateObject(state, { isRequested: true });
        case actionTypes.FINISH_REQUEST:
            return updateObject(state, { isRequested: false });
        case actionTypes.INCREMENT_PAGE:
            return updateObject(state, { page: state.page + 1 });
        case actionTypes.RESET_PAGE:
            return updateObject(state, { page: 1 });
        default:
            return state;
    }
};

export default reducer;

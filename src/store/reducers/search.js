import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    searchPhotos: [],
    loading: false,
    error: false,
    query: "",
};

const showSearchError = (state, action) => {
    return updateObject(state, {
        error: action.payload,
        loading: false,
    });
};

const loadSearchPhotos = (state, action) => {
    let oldPhotos = [...state.searchPhotos];
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
        searchPhotos: [...oldPhotos, ...data],
        loading: false,
        error: null,
        query: action.payload.query,
    };
};

const clearSearchPhotos = (state, action) => {
    console.log("ok");
    return updateObject(state, {
        searchPhotos: [],
    });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_SEARCH_LOADING:
            return updateObject(state, { loading: true });
        case actionTypes.SHOW_SEARCH_ERROR:
            return showSearchError(state, action);
        case actionTypes.LOAD_SEARCH_PHOTOS:
            return loadSearchPhotos(state, action);
        case actionTypes.CLEAR_SEARCH_PHOTOS:
            return clearSearchPhotos(state, action);
        default:
            return state;
    }
};

export default reducer;

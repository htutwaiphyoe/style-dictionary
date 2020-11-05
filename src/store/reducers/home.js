import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    photos: [],
    loading: false,
    error: null,
    // page: 1,
};

const showHomeError = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.payload,
    });
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
        loading: false,
        error: null,
        // page: action.payload.page,
    };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_HOME_LOADING:
            return updateObject(state, { loading: true });
        case actionTypes.SHOW_HOME_ERROR:
            return showHomeError(state, action);
        case actionTypes.LOAD_HOME_PHOTOS:
            return loadHomePhotos(state, action);

        default:
            return state;
    }
};

export default reducer;

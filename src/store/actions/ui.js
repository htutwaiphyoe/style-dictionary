import * as actionTypes from "./actionTypes";

export const incrementPage = () => {
    return { type: actionTypes.INCREMENT_PAGE };
};

export const fetchRequest = () => {
    return { type: actionTypes.FETCH_REQUEST };
};

export const finishRequest = () => {
    return { type: actionTypes.FINISH_REQUEST };
};

export const getPhotosList = (payload) => {
    return { type: actionTypes.GET_PHOTOS_LIST, payload };
};

export const resetPage = () => {
    console.log("Reset");
    return { type: actionTypes.RESET_PAGE };
};

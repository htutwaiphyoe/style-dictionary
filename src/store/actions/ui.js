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
    return { type: actionTypes.RESET_PAGE };
};

export const showError = (payload) => {
    return { type: actionTypes.SHOW_ERROR, payload };
};

export const showLoading = () => {
    return { type: actionTypes.SHOW_LOADING };
};

export const hideLoading = () => {
    return { type: actionTypes.HIDE_LOADING };
};

export const showSidebar = () => {
    return { type: actionTypes.SHOW_SIDEBAR };
};

export const hideSidebar = () => {
    return { type: actionTypes.HIDE_SIDEBAR };
};

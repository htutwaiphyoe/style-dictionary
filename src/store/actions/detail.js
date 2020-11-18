import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";
import { showLoading, showError, hideLoading } from "./ui";
const loadPhotoDetail = (payload) => {
    return {
        type: actionTypes.LOAD_PHOTO_DETAIL,
        payload,
    };
};
export const clearPhotoDetail = () => {
    return {
        type: actionTypes.CLEAR_PHOTO_DETAIL,
    };
};
export const fetchPhotoDetail = (id) => async (dispatch) => {
    try {
        dispatch(showLoading());
        const response = await unsplash.get(`/photos/${id}`);
        dispatch(loadPhotoDetail(response.data));
        dispatch(hideLoading());
    } catch (e) {
        dispatch(showError(e));
    }
};

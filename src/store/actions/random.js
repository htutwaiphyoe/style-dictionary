import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";
import { showLoading, showError, hideLoading } from "./ui";
const loadRandomPhoto = (payload) => {
    return {
        type: actionTypes.LOAD_RANDOM_PHOTO,
        payload,
    };
};
export const clearRandomPhoto = () => {
    return { type: actionTypes.CLEAR_RANDOM_PHOTO };
};
export const fetchRandomPhoto = () => async (dispatch) => {
    try {
        dispatch(showLoading());
        const response = await unsplash.get(`/photos/random`);
        dispatch(loadRandomPhoto(response.data));
        dispatch(hideLoading());
    } catch (e) {
        dispatch(showError(e));
    }
};

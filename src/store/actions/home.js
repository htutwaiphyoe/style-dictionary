import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";
import { fetchRequest, finishRequest, showLoading, showError, hideLoading } from "./ui";
const loadHomePhotos = (payload) => {
    return {
        type: actionTypes.LOAD_HOME_PHOTOS,
        payload,
    };
};

export const clearHomePhotos = () => {
    return {
        type: actionTypes.CLEAR_HOME_PHOTOS,
    };
};
export const getHomePhotos = (page) => async (dispatch) => {
    try {
        if (page === 1) {
            dispatch(showLoading());
        }
        dispatch(fetchRequest());
        const response = await unsplash.get("/photos", {
            params: {
                page,
            },
        });
        const payload = {
            data: response.data,
        };
        dispatch(loadHomePhotos(payload));
        dispatch(hideLoading());
        dispatch(finishRequest());
    } catch (e) {
        dispatch(showError(e));
    }
};

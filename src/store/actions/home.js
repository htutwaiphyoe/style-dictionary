import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";
import { fetchRequest, finishRequest } from "./ui";
const loadHomePhotos = (payload) => {
    return {
        type: actionTypes.LOAD_HOME_PHOTOS,
        payload,
    };
};
const showHomeLoading = () => {
    return {
        type: actionTypes.SHOW_HOME_LOADING,
    };
};

const showHomeError = (payload) => {
    return {
        type: actionTypes.SHOW_HOME_ERROR,
        payload,
    };
};
export const getHomePhotos = (page) => async (dispatch) => {
    try {
        if (page === 1) {
            dispatch(showHomeLoading());
        }
        dispatch(fetchRequest());
        const response = await unsplash.get("/photos", {
            params: {
                page,
            },
        });
        const payload = {
            data: response.data,
            // page,
        };
        dispatch(loadHomePhotos(payload));
        dispatch(finishRequest());
    } catch (e) {
        dispatch(showHomeError(e));
    }
};

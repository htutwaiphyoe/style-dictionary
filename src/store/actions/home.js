import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";

const loadPhotos = (payload) => {
    return {
        type: actionTypes.LOAD_PHOTOS,
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
export const getPhotos = (page) => async (dispatch) => {
    try {
        dispatch(showHomeLoading());
        const response = await unsplash.get("/photos", {
            params: {
                page,
            },
        });
        response.data.page = page;
        dispatch(loadPhotos(response.data));
    } catch (e) {
        dispatch(showHomeError());
    }
};

import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";

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
export const getPhotos = (page) => async (dispatch) => {
    try {
        dispatch(showHomeLoading());
        const response = await unsplash.get("/photos", {
            params: {
                page,
            },
        });
        const payload = {
            data: response.data,
            page: page,
        };
        console.log(payload);
        dispatch(loadHomePhotos(payload));
    } catch (e) {
        dispatch(showHomeError());
    }
};

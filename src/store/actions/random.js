import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";
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
        const response = await unsplash.get(`/photos/random`);
        dispatch(loadRandomPhoto(response.data));
    } catch (e) {
        console.log(e);
    }
};

import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";
const loadRandomPhoto = (payload) => {
    return {
        type: actionTypes.LOAD_RANDOM_PHOTO,
        payload,
    };
};
export const fetchRandomPhoto = () => async (dispatch) => {
    try {
        const response = await unsplash.get(`/photos/random`);
        console.log(response.data);
        dispatch(loadRandomPhoto(response.data));
    } catch (e) {
        console.log(e);
    }
};

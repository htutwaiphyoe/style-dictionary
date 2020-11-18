import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";
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
        const response = await unsplash.get(`/photos/${id}`);
        dispatch(loadPhotoDetail(response.data));
    } catch (e) {
        console.log(e);
    }
};

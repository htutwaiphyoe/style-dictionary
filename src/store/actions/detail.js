import * as actionTypes from "./actionTypes";
import unsplash from "../../api/unsplash";
const loadPhotoDetail = (payload) => {
    return {
        type: actionTypes.LOAD_PHOTO_DETAIL,
        payload,
    };
};
export const fetchPhotoDetail = (id) => async (dispatch) => {
    try {
        const response = await unsplash.get(`/photos/${id}`);
        console.log(response.data);
        dispatch(loadPhotoDetail(response.data));
    } catch (e) {
        // dispatch(showError());
        console.log(e);
    }
};

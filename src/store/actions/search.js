import unsplash from "../../api/unsplash";
import * as actionTypes from "./actionTypes";
import { fetchRequest, finishRequest, showError, showLoading, hideLoading } from "./ui";

const loadSearchPhotos = (payload) => {
    return {
        type: actionTypes.LOAD_SEARCH_PHOTOS,
        payload,
    };
};

export const clearSearchPhotos = () => {
    return {
        type: actionTypes.CLEAR_SEARCH_PHOTOS,
    };
};
export const getSearchPhotos = (page, query) => async (dispatch) => {
    try {
        if (page === 1) {
            dispatch(showLoading());
        }
        dispatch(fetchRequest());
        const response = await unsplash.get("/search/photos", {
            params: {
                page,
                query,
            },
        });
        const payload = {
            data: response.data.results,
            query,
        };
        dispatch(loadSearchPhotos(payload));
        dispatch(hideLoading());
        dispatch(finishRequest());
    } catch (e) {
        dispatch(showError(e));
    }
};

import unsplash from "../../api/unsplash";
import * as actionTypes from "./actionTypes";
import { fetchRequest, finishRequest } from "./ui";
const showSearchLoading = () => {
    return {
        type: actionTypes.SHOW_SEARCH_LOADING,
    };
};

const showSearchError = (payload) => {
    return {
        type: actionTypes.SHOW_SEARCH_ERROR,
        payload,
    };
};

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
            dispatch(showSearchLoading());
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
        dispatch(finishRequest());
    } catch (e) {
        dispatch(showSearchError(e));
    }
};

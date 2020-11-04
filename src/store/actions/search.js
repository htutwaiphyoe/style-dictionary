import unsplash from "../../api/unsplash";
import * as actionTypes from "./actionTypes";

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
export const getSearchPhotos = (page, query, newQuery) => async (dispatch) => {
    try {
        if (newQuery) {
            clearSearchPhotos();
        }
        dispatch(showSearchLoading());
        const response = await unsplash.get("/search/photos", {
            params: {
                page,
                query,
            },
        });
        const payload = {
            data: response.data.results,
            page,
            query,
        };
        console.log(payload);
        dispatch(loadSearchPhotos(payload));
    } catch (e) {
        dispatch(showSearchError(e));
    }
};

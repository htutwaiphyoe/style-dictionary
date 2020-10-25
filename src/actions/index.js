import unsplash from "../api/unsplash";

let q = "";
export const getPhotos = (page) => async (dispatch) => {
    try {
        dispatch(fetchRequest());

        const response = await unsplash.get("/photos", {
            params: {
                page,
            },
        });

        dispatch({ type: "LOAD_PHOTOS", payload: response.data });
        dispatch(finishRequest());
    } catch (e) {
        dispatch(showError());
    }
};

export const searchPhotos = (page, query) => async (dispatch) => {
    try {
        if (query !== q && q !== "") {
            dispatch(resetPhotos());
            dispatch(resetPages());
        }
        q = query;
        dispatch(fetchRequest());
        const response = await unsplash.get("/search/photos", {
            params: {
                page,
                query,
            },
        });

        dispatch({ type: "LOAD_PHOTOS", payload: response.data.results });
        dispatch(finishRequest());
    } catch (e) {
        dispatch(showError());
    }
};

export const resetPhotos = () => {
    return { type: "RESET_PHOTOS" };
};

export const incrementPages = () => {
    return { type: "INCREMENT_PAGE" };
};
export const resetPages = () => {
    return { type: "RESET_PAGE" };
};

export const fetchRequest = () => {
    return { type: "FETCH_REQUEST" };
};

export const finishRequest = () => {
    return { type: "FINISH_REQUEST" };
};

export const startSearch = () => {
    return { type: "START_SEARCH" };
};

export const endSearch = () => {
    return { type: "END_SEARCH" };
};

export const getQuery = (q) => {
    return { type: "GET_QUERY", payload: q };
};

export const showError = () => {
    return { type: "SHOW_ERROR" };
};

export const getPhotosList = (list) => {
    return { type: "GET_PHOTOS_LIST", payload: list };
};

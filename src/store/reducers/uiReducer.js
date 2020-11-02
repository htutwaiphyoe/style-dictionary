const initialState = {
    error: false,
    list: 0,
    isRequested: false,
    query: "",
    spans: 0,
    page: 1,
    isSearched: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_ERROR":
            return { ...state, error: true };
        case "GET_PHOTOS_LIST":
            return { ...state, list: action.payload };
        case "FETCH_REQUEST":
            return { ...state, isRequested: true };
        case "FINISH_REQUEST":
            return { ...state, isRequested: false };
        case "GET_QUERY":
            return { ...state, query: action.payload };
        case "GET_SPAN":
            return { ...state, spans: action.payload };
        case "INCREMENT_PAGE":
            return { ...state, page: state.page + 1 };
        case "RESET_PAGE":
            return { ...state, page: 1 };
        case "START_SEARCH":
            return { ...state, isSearched: true };
        case "END_SEARCH":
            return { ...state, isSearched: false };
        default:
            return state;
    }
};

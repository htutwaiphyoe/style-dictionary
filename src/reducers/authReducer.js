const initialState = {
    isSignedIn: null,
    user: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return { ...state, isSignedIn: true, user: action.payload };
        case "SIGN_OUT":
            return { ...state, isSignedIn: false };
        default:
            return state;
    }
};

const initialState = null;
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PHOTO":
            return action.payload;
        default:
            return state;
    }
};

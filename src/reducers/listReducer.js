export default (state = 0, action) => {
    switch (action.type) {
        case "GET_PHOTOS_LIST":
            return action.payload;
        default:
            return state;
    }
};

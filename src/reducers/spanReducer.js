export default (state = 0, action) => {
    switch (action.type) {
        case "GET_SPAN":
            return action.payload;
        default:
            return state;
    }
};

export default (state = false, action) => {
    switch (action.type) {
        case "SHOW_ERROR":
            return true;
        default:
            return state;
    }
};

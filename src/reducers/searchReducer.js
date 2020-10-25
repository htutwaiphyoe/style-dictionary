export default (state = false, action) => {
    switch (action.type) {
        case "START_SEARCH":
            return true;
        case "END_SEARCH":
            return false;
        default:
            return state;
    }
};

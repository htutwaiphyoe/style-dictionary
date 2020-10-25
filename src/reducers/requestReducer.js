export default (state = false, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return true;
        case "FINISH_REQUEST":
            return false;
        default:
            return state;
    }
};

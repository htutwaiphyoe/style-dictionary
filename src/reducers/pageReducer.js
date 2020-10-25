export default (state = 1, action) => {
    switch (action.type) {
        case "INCREMENT_PAGE":
            return state + 1;
        case "RESET_PAGE":
            return 1;
        default:
            return state;
    }
};

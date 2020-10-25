import { act } from "react-dom/test-utils";

export default (state = "", action) => {
    switch (action.type) {
        case "GET_QUERY":
            return action.payload;
        default:
            return state;
    }
};

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    isSignedIn: null,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return updateObject(state, { isSignedIn: true, user: action.payload });
        case actionTypes.SIGN_OUT:
            return updateObject(state, { isSignedIn: false });
        default:
            return state;
    }
};

export default reducer;

import { combineReducers } from "redux";
import uiReducer from "./ui";
import authReducer from "./authReducer";
import homeReducer from "./home";
import searchReducer from "./search";
import detailReducer from "./detail";
import randomReducer from "./random";
export default combineReducers({
    home: homeReducer,
    search: searchReducer,
    detail: detailReducer,
    random: randomReducer,
    ui: uiReducer,
    auth: authReducer,
});

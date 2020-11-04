import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import uiReducer from "./uiReducer";
import photoReducer from "./photoReducer";
import authReducer from "./authReducer";
import homeReducer from "./home";
import searchReducer from "./search";
export default combineReducers({
    home: homeReducer,
    search: searchReducer,
    photos: photosReducer,
    ui: uiReducer,
    photo: photoReducer,
    auth: authReducer,
});

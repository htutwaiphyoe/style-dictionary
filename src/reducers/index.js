import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import uiReducer from "./uiReducer";
import photoReducer from "./photoReducer";
import authReducer from "./authReducer";
export default combineReducers({
    photos: photosReducer,
    ui: uiReducer,
    photo: photoReducer,
    auth: authReducer,
});

import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import uiReducer from "./uiReducer";
import photoReducer from "./photoReducer";
export default combineReducers({
    photos: photosReducer,
    ui: uiReducer,
    photo: photoReducer,
});

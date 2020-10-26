import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import uiReducer from "./uiReducer";
export default combineReducers({
    photos: photosReducer,
    ui: uiReducer,
});

import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import pageReducer from "./pageReducer";
import requestReducer from "./requestReducer";
import searchReducer from "./searchReducer";
import queryReducer from "./queryReducer";
import errorReducer from "./errorReducer";
import listReducer from "./listReducer";
import spanReducer from "./spanReducer";
export default combineReducers({
    photos: photosReducer,
    page: pageReducer,
    isRequested: requestReducer,
    isSearched: searchReducer,
    query: queryReducer,
    error: errorReducer,
    list: listReducer,
    spans: spanReducer,
});

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers/index";
ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

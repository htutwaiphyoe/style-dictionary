import React from "react";
import classes from "./Backdrop.module.css";
const Backdrop = (props) => {
    let component = null;
    if (props.sidebar) {
        component = <div className={classes.Backdrop} onClick={props.hideSidebar}></div>;
    }
    return component;
};

export default Backdrop;

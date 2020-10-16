import React from "react";
import classes from "./NavigationList.module.css";
const NavigationList = (props) => {
    return <div className={classes.NavigationList}>{props.children}</div>;
};

export default NavigationList;

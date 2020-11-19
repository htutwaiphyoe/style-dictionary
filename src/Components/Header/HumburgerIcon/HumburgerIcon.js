import React from "react";
import classes from "./HumburgerIcon.module.css";
const HumburgerIcon = (props) => {
    return (
        <div className={classes.HumburgerIcon} onClick={props.showSidebar}>
            <i className="bars icon large"></i>
        </div>
    );
};

export default HumburgerIcon;

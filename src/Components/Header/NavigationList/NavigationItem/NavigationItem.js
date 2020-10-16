import React from "react";
import classes from "./NavigationItem.module.css";
const Auth = (props) => {
    return (
        <div className={`${classes.NavigationItem} ${props.show ? classes.show : classes.show1}`}>
            <a href={props.route}>{props.type}</a>
        </div>
    );
};

export default Auth;

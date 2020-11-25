import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationItem.module.css";
const Auth = (props) => {
    return (
        <div className={`${classes.NavigationItem} ${props.show ? classes.show : classes.show1}`}>
            <Link to={props.route}>{props.type}</Link>
        </div>
    );
};

export default Auth;

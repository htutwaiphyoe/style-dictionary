import React from "react";
import logo from "../../../assets/Logo_tran.png";
import classes from "./Logo.module.css";
const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Photify Logo" />
        </div>
    );
};

export default Logo;

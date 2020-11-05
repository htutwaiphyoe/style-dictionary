import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo_tran.png";
import classes from "./Logo.module.css";
const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <Link to="/">
                <img src={logo} alt="Photify Logo" />
            </Link>
        </div>
    );
};

export default Logo;

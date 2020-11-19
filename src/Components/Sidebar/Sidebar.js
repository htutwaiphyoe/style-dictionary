import { render } from "@testing-library/react";
import React from "react";
import classes from "./Sidebar.module.css";
import Backdrop from "../Backdrop/Backdrop";
const Sidebar = (props) => {
    return (
        <React.Fragment>
            <Backdrop />
            <div className={classes.Sidebar}>
                <h1>Hello</h1>
            </div>
        </React.Fragment>
    );
};
export default Sidebar;

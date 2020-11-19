import React from "react";
import classes from "./Sidebar.module.css";
import Backdrop from "../Backdrop/Backdrop";
const Sidebar = (props) => {
    let cssClasses = [classes.Sidebar];
    if (props.sidebar) {
        cssClasses.push(classes.show);
    }
    return (
        <React.Fragment>
            <Backdrop sidebar={props.sidebar} hideSidebar={props.hideSidebar} />
            <div className={cssClasses.join(" ")}>
                <h1>Hello</h1>
            </div>
        </React.Fragment>
    );
};
export default Sidebar;

import React from "react";
import classes from "./Spinner.module.css";
const Spinner = (props) => {
    return (
        <div className={classes.skcubegrid}>
            <div className={`${classes.skcube} ${classes.skcube1}`}></div>
            <div className={`${classes.skcube} ${classes.skcube2}`}></div>
            <div className={`${classes.skcube} ${classes.skcube3}`}></div>
            <div className={`${classes.skcube} ${classes.skcube4}`}></div>
            <div className={`${classes.skcube} ${classes.skcube5}`}></div>
            <div className={`${classes.skcube} ${classes.skcube6}`}></div>
            <div className={`${classes.skcube} ${classes.skcube7}`}></div>
            <div className={`${classes.skcube} ${classes.skcube8}`}></div>
            <div className={`${classes.skcube} ${classes.skcube9}`}></div>
        </div>
    );
};

export default Spinner;

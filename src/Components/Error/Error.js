import React from "react";
import classes from "./Error.module.css";
const Error = (props) => {
    let element = null;
    if (props.message === "Network Error") {
        element = (
            <React.Fragment>
                <p>
                    No internet connection
                    <span role="img" aria-label="bomb">
                        💥
                    </span>
                    .
                </p>
                <p>
                    Please connect the internet and try again
                    <span role="img" aria-label="please">
                        🙏.
                    </span>
                </p>
            </React.Fragment>
        );
    } else if (props.message === "No photos found") {
        element = (
            <React.Fragment>
                <p>
                    No photos found
                    <span role="img" aria-label="bomb">
                        💔
                    </span>
                    .
                </p>
                <p>
                    Please try another one
                    <span role="img" aria-label="please">
                        🙏.
                    </span>
                </p>
            </React.Fragment>
        );
    } else {
        element = (
            <React.Fragment>
                <p>
                    Oops! Something went wrong
                    <span role="img" aria-label="bomb">
                        💣
                    </span>
                    .
                </p>
                <p>
                    Please reload the page and try again
                    <span role="img" aria-label="please">
                        🙏.
                    </span>
                </p>
            </React.Fragment>
        );
    }
    return <div className={classes.Error}>{element}</div>;
};

export default Error;

import React from "react";
import classes from "./Sidebar.module.css";
import Backdrop from "../Backdrop/Backdrop";
import NavigationItem from "../Header/NavigationList/NavigationItem/NavigationItem";
import GoogleOAuth from "../../Containers/GoogleOAuth/GoogleOAuth";
import userIcon from "../../assets/usertran.png";
const Sidebar = (props) => {
    let cssClasses = [classes.Sidebar];
    if (props.sidebar) {
        cssClasses.push(classes.show);
    }
    let { isSignedIn, user } = props.auth;
    return (
        <React.Fragment>
            <Backdrop sidebar={props.sidebar} hideSidebar={props.hideSidebar} />
            <div className={cssClasses.join(" ")}>
                <nav className={classes.Nav}>
                    <div className={classes.User}>
                        <div className={classes.UserPhoto}>
                            <img src={isSignedIn ? user.imageUrl : userIcon} alt={"User"} />
                        </div>
                        <p>{isSignedIn ? user.email : "Please sign in"} </p>
                    </div>
                    <div className={classes.NavItem}>
                        <NavigationItem route="/" type="HOME" hideSidebar={props.hideSidebar} />
                    </div>
                    <div className={classes.NavItem}>
                        <NavigationItem
                            route="/photos/random"
                            type="RANDOM"
                            fetchRandomPhoto={props.fetchRandomPhoto}
                        />
                    </div>
                    <div className={classes.NavItem}>
                        <GoogleOAuth />
                    </div>
                </nav>
                <div className={classes.Footer}>
                    Developed by{" "}
                    <a
                        href="https://htutwaiphyoe.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Htut Wai Phyoe
                    </a>
                    <div>Powered by Unsplash API</div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Sidebar;

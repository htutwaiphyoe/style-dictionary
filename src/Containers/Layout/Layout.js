import React from "react";

import Header from "../../Components/Header/Header";
import Logo from "../../Components/Header/Logo/Logo";
import SearchBar from "../Search/SearchBar/SearchBar";
import NavigationList from "../../Components/Header/NavigationList/NavigationList";
import NavigationItem from "../../Components/Header/NavigationList/NavigationItem/NavigationItem";
import GoogleOAuth from "../../Components/GoogleOAuth/GoogleOAuth";
import classes from "./Layout.module.css";
class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Logo />
                    <SearchBar />
                    <NavigationList>
                        <NavigationItem route="/" type="HOME" />
                        <NavigationItem route="/random" type="RANDOM" />
                    </NavigationList>
                    <GoogleOAuth />
                </Header>
                <main className={classes.Layout}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}

export default Layout;

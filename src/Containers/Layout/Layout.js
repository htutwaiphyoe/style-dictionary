import React from "react";
import { connect } from "react-redux";

import Header from "../../Components/Header/Header";
import Logo from "../../Components/Header/Logo/Logo";
import SearchBar from "../Search/SearchBar/SearchBar";
import NavigationList from "../../Components/Header/NavigationList/NavigationList";
import NavigationItem from "../../Components/Header/NavigationList/NavigationItem/NavigationItem";
import GoogleOAuth from "../../Containers/GoogleOAuth/GoogleOAuth";
import classes from "./Layout.module.css";
import * as actionCreators from "../../store/actions";
class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Logo />
                    <SearchBar />
                    <NavigationList>
                        <NavigationItem route="/" type="HOME" />
                        <NavigationItem
                            route="/photos/random"
                            type="RANDOM"
                            fetchRandomPhoto={this.props.fetchRandomPhoto}
                        />
                    </NavigationList>
                    <GoogleOAuth />
                </Header>
                <main className={classes.Layout}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = {
    fetchRandomPhoto: actionCreators.fetchRandomPhoto,
};
export default connect(null, mapDispatchToProps)(Layout);

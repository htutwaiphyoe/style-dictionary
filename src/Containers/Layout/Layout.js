import React from "react";
import { connect } from "react-redux";

import Header from "../../Components/Header/Header";
import Logo from "../../Components/Header/Logo/Logo";
import SearchBar from "../Search/SearchBar/SearchBar";
import NavigationList from "../../Components/Header/NavigationList/NavigationList";
import NavigationItem from "../../Components/Header/NavigationList/NavigationItem/NavigationItem";
import GoogleOAuth from "../../Containers/GoogleOAuth/GoogleOAuth";
import classes from "./Layout.module.css";
import HumburgerIcon from "../../Components/Header/HumburgerIcon/HumburgerIcon";
import Sidebar from "../../Components/Sidebar/Sidebar";
import * as actionCreators from "../../store/actions";
class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Sidebar
                        sidebar={this.props.sidebar}
                        auth={this.props.auth}
                        fetchRandomPhoto={this.props.fetchRandomPhoto}
                        hideSidebar={this.props.hideSidebar}
                    />
                    <HumburgerIcon showSidebar={this.props.showSidebar} />
                    <Logo />
                    <SearchBar />
                    <NavigationList>
                        <NavigationItem route="/" type="HOME" />
                        <NavigationItem
                            route="/photos/random"
                            type="RANDOM"
                            fetchRandomPhoto={this.props.fetchRandomPhoto}
                        />
                        <GoogleOAuth />
                    </NavigationList>
                </Header>
                <main className={classes.Layout}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sidebar: state.ui.sidebar,
        auth: state.auth,
    };
};
const mapDispatchToProps = {
    fetchRandomPhoto: actionCreators.fetchRandomPhoto,
    showSidebar: actionCreators.showSidebar,
    hideSidebar: actionCreators.hideSidebar,
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);

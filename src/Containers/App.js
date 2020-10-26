import React from "react";
import { connect } from "react-redux";
import classes from "./App.module.css";
import Header from "../Components/Header/Header";
import Logo from "../Components/Header/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import NavigationList from "../Components/Header/NavigationList/NavigationList";
import NavigationItem from "../Components/Header/NavigationList/NavigationItem/NavigationItem";
import PhotoList from "../Components/PhotoList/PhotoList";
import Error from "../Components/Error/Error";
import Spinner from "../Components/Spinner/Spinner";
import * as actionCreators from "../actions/index";
class App extends React.Component {
    componentDidMount() {
        this.props.getPhotos(this.props.page);
        try {
            window.addEventListener("scroll", () => {
                if (this.props.list.current) {
                    if (
                        window.scrollY + window.innerHeight >
                        (this.props.list.current.scrollHeight * 3) / 4
                    ) {
                        if (!this.props.isRequested && !this.props.isSearched) {
                            this.props.incrementPage();
                            this.props.getPhotos(this.props.page);
                        } else if (!this.props.isRequested && this.props.isSearched) {
                            this.props.incrementPage();
                            this.props.searchPhotos(this.props.page, this.props.query);
                        }
                    }
                }
            });
        } catch (e) {
            this.props.showError();
        }
    }

    show() {
        if (this.props.error) {
            return <Error />;
        }
        if (this.props.isRequested && this.props.page === 1) {
            return <Spinner />;
        }
        return <PhotoList />;
    }
    render() {
        return (
            <div className={classes.App}>
                <Header>
                    <Logo />
                    <SearchBar />
                    <NavigationList>
                        <NavigationItem type="HOME" route="/" />
                        <NavigationItem type="LOGIN" route="/" />
                        <NavigationItem type="SIGNUP" route="/" show />
                    </NavigationList>
                </Header>
                {this.show()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isRequested: state.ui.isRequested,
        page: state.ui.page,
        isSearched: state.ui.isSearched,
        query: state.ui.query,
        error: state.ui.error,
        list: state.ui.list,
    };
};
const mapDispatchToProps = {
    getPhotos: actionCreators.getPhotos,
    incrementPage: actionCreators.incrementPages,
    fetchRequest: actionCreators.fetchRequest,
    finishRequest: actionCreators.finishRequest,
    searchPhotos: actionCreators.searchPhotos,
    showError: actionCreators.showError,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

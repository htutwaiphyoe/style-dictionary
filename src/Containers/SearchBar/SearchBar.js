import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    onInputChange = (e) => {
        this.props.getQuery(e.target.value.trim());
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.props.query) {
            if (!this.props.isSearched) {
                this.props.startSearch();
                this.props.resetPages();
                this.props.resetPhotos();
                this.props.searchPhotos(this.props.page, this.props.query);
            } else {
                this.props.incrementPage();
                this.props.searchPhotos(this.props.page, this.props.query);
            }
        }
    };
    render() {
        return (
            <div className={classes.SearchBar}>
                <form className={classes.SearchForm} onSubmit={this.onFormSubmit}>
                    <i className={`search icon ${classes.SearchIcon}`}></i>
                    <input
                        type="text"
                        placeholder="Search free high-resolution photos..."
                        className={classes.SearchInput}
                        onChange={this.onInputChange}
                        value={this.props.query}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        isSearched: state.isSearched,
        query: state.query,
    };
};

const mapDispatchToProps = {
    searchPhotos: actionCreators.searchPhotos,
    incrementPage: actionCreators.incrementPages,
    startSearch: actionCreators.startSearch,
    resetPages: actionCreators.resetPages,
    resetPhotos: actionCreators.resetPhotos,
    getQuery: actionCreators.getQuery,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

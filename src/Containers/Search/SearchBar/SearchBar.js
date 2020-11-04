import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    state = {
        query: "",
    };
    onInputChange = (e) => {
        this.setState({ query: e.target.value });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        const q = this.state.query.trim();

        if (q) {
            this.props.history.push({
                pathname: "/search",
                search: `?q=${q}`,
            });
            //     this.props.getSearchPhotos(this.props.page, q);
            //     // if (!this.props.isSearched) {
            //     //     this.props.startSearch();
            //     //     this.props.resetPages();
            //     //     this.props.resetPhotos();
            //     //     this.props.searchPhotos(this.props.page, this.props.query);
            //     // } else {
            //     //     this.props.incrementPage();
            //     //     this.props.searchPhotos(this.props.page, this.props.query);
            //     // }
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
                        value={this.state.searchInput}
                    />
                </form>
            </div>
        );
    }
}

export default withRouter(SearchBar);

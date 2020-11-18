import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
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
            let search = `${encodeURIComponent("q")}=${encodeURIComponent(q)}`;
            this.props.history.push({
                pathname: "/search",
                search: `?${search}`,
            });
            if (this.props.query !== q) {
                this.props.clearSearchPhotos();
                window.scrollTo(0, 0);
            }
            this.props.getSearchPhotos(this.props.page, q);
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
const mapStateToProps = (state) => {
    return {
        searchPhotos: state.search.searchPhotos,
        loading: state.search.loading,
        error: state.search.error,
        page: state.search.page,
        query: state.search.query,
    };
};
const mapDispatchToProps = {
    getSearchPhotos: actionCreators.getSearchPhotos,
    clearSearchPhotos: actionCreators.clearSearchPhotos,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));

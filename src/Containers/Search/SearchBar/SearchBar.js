import React from "react";
import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    state = {
        searchInput: "",
    };
    onInputChange = (e) => {
        this.setState({ searchInput: e.target.value });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchInput);
        // if (this.props.query) {
        //     if (!this.props.isSearched) {
        //         this.props.startSearch();
        //         this.props.resetPages();
        //         this.props.resetPhotos();
        //         this.props.searchPhotos(this.props.page, this.props.query);
        //     } else {
        //         this.props.incrementPage();
        //         this.props.searchPhotos(this.props.page, this.props.query);
        //     }
        // }
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

// const mapStateToProps = (state) => {
//     return {
//         page: state.ui.page,
//         isSearched: state.ui.isSearched,
//         query: state.ui.query,
//     };
// };

// const mapDispatchToProps = {
//     searchPhotos: actionCreators.searchPhotos,
//     incrementPage: actionCreators.incrementPages,
//     startSearch: actionCreators.startSearch,
//     resetPages: actionCreators.resetPages,
//     resetPhotos: actionCreators.resetPhotos,
//     getQuery: actionCreators.getQuery,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBar;

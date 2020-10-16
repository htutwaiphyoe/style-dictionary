import React from "react";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    state = {};

    render() {
        return (
            <div className={classes.SearchBar}>
                <form className={classes.SearchForm}>
                    <i className={`search icon ${classes.SearchIcon}`}></i>
                    <input
                        type="text"
                        placeholder="Search free high-resolution photos..."
                        className={classes.SearchInput}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;

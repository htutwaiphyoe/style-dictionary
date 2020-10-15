import React from "react";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    state = {
        search: "",
    };
    onInputChange = (e) => {
        this.setState({ search: e.target.value.trim() });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.search) {
            this.props.onSubmit(this.state.search);
        }
    };
    render() {
        return (
            <div className={classes.SearchBar}>
                <form onSubmit={this.onFormSubmit}>
                    <div className={`ui icon input ${classes.SearchBox}`}>
                        <i className="search icon"></i>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search free high-resolution photos"
                            className={`${classes.SearchInput}`}
                            onChange={this.onInputChange}
                            value={this.state.search}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

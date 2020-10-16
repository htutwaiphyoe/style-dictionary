import React from "react";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    state = {
        inputText: "",
    };

    onInputChange = (e) => {
        this.setState({ inputText: e.target.value.trim() });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.inputText) this.props.onSubmit(this.state.inputText);
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
                        value={this.state.inputText}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;

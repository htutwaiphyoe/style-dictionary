import React, { Component } from "react";
import classes from "./SearchBar.module.css";
class Search extends Component {
    state = {
        input: "",
    };
    onInputChange = (e) => {
        this.setState({ input: e.target.value });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.input);
    };
    render() {
        return (
            <div className={`ui segment ${classes.SearchBar}`}>
                <form onSubmit={this.onFormSubmit} className={`ui form`}>
                    <div className={`ui icon input ${classes.input}`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={this.onInputChange}
                            value={this.state.input}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;

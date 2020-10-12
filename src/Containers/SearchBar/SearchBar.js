import React, { Component } from "react";
import classes from "./SearchBar.module.css";
class Search extends Component {
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
            <div className={`ui segment ${classes.SearchBar}`}>
                <form onSubmit={this.onFormSubmit} className={`ui form`}>
                    <div className={`ui icon input ${classes.input}`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={this.onInputChange}
                            value={this.state.search}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;

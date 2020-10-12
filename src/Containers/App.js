import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";

class App extends Component {
    onSearchSubmit = (searchInput) => {
        console.log(searchInput);
    };
    render() {
        return (
            <div className="App">
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;

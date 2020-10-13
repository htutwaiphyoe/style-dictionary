import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";

class App extends Component {
    state = {
        images: [],
    };
    onSearchSubmit = async (searchInput) => {
        try {
            const response = await unsplash.get(`/search/photos`, {
                params: {
                    query: searchInput,
                },
            });
            this.setState({
                images: response.data.results,
            });
        } catch (e) {
            alert(e.message);
        }
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

import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "../Components/ImageList/ImageList";
import Header from "../Components/Header/Header";
import Logo from "../Components/Header/Logo/Logo";
import Auth from "../Components/Header/Auth/Auth";
import "./App.css";

class App extends Component {
    state = {
        images: [],
        searchImages: [],
        list: null,
        page: 1,
        requested: false,
        search: false,
        searchInput: "",
    };
    onSearchSubmit = async (searchInput) => {
        try {
            if (this.state.searchInput !== searchInput) {
                this.setState({
                    page: 1,
                });
            }
            if (!this.state.search) {
                this.setState({
                    page: 1,
                });
            }
            this.setState({
                search: true,
                searchInput,
            });
            this.setState((state, props) => {
                return {
                    requested: true,
                };
            });
            const response = await unsplash.get(`/search/photos?page=${this.state.page}`, {
                params: {
                    query: searchInput,
                },
            });
            const photos = [...this.state.searchImages];

            this.setState({ searchImages: [...photos, ...response.data.results] });
            this.setState((state, props) => {
                return {
                    requested: false,
                };
            });
            console.log(this.state.searchImages);
        } catch (e) {
            alert(e.message);
        }
    };
    getList = (list) => {
        this.setState({
            list,
        });
    };
    getPhotos = async () => {
        try {
            this.setState((state, props) => {
                return {
                    requested: true,
                };
            });
            const response = await unsplash.get(`/photos?page=${this.state.page}`);
            const photos = [...this.state.images];

            this.setState({ images: [...photos, ...response.data] });

            this.setState((state, props) => {
                return {
                    requested: false,
                };
            });
        } catch (e) {
            alert(e.message);
        }
    };
    componentDidMount() {
        this.getPhotos();
        window.addEventListener("scroll", () => {
            if (this.state.list) {
                if (window.scrollY + window.innerHeight >= this.state.list.current.scrollHeight) {
                    if (!this.state.requested && !this.state.search) {
                        this.setState((state, props) => {
                            return {
                                page: state.page++,
                            };
                        });
                        this.getPhotos();
                    } else if (!this.state.requested && this.state.search) {
                        console.log(this.state.page);
                        let page = this.state.page;
                        this.setState({
                            page: page + 1,
                        });
                        this.onSearchSubmit(this.state.searchInput);
                    }
                }
            }
        });
    }
    render() {
        return (
            <div className="App">
                <Header>
                    <Logo />
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <Auth />
                </Header>
                <ImageList
                    images={this.state.search ? this.state.searchImages : this.state.images}
                    list={this.getList}
                />
            </div>
        );
    }
}

export default App;

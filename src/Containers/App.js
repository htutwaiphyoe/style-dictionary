import React from "react";
import "./App.css";
import unsplash from "../api/unsplash";
import Header from "../Components/Header/Header";
import Logo from "../Components/Header/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import NavigationList from "../Components/Header/NavigationList/NavigationList";
import NavigationItem from "../Components/Header/NavigationList/NavigationItem/NavigationItem";
import PhotoList from "../Components/PhotoList/PhotoList";
import Error from "../Components/Error/Error";
import Spinner from "../Components/Spinner/Spinner";
class App extends React.Component {
    state = {
        photos: [],
        page: 1,
        photoList: null,
        requested: false,
        error: false,
        query: "",
        search: false,
        loading: false,
    };

    loadPhotos = async (query) => {
        try {
            let url = "/photos";
            let params = {
                page: this.state.page,
            };
            this.setState({
                requested: true,
            });
            if (query) {
                if (this.state.query !== query && this.state.query !== "") {
                    this.setState({
                        search: true,
                        query,
                        page: 1,
                        photos: [],
                        loading: true,
                    });
                }
                url = "/search/photos";

                if (!this.state.search) {
                    this.setState({
                        search: true,
                        query,
                        page: 1,
                        photos: [],
                        loading: true,
                    });
                }

                params = {
                    page: this.state.page,
                    query,
                };
            }
            const response = await unsplash.get(url, {
                params,
            });

            let photos = [...this.state.photos];

            const data = query ? response.data.results : response.data;
            photos.forEach((photo) => {
                data.forEach((el, index) => {
                    if (el.id === photo.id) {
                        data.splice(index, 1);
                    }
                });
            });

            this.setState({
                photos: [...photos, ...data],
                requested: false,
                loading: false,
            });
        } catch (err) {
            this.setState({
                error: true,
            });
        }
    };
    componentDidMount() {
        this.loadPhotos();
        window.addEventListener("scroll", () => {
            if (
                window.scrollY + window.innerHeight >
                (this.state.photoList.current.scrollHeight * 3) / 4
            ) {
                if (!this.state.requested && !this.state.search) {
                    let page = this.state.page;
                    this.setState({
                        page: page + 1,
                    });
                    this.loadPhotos();
                } else if (!this.state.requested && this.state.search) {
                    let page = this.state.page;
                    this.setState({
                        page: page + 1,
                    });
                    this.loadPhotos(this.state.query);
                }
            }
        });
    }

    setPhotoList = (list) => {
        this.setState({ photoList: list });
    };

    show() {
        if (this.state.error) {
            return <Error />;
        }
        if (this.state.loading) {
            return <Spinner />;
        }
        return <PhotoList photos={this.state.photos} setPhotoList={this.setPhotoList} />;
    }
    render() {
        return (
            <div className="App">
                <Header>
                    <Logo />
                    <SearchBar onSubmit={this.loadPhotos} />
                    <NavigationList>
                        <NavigationItem type="HOME" route="/" />
                        <NavigationItem type="LOGIN" route="/" />
                        <NavigationItem type="SIGNUP" route="/" show />
                    </NavigationList>
                </Header>
                {this.show()}
            </div>
        );
    }
}

export default App;

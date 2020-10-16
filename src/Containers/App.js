import React from "react";
import "./App.css";
import unsplash from "../api/unsplash";
import Header from "../Components/Header/Header";
import Logo from "../Components/Header/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import NavigationList from "../Components/Header/NavigationList/NavigationList";
import NavigationItem from "../Components/Header/NavigationList/NavigationItem/NavigationItem";
import PhotoList from "../Components/PhotoList/PhotoList";
class App extends React.Component {
    state = {
        photos: [],
        page: 1,
        photoList: null,
        requested: false,
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
                url = "/search/photos";
                params = {
                    page: this.state.page,
                    query,
                };
            }
            const response = await unsplash.get(url, {
                params,
            });
            console.log(response.data);
            let photos = [...this.state.photos];
            photos.forEach((photo) => {
                response.data.forEach((el, index) => {
                    if (el.id === photo.id) {
                        response.data.splice(index, 1);
                    }
                });
            });
            console.log(response.data);
            this.setState({
                photos: [...photos, ...response.data],
                requested: false,
            });
            console.log(this.state.photos);
        } catch (err) {
            alert(err.message);
        }
    };
    componentDidMount() {
        this.loadPhotos();
        window.addEventListener("scroll", () => {
            if (
                window.scrollY + window.innerHeight >
                (this.state.photoList.current.scrollHeight * 3) / 4
            ) {
                if (!this.state.requested) {
                    this.setState((state, props) => {
                        return {
                            page: state.page++,
                        };
                    });
                    this.loadPhotos();
                }
            }
        });
    }

    setPhotoList = (list) => {
        this.setState({ photoList: list });
    };
    render() {
        return (
            <div className="App">
                <Header>
                    <Logo />
                    <SearchBar />
                    <NavigationList>
                        <NavigationItem type="HOME" route="/" />
                        <NavigationItem type="LOGIN" route="/" />
                        <NavigationItem type="SIGNUP" route="/" show />
                    </NavigationList>
                </Header>
                <PhotoList photos={this.state.photos} setPhotoList={this.setPhotoList} />
            </div>
        );
    }
}

export default App;

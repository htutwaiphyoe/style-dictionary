import React from "react";
import { connect } from "react-redux";

import PhotoList from "../../Components/PhotoList/PhotoList";
import Spinner from "../../Components/Spinner/Spinner";
import Error from "../../Components/Error/Error";
import * as actionCreators from "../../store/actions";
class Home extends React.Component {
    state = {
        list: null,
    };
    componentDidMount() {
        this.props.getHomePhotos(this.props.page);
        window.addEventListener("scroll", () => {
            if (this.state.list.current) {
                if (
                    window.scrollY + window.innerHeight >
                    (this.state.list.current.scrollHeight * 4) / 5
                ) {
                    if (!this.props.isRequested) {
                        this.props.incrementPage();
                        this.props.getHomePhotos(this.props.page);
                    }
                }
            }
        });
    }
    getPhotosList = (list) => {
        this.setState({ list });
    };
    render() {
        let components = (
            <PhotoList photos={this.props.photos} getPhotosList={this.getPhotosList} />
        );
        if (this.props.loading) {
            components = <Spinner />;
        }
        if (this.props.error) {
            components = <Error message={this.props.error.message} />;
        }
        return <React.Fragment>{components}</React.Fragment>;
    }
}
const mapStateToProps = (state) => {
    return {
        photos: state.home.photos,
        loading: state.home.loading,
        error: state.home.error,
        page: state.ui.page,
        isRequested: state.ui.isRequested,
    };
};
const mapDispatchToProps = {
    getHomePhotos: actionCreators.getHomePhotos,
    incrementPage: actionCreators.incrementPage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

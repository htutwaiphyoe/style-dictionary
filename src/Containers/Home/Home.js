import React from "react";
import { connect } from "react-redux";

import PhotoList from "../../Components/PhotoList/PhotoList";
import Spinner from "../../Components/Spinner/Spinner";
import Error from "../../Components/Error/Error";
import * as actionCreators from "../../store/actions";
class Home extends React.Component {
    componentDidMount() {
        this.props.resetPage();
        this.props.clearHomePhotos();
        window.scrollTo(0, 0);

        this.props.getHomePhotos(1);
        window.addEventListener("scroll", () => {
            if (this.props.list.current) {
                if (
                    window.scrollY + window.innerHeight >
                    (this.props.list.current.scrollHeight * 3) / 4
                ) {
                    if (!this.props.isRequested) {
                        this.props.incrementPage();
                        this.props.getHomePhotos(this.props.page);
                    }
                }
            }
        });
    }

    render() {
        let components = (
            <PhotoList photos={this.props.photos} getPhotosList={this.props.getPhotosList} />
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
        list: state.ui.list,
    };
};
const mapDispatchToProps = {
    getHomePhotos: actionCreators.getHomePhotos,
    incrementPage: actionCreators.incrementPage,
    getPhotosList: actionCreators.getPhotosList,
    resetPage: actionCreators.resetPage,
    clearHomePhotos: actionCreators.clearHomePhotos,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

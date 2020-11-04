import React from "react";
import { connect } from "react-redux";

import PhotoList from "../../Components/PhotoList/PhotoList";
import Spinner from "../../Components/Spinner/Spinner";
import Error from "../../Components/Error/Error";
import * as actionCreators from "../../store/actions";
class Home extends React.Component {
    componentDidMount() {
        this.props.getHomePhotos(this.props.page);
    }
    render() {
        let components = <PhotoList photos={this.props.photos} />;
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
        page: state.home.page,
    };
};
const mapDispatchToProps = {
    getHomePhotos: actionCreators.getHomePhotos,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

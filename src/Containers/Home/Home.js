import React from "react";
import { connect } from "react-redux";

import PhotoList from "../../Components/PhotoList/PhotoList";
import * as actionCreators from "../../store/actions";
class Home extends React.Component {
    componentDidMount() {
        this.props.getPhotos(this.props.page);
    }
    render() {
        return (
            <React.Fragment>
                <PhotoList photos={this.props.photos} />
            </React.Fragment>
        );
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
    getPhotos: actionCreators.getPhotos,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

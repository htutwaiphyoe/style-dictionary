import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import PhotoDetail from "../../Components/PhotoDetail/PhotoDetail";
import Spinner from "../../Components/Spinner/Spinner";
import Error from "../../Components/Error/Error";
class Random extends React.Component {
    componentDidMount() {
        this.props.clearRandomPhoto();
        window.scrollTo(0, 0);
        this.props.fetchRandomPhoto();
    }
    render() {
        let components = null;
        if (this.props.photo) {
            components = (
                <PhotoDetail photo={this.props.photo} isSignedIn={this.props.isSignedIn} />
            );
        }
        if (this.props.loading) {
            components = <Spinner />;
        }
        if (this.props.error) {
            components = <Error message={this.props.error.message} />;
        }
        return components;
    }
}
const mapStateToProps = (state) => {
    return {
        photo: state.random.photo,
        isSignedIn: state.auth.isSignedIn,
        loading: state.ui.loading,
        error: state.ui.error,
    };
};
const mapDispatchToProps = {
    fetchRandomPhoto: actionCreators.fetchRandomPhoto,
    clearRandomPhoto: actionCreators.clearRandomPhoto,
};
export default connect(mapStateToProps, mapDispatchToProps)(Random);

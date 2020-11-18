import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import PhotoDetail from "../../Components/PhotoDetail/PhotoDetail";
import Spinner from "../../Components/Spinner/Spinner";
import Error from "../../Components/Error/Error";
class Detail extends React.Component {
    componentDidMount() {
        this.props.clearPhotoDetail();
        window.scrollTo(0, 0);
        this.props.fetchPhotoDetail(this.props.match.params.id);
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
        photo: state.detail.photo,
        isSignedIn: state.auth.isSignedIn,
        loading: state.ui.loading,
        error: state.ui.error,
    };
};
const mapDispatchToProps = {
    fetchPhotoDetail: actionCreators.fetchPhotoDetail,
    clearPhotoDetail: actionCreators.clearPhotoDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);

import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import PhotoDetail from "../../Components/PhotoDetail/PhotoDetail";
import Spinner from "../../Components/Spinner/Spinner";
class Detail extends React.Component {
    componentDidMount() {
        this.props.fetchPhotoDetail(this.props.match.params.id);
    }
    render() {
        let components = <Spinner />;
        if (this.props.photo) {
            components = <PhotoDetail photo={this.props.photo} />;
        }
        return components;
    }
}
const mapStateToProps = (state) => {
    return {
        photo: state.detail.photo,
    };
};
const mapDispatchToProps = {
    fetchPhotoDetail: actionCreators.fetchPhotoDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);

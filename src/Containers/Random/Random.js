import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import PhotoDetail from "../../Components/PhotoDetail/PhotoDetail";
import Spinner from "../../Components/Spinner/Spinner";
class Random extends React.Component {
    componentDidMount() {
        this.props.fetchRandomPhoto();
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
        photo: state.random.photo,
    };
};
const mapDispatchToProps = {
    fetchRandomPhoto: actionCreators.fetchRandomPhoto,
};
export default connect(mapStateToProps, mapDispatchToProps)(Random);

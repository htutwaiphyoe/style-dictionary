import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import PhotoList from "../../Components/PhotoList/PhotoList";
import Spinner from "../../Components/Spinner/Spinner";
import Error from "../../Components/Error/Error";
class Search extends React.Component {
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        let q = "";
        for (let params of query.entries()) {
            q = params[1];
        }
        this.props.getSearchPhotos(this.props.page, q);
    }
    render() {
        let components = <PhotoList photos={this.props.searchPhotos} />;
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
        searchPhotos: state.search.searchPhotos,
        loading: state.search.loading,
        error: state.search.error,
        page: state.search.page,
        query: state.search.query,
    };
};
const mapDispatchToProps = {
    getSearchPhotos: actionCreators.getSearchPhotos,
    clearSearchPhotos: actionCreators.clearSearchPhotos,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

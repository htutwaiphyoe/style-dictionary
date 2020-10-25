import React from "react";
import { connect } from "react-redux";
import PhotoCard from "./PhotoCard/PhotoCard";
import classes from "./PhotoList.module.css";
import Error from "../Error/Error";
import * as actionCreators from "../../actions";
class PhotoList extends React.Component {
    photoListRef = React.createRef();
    componentDidMount() {
        this.props.getPhotosList(this.photoListRef);
    }

    render() {
        const photos = this.props.photos.map((photo) => <PhotoCard photo={photo} key={photo.id} />);
        if (photos.length <= 0) {
            return <Error message="No photos found" />;
        }
        return (
            <div className={classes.PhotoList} ref={this.photoListRef}>
                {photos}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    };
};

const mapDispatchToProps = {
    getPhotosList: actionCreators.getPhotosList,
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);

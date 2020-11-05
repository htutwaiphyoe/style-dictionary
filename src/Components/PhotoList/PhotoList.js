import React from "react";
import PhotoCard from "./PhotoCard/PhotoCard";
import classes from "./PhotoList.module.css";
import Error from "../Error/Error";
class PhotoList extends React.Component {
    photoListRef = React.createRef();
    componentDidMount() {
        this.props.getPhotosList(this.photoListRef);
    }

    render() {
        if (this.props.photos.length <= 0) {
            return <Error message="No photos found" />;
        }
        const photos = this.props.photos.map((photo) => <PhotoCard photo={photo} key={photo.id} />);

        return (
            <div className={classes.PhotoList} ref={this.photoListRef}>
                {photos}
            </div>
        );
    }
}

export default PhotoList;

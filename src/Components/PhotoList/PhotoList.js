import React from "react";
import PhotoCard from "./PhotoCard/PhotoCard";
import classes from "./PhotoList.module.css";
class ImageList extends React.Component {
    photoListRef = React.createRef();
    componentDidMount() {
        console.log(this.photoListRef);
        this.props.setPhotoList(this.photoListRef);
    }
    render() {
        const photos = this.props.photos.map((photo) => <PhotoCard photo={photo} key={photo.id} />);
        return (
            <div className={classes.PhotoList} ref={this.photoListRef}>
                {photos}
            </div>
        );
    }
}

export default ImageList;

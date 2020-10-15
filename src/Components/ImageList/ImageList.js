import React from "react";
import classes from "./ImageList.module.css";
import ImageCard from "./ImageCard/ImageCard";
class ImageList extends React.Component {
    list = React.createRef();
    componentDidMount() {
        this.props.list(this.list);
    }
    render() {
        const images = this.props.images.map((image) => <ImageCard key={image.id} image={image} />);

        return (
            <div className={classes.ImageList} ref={this.list}>
                {images}
            </div>
        );
    }
}

export default ImageList;

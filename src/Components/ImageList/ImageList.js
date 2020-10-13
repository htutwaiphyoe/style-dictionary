import React from "react";
import classes from "./ImageList.module.css";
import ImageCard from "./ImageCard/ImageCard";
const ImageList = (props) => {
    const images = props.images.map((image) => <ImageCard key={image.id} image={image} />);

    return <div className={classes.ImageList}>{images}</div>;
};

export default ImageList;

import React from "react";

const ImageList = (props) => {
    return props.images.map((image) => (
        <div key={image.id}>
            <img src={image.urls.regular} alt={image.alt_description} />
        </div>
    ));
};

export default ImageList;

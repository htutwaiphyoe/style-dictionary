import React from "react";
import classes from "./ImageCard.module.css";
class ImageCard extends React.Component {
    state = {
        span: 0,
    };
    imageRef = React.createRef();

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const span = Math.ceil(this.imageRef.current.clientHeight / 10) + 2;
        this.setState({ span });
    };
    render() {
        const { alt_description, urls } = this.props.image;
        return (
            <div className={classes.ImageCard} style={{ gridRowEnd: `span ${this.state.span}` }}>
                <img alt={alt_description} src={urls.regular} ref={this.imageRef} />
            </div>
        );
    }
}

export default ImageCard;

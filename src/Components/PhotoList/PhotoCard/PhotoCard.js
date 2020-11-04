import React from "react";
import classes from "./PhotoCard.module.css";
import { withRouter } from "react-router-dom";
class PhotoCard extends React.Component {
    state = {
        spans: 0,
    };
    photoRef = React.createRef();
    componentDidMount() {
        this.photoRef.current.addEventListener("load", this.setSpans);
    }
    setSpans = () => {
        if (this.photoRef.current) {
            let spans = Math.round(this.photoRef.current.clientHeight / 100);

            this.setState({
                spans,
            });
        }
    };
    onImageClick = () => {
        this.props.history.push(`/photos/${this.props.photo.id}`);
    };
    render() {
        const { urls, alt_description } = this.props.photo;
        return (
            <div
                className={classes.PhotoCard}
                style={{
                    gridRowEnd: `span ${this.state.spans}`,
                    backgroundImage: `url('${urls.regular}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
                onClick={this.onImageClick}
            >
                <img src={urls.regular} alt={alt_description} ref={this.photoRef} />
            </div>
        );
    }
}

export default withRouter(PhotoCard);

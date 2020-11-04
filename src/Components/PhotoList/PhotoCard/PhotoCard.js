import React from "react";
import classes from "./PhotoCard.module.css";
import { Link } from "react-router-dom";
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
            >
                <Link to={`/${this.props.photo.id}`}>
                    <img src={urls.regular} alt={alt_description} ref={this.photoRef} />
                </Link>
            </div>
        );
    }
}

export default PhotoCard;

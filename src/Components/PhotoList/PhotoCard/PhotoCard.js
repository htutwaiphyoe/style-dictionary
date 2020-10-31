import React from "react";
import classes from "./PhotoCard.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../../../actions";
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
            let spans = (this.photoRef.current.clientHeight / 100).toFixed(0);

            this.setState({
                spans,
            });
        }

        // this.props.getSpan(spans);
    };

    render() {
        const { urls, alt_description } = this.props.photo;
        return (
            <div className={classes.PhotoCard} style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <Link to={`/${this.props.photo.id}`}>
                    <img src={urls.regular} alt={alt_description} ref={this.photoRef} />
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spans: state.ui.spans,
    };
};

const mapDispatchToProps = {
    getSpan: actionCreators.getSpan,
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoCard);

import React from "react";
import classes from "./PhotoCard.module.css";
import { connect } from "react-redux";
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
        const spans = Math.ceil(this.photoRef.current.clientHeight / 100) + 1;
        this.setState({
            spans,
        });
        // this.props.getSpan(spans);
    };
    render() {
        const { urls, alt_description } = this.props.photo;
        return (
            <div className={classes.PhotoCard} style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img src={urls.regular} alt={alt_description} ref={this.photoRef} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spans: state.spans,
    };
};

const mapDispatchToProps = {
    getSpan: actionCreators.getSpan,
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoCard);

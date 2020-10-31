import React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import * as actionCreators from "../../actions";
import classes from "./PhotoDetail.module.css";
import Error from "../Error/Error";
class PhotoDetail extends React.Component {
    componentDidMount() {
        const id = this.props.location.pathname.split("/")[1];
        if (id) {
            this.props.getPhoto(id);
        }
    }

    show() {
        let component = <Spinner />;
        if (this.props.photo) {
            component = (
                <section className={classes.PhotoDetail}>
                    <div className={classes.Detail}>
                        <div className={classes.Profile}>
                            <div className={classes.ProfileImageBox}>
                                <img
                                    src={this.props.photo.user.profile_image.small}
                                    alt={this.props.photo.user.name}
                                    className={classes.ProfileImage}
                                />
                            </div>
                            <div className={classes.ProfileName}>
                                <h2>{this.props.photo.user.name}</h2>
                                <h6>@{this.props.photo.user.username}</h6>
                            </div>
                        </div>
                        <div className={classes.Statistics}>
                            <div className={classes.StatisticsItem}>
                                <ion-icon name="heart"></ion-icon>
                                <span>{this.props.photo.likes}</span>
                            </div>
                            <div className={classes.StatisticsItem}>
                                <ion-icon name="eye"></ion-icon>
                                <span>{this.props.photo.views}</span>
                            </div>
                            <div className={classes.StatisticsItem}>
                                <ion-icon name="arrow-down-circle"></ion-icon>
                                <span>{this.props.photo.downloads}</span>
                            </div>
                        </div>
                        <div className={classes.Download}>
                            {this.props.isSignedIn ? (
                                <a
                                    title="Download photo"
                                    href={`https://unsplash.com/photos/${this.props.photo.id}/download?force=true&w=2400`}
                                    download=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download
                                </a>
                            ) : (
                                `Sign In to Download`
                            )}
                        </div>
                    </div>
                    <div
                        className={
                            this.props.photo.height > this.props.photo.width
                                ? classes.PhotoPort
                                : classes.PhotoLand
                        }
                    >
                        <img
                            src={this.props.photo.urls.regular}
                            alt={this.props.photo.alt_description}
                            className={classes.Photo}
                        />
                    </div>
                </section>
            );
        }
        if (this.props.error) {
            component = <Error />;
        }
        return component;
    }
    render() {
        return this.show();
    }
}
const mapStateToProps = (state) => {
    return {
        photo: state.photo,
        error: state.ui.error,
        isSignedIn: state.auth.isSignedIn,
    };
};
const mapDispatchToProps = {
    getPhoto: actionCreators.getPhoto,
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);

import React from "react";
import classes from "./PhotoDetail.module.css";
const PhotoDetail = (props) => {
    console.log(props);
    return (
        <section className={classes.PhotoDetail}>
            <div className={classes.Detail}>
                <div className={classes.Profile}>
                    <div className={classes.ProfileImageBox}>
                        <img
                            src={props.photo.user.profile_image.small}
                            alt={props.photo.user.name}
                            className={classes.ProfileImage}
                        />
                    </div>
                    <div className={classes.ProfileName}>
                        <h2>{props.photo.user.name}</h2>
                        <h6>@{props.photo.user.username}</h6>
                    </div>
                </div>
                <div className={classes.Statistics}>
                    <div className={classes.StatisticsItem}>
                        <ion-icon name="heart"></ion-icon>
                        <span>{props.photo.likes}</span>
                    </div>
                    <div className={classes.StatisticsItem}>
                        <ion-icon name="eye"></ion-icon>
                        <span>{props.photo.views}</span>
                    </div>
                    <div className={classes.StatisticsItem}>
                        <ion-icon name="arrow-down-circle"></ion-icon>
                        <span>{props.photo.downloads}</span>
                    </div>
                </div>
                <div className={classes.Download}>
                    {props.isSignedIn ? (
                        <a
                            title="Download photo"
                            href={`https://unsplash.com/photos/${props.photo.id}/download?force=true&w=2400`}
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
                    props.photo.height > props.photo.width ? classes.PhotoPort : classes.PhotoLand
                }
            >
                <img
                    src={props.photo.urls.regular}
                    alt={props.photo.alt_description}
                    className={classes.Photo}
                />
            </div>
        </section>
    );
};

export default PhotoDetail;

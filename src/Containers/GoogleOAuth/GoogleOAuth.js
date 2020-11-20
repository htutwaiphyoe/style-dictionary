import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import classes from "./GoogleOAuth.module.css";
class GoogleOAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "180397154937-bhq6t0jem66letmnu61b7rmplf26j4h3.apps.googleusercontent.com",
                    scope: "email",
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setAuthState(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(() =>
                        this.setAuthState(this.auth.isSignedIn.get())
                    );
                });
        });
    }
    setAuthState = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn({
                id: this.auth.currentUser.get().getId(),
                name: this.auth.currentUser.get().getBasicProfile().getName(),
                email: this.auth.currentUser.get().getBasicProfile().getEmail(),
                imageUrl: this.auth.currentUser.get().getBasicProfile().getImageUrl(),
            });
        } else {
            this.props.signOut();
        }
    };
    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
        // this.props.hideSidebar();
    };
    onClickHandler = () => {
        if (this.props.isSignedIn) {
            this.onSignOutClick();
        } else {
            this.onSignInClick();
        }
    };
    show() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <span>LOG OUT</span>;
        } else {
            return <span>SIGN IN</span>;
        }
    }
    render() {
        return (
            <div className={classes.GoogleOAuth} onClick={this.onClickHandler}>
                <ion-icon name="logo-google"></ion-icon>
                {this.show()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
    };
};
const mapDispatchToProps = {
    signIn: actionCreators.signIn,
    signOut: actionCreators.signOut,
    hideSidebar: actionCreators.hideSidebar,
};
export default connect(mapStateToProps, mapDispatchToProps)(GoogleOAuth);

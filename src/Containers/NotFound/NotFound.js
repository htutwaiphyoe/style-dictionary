import React from "react";
import Error from "../../Components/Error/Error";

class NotFound extends React.Component {
    render() {
        return <Error message="404" />;
    }
}

export default NotFound;

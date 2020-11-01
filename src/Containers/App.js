import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import PhotoList from "./PhotoList/PhotoList";
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Layout>
                        <PhotoList />
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Home />
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;

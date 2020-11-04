import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Search from "./Search/Search";
// const Search = React.lazy(() => import("./Search/Search"));
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/search" component={Search} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;

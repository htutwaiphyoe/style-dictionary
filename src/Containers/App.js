import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import { Suspense } from "react";
const Search = React.lazy(() => import("./Search/Search"));
const Detail = React.lazy(() => import("./Detail/Detail"));
const Random = React.lazy(() => import("./Random/Random"));
const NotFound = React.lazy(() => import("./NotFound/NotFound"));
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Suspense fallback={null}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/search" component={Search} />
                            <Route exact path="/photos/random" component={Random} />
                            <Route exact path="/photos/:id" component={Detail} />
                            <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;

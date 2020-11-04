import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import { Suspense } from "react";
const Search = React.lazy(() => import("./Search/Search"));
const Detail = React.lazy(() => import("./Detail/Detail"));
const Random = React.lazy(() => import("./Random/Random"));
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Suspense fallback={null}>
                            <Switch>
                                <Route path="/search" component={Search} />
                                <Route exact path="/photos/random" component={Random} />
                                <Route path="/photos/:id" component={Detail} />
                            </Switch>
                        </Suspense>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;

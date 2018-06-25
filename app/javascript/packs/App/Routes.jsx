import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import history from "./history";

import Home from "./components/Home";
import SignupContainer from "./components/Signup/SignupContainer";
import SigninContainer from "./components/Signin/SigninContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import NewGroupContainer from "./components/Group/NewGroupContainer";
import BrowseGroupContainer from "./components/Group/BrowseGroupContainer";
// import NotFound from "./components/Common/NotFound";

const Routes = () => (
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/signin" component={SigninContainer} />
        <Dashboard>
          <Route path="/group/new-group" component={NewGroupContainer} />
          <Route path="/group/browse-group" component={BrowseGroupContainer} />
        </Dashboard>
        {/* <Route path='*' component={NotFound} /> */}
      </Switch>
    </Router>
  </BrowserRouter>
)

export default Routes;

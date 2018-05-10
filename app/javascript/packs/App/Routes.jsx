import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import history from "./history";

import Home from "./components/Home";
import SignupContainer from "./components/Signup/SignupContainer";
import SigninContainer from "./components/Signin/SigninContainer";
import Dashboard from "./components/Dashboard/Dashboard";


const Routes = () => (
  <BrowserRouter>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/signin" component={SigninContainer} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  </BrowserRouter>
)

export default Routes;

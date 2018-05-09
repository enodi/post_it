import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home";
import SignupContainer from "./components/Signup/SignupContainer";
import SigninContainer from "./components/Signin/SigninContainer";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/signin' component={SigninContainer} />
    </div>
  </BrowserRouter>
)

export default Routes;

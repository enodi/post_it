import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home";
import SignupContainer from "./components/Signup/SignupContainer";
import Signin from "./components/Signin/Signin";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/signin' component={Signin} />
    </div>
  </BrowserRouter>
)

export default Routes;

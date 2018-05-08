import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div className="header">
    <h2><NavLink to="/">PostIt</NavLink></h2>
    <ul>
      <li><NavLink to="/signin">Signin</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
    </ul>
  </div>
)

export default Header;

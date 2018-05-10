import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'

const Header = props => (
  <div className="header">
    <h2><NavLink to="/">PostIt</NavLink></h2>
      {
        props.loggedIn ? 
        <ul>
          <li>
            <NavLink to="/signin">
              hello &nbsp;{
                props.username.charAt(0).toUpperCase() + props.username.slice(1)
              }
            </NavLink>
          </li>
        </ul> : 
        <ul>
          <li><NavLink to="/signin">Signin</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </ul>
      }
  </div>
)

const mapStateToProps = state => ({
  loggedIn: state.authReducer.isAuthenticated,
  username: state.authReducer.user.username
});

export default connect(mapStateToProps)(Header);

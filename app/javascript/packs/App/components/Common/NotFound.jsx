import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div className="no-access-container">
    <h1>404 NOT FOUND</h1>
    <p>This Page doesn't exist.
    Click the link below to return back to the home page</p>
    <NavLink to="/">HOME</NavLink>
  </div>
);

export default NotFound;

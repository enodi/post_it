import React from "react";
import backgroundImage from "../../assets/images/postit.jpeg";

const Header = () => (
  <div>
    <div className="header">
      <h2>PostIt</h2>
      <ul>
        <li><a href="#">Signin</a></li>
        <li><a href="#">Signup</a></li>
      </ul>
    </div>
    <div className="background">
      <img src={backgroundImage} alt="background image" />
    </div>
  </div>
)

export default Header;

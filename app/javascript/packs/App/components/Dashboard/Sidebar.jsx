import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { signoutAction } from "../../actions/authAction";
import profileImage from "../../assets/images/profile.svg";
import homeIcon from "../../assets/images/home-page.svg";
import messageIcon from "../../assets/images/send.svg";
import groupIcon from "../../assets/images/group.svg";
import createGroupIcon from "../../assets/images/create-group.svg";
import browseGroupIcon from "../../assets/images/browse-group.svg";
import addUserIcon from "../../assets/images/add-user.svg";
import settingsIcon from "../../assets/images/settings.svg";
import logoutIcon from "../../assets/images/logout.svg";

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = event => {
    event.preventDefault();
    this.props.signoutAction()
  }
  
  render() {
    return (
      <div className="sidebar">
        <div className="profile">
          <div className="profile-img">
            <img src={profileImage} alt="profile icon" />
          </div>
          <span>enodi@gmail.com</span>
        </div>
        <span id="line"></span>
        <div className="navigation">
          <ul>
            <li>
              <a href="!#">
                <span><img src={homeIcon} alt="home icon"/></span>Home
              </a>
            </li>
            <li>
              <a href="!#">
                <span><img src={groupIcon} alt="group icon"/></span>My Groups
              </a>
            </li>
            <li>
              <NavLink to="/group/new-group">
                <span><img src={createGroupIcon} alt="create group"/></span>Create Group
              </NavLink>
            </li>
            <li>
              <NavLink to="/group/browse-group">
                <span><img src={browseGroupIcon} alt="browse group"/></span>Browse Groups
              </NavLink>
            </li>
            <li>
              <a href="!#">
                <span><img src={addUserIcon} alt="add group member"/></span>Add Member to Group
              </a>
            </li>
            <li>
              <a href="!#">
                <span><img src={messageIcon} alt="message icon"/></span>Post Message
              </a>
            </li>
          </ul>
        </div>
        <span id="line"></span>
        <div className="logout">
          <ul>
            <li>
              <a href="!#">
                <span><img src={settingsIcon} alt="settings icon"/></span>Settings
              </a>
            </li>
            <li onClick={this.handleClick}>
              <span><img src={logoutIcon} alt="logout icon"/></span>Logout
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(null, { signoutAction })(Sidebar);

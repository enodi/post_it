import React from "react";
import {connect} from "react-redux";

import Sidebar from "../Dashboard/Sidebar";
import Header from "../Common/Header";
import NewGroup from "./NewGroup";
import { groupAction } from "../../actions/groupAction";

class NewGroupContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.groupAction(this.state);
    event.target.reset();
  }

  handleOnBlur = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "name":
        if (!value || value.length <= 4) {
          this.setState({
            groupNameError:"Group name cannot be less than 4 characters",
            groupClassName: "invalid"
          });
        }
        break;
      case "description":
        if (!value || value.length <= 4) {
          this.setState({
            descriptionError:"This field cannot be blank",
            descriptionClassName: "invalid"
          });
        }
        break;
      default:
    }
  }

  handleOnFocus = event => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "name":
        this.setState({
          groupNameError: "",
          groupClassName: ""
        });
        break;
      case "description":
        this.setState({
          descriptionError: "",
          descriptionClassName: ""
        });
        break;
      default:
    }
  }

  render() {
    return(
      <NewGroup
        onChange={this.handleOnChange}
        onBlur={this.handleOnBlur}
        onFocus={this.handleOnFocus}
        onSubmit={this.handleOnSubmit}
        groupNameError={this.state.groupNameError}
        groupClassName={this.state.groupClassName}
        descriptionError={this.state.descriptionError}
        descriptionClassName={this.state.descriptionClassName}
      />
    )
  } 
}

export default connect(null, { groupAction })(NewGroupContainer);

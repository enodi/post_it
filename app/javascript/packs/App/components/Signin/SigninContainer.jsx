import React from "react";
import { connect } from "react-redux";

import Signin from "./Signin";
import { signinAction } from "../../actions/authAction";

class SigninContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.signinAction(this.state);
    event.target.reset();
  }

  handleOnBlur = event => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "username":
        if (!value) {
          this.setState({
            usernameError:"This field cannot be blank",
            usernameClassName: "invalid"
          });
        }
        break;
      case "password":
        if (!value) {
          this.setState({
            passwordError:"This field cannot be blank",
            passwordClassName: "invalid"
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
      case "username":
        this.setState({
          usernameError: "",
          usernameClassName: ""
        });
        break;
      case "password":
        this.setState({
          passwordError: "",
          passwordClassName: ""
        });
        break;
      default:
    }
  }

  render () {
    return(
      <Signin
        onChange={this.handleOnChange}
        onBlur={this.handleOnBlur}
        onFocus={this.handleOnFocus}
        onSubmit={this.handleOnSubmit}
        usernameError={this.state.usernameError}
        usernameClassName={this.state.usernameClassName}
        passwordError={this.state.passwordError}
        passwordClassName={this.state.passwordClassName}
      />
    )
  }
}

export default connect(null, { signinAction })(SigninContainer);

import React from "react";
import {connect} from "react-redux";

import { signupAction } from "../../actions/signupAction";
import Signup from "./Signup";

class SignupContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
    }

  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.signupAction(this.state);
    event.target.reset();
  }

  handleOnBlur = (event) => {
    const { email } = this.state;
    const re = /\S+@\S+\.\S+/;
    const emailAddress = re.test(email);
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "fullname":
        if (!value) {
          this.setState({
            fullnameError:"This field is required",
            fullnameClassName: "invalid"
          });
        }
        break;
      case "username":
        if (!value || value.length <= 4) {
          this.setState({
            usernameError:"Username cannot be less than 4 characters",
            usernameClassName: "invalid"
          });
        }
        break;
      case "email":
        if (!email || !emailAddress) {
          this.setState({
            emailError:"Invalid email",
            emailClassName: "invalid"
          });
        }
        break;
      case "password":
        if (!value) {
          this.setState({
            passwordError:"Invalid email",
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
      case "fullname":
        this.setState({
          fullnameError: "",
          fullnameClassName: ""
        });
        break;
      case "email":
        this.setState({
          emailError: "",
          emailClassName: ""
        });
        break;
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

  render() {
    return(
      <Signup
        onChange={this.handleOnChange}
        onSubmit={this.handleOnSubmit}
        onBlur={this.handleOnBlur}
        onFocus={this.handleOnFocus}
        fullnameError={this.state.fullnameError}
        fullnameClassName={this.state.fullnameClassName}
        usernameError={this.state.usernameError}
        usernameClassName={this.state.usernameClassName}
        emailError={this.state.emailError}
        emailClassName={this.state.emailClassName}
        passwordError={this.state.passwordError}
        passwordClassName={this.state.passwordClassName}
      />
    )
  }
}

export default connect(null, { signupAction })(SignupContainer);

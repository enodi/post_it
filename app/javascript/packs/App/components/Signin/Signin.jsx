import React from "react";

import Header from "../Common/Header";
import InputField from "../Common/InputField";

const Signin = props => (
  <div>
    <Header />
    <div className="entry">
      <div className="entry-content">
        <h1>Sign into your account</h1>
        <div id="entry-form">
          <form onSubmit={props.onSubmit}>
            <InputField
              type={"text"}
              label={'Username'}
              htmlFor={'username'}
              placeholder={"Jane"}
              name={"username"}
              className={props.usernameClassName}
              onChange={props.onChange}
              onBlur={props.onBlur}
              onFocus={props.onFocus}
            />
            <div className="errorMessage">{props.usernameError}</div>
            <InputField
              type={"password"}
              label={'Password'}
              htmlFor={'password'}
              placeholder={"*********"}
              name={"password"}
              className={props.passwordClassName}
              onChange={props.onChange}
              onBlur={props.onBlur}
              onFocus={props.onFocus}
            />
            <div className="errorMessage">{props.passwordError}</div>
            <input type="submit" className="submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Signin;

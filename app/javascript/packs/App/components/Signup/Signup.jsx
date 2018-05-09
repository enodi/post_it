import React from "react";

import Header from "../Common/Header";
import InputField from "../Common/InputField";

const Signup = props => (
  <div>
    <Header />
    <div className="entry">
      <div className="entry-content">
        <h1>Create your account</h1>
        <div id="entry-form">
          <form onSubmit={props.onSubmit}>
            <InputField
              type={"text"}
              label={'Full name'}
              htmlFor={'fullname'}
              placeholder={"Full Name"}
              name={"fullname"}
              onChange={props.onChange}
              onBlur={props.onBlur}
              className={props.fullnameClassName}
              onFocus={props.onFocus}
            />
            <div className="errorMessage">{props.fullnameError} </div>
            <InputField
              type={"email"}
              label={'Email'}
              htmlFor={'email'}
              placeholder={"janedoe@gmail.com"}
              name={"email"}
              onChange={props.onChange}
              onBlur={props.onBlur}
              className={props.emailClassName}
              onFocus={props.onFocus}
            />
            <div className="errorMessage">{props.emailError} </div>
            <InputField
              type={"text"}
              label={'Username'}
              htmlFor={'username'}
              placeholder={"Jane"}
              name={"username"}
              onChange={props.onChange}
              onBlur={props.onBlur}
              className={props.usernameClassName}
              onFocus={props.onFocus}
            />
            <div className="errorMessage">{props.usernameError} </div>
            <InputField
              type={"password"}
              label={'Password'}
              htmlFor={'password'}
              placeholder={"*********"}
              name={"password"}
              onChange={props.onChange}
              onBlur={props.onBlur}
              className={props.passwordClassName}
              onFocus={props.onFocus}
            />
            <div className="errorMessage">{props.passwordError} </div>
            <input type="submit" className="submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Signup;

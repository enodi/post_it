import React from "react";

import Header from "../Common/Header";
import InputField from "../Common/InputField";

const Signin = () => (
  <div>
    <Header />
    <div className="entry">
      <div className="entry-content">
        <h1>Sign into your account</h1>
        <div id="entry-form">
          <form>
            <InputField
              type={"email"}
              label={'Email'}
              htmlFor={'email'}
              placeholder={"janedoe@gmail.com"}
              name={"email"}
            />
            <InputField
              type={"password"}
              label={'Password'}
              htmlFor={'password'}
              name={"password"}
            />
            <input type="submit" className="submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Signin;

import React from "react";

import InputField from "../Common/InputField";

const NewGroup = props => (
  <div id="entry-form">
    <h2>Create a Group</h2>
    <form onSubmit={props.onSubmit}>
      <InputField
        type={"text"}
        label={'Group Name'}
        htmlFor={'name'}
        placeholder={"My new group"}
        name={"name"}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        className={props.groupClassName}
      />
      <div className="errorMessage">{props.groupNameError}</div>
      <InputField
        type={"text"}
        label={'Description'}
        htmlFor={'description'}
        placeholder={"Welcome to my new group"}
        name={"description"}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        className={props.descriptionClassName}
      />
      <div className="errorMessage">{props.descriptionError}</div>
      <input type="submit" value="Create Group" className="submit" />
    </form>
  </div>
)

export default NewGroup;

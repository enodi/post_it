import React from "react"

const InputField = ({
  name, type, placeholder, htmlFor, label, onChange, onBlur,
  className, onFocus}) => (
  <div>
    <label htmlFor={htmlFor} > {label} </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
      onFocus={onFocus}
    />
  </div>
)

export default InputField;

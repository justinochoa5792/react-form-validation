import React, { useState } from "react";
import "../App.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  return (
    <div className="formInput">
      <lable>{label} </lable>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={() => {
          setFocused(true);
        }}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

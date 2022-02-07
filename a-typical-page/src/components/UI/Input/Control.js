// react
import React from "react";

// styles
import classes from "./Control.module.css";

// components
import Input from "./Input";
import Label from "./Label";

const Control = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Control;

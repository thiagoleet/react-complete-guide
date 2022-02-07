// react
import React, { useRef, useImperativeHandle } from "react";

// styles
import classes from "./Control.module.css";

// components
import Input from "./Input";
import Label from "./Label";

const Control = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Control;

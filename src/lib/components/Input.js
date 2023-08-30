import React from "react";
import './Input.css';

const Input = (props) => {
  return (
    <input
      className="input"
      type={props.text}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
    >{props.label}</input>
  );
};

export default Input;
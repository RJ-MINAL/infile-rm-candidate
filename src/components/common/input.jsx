import React from "react";

const Input = ({ name, label, ...rest }) => {
  return (
    <div style={{marginTop: '10px'}} className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
    </div>
  );
};

export default Input;

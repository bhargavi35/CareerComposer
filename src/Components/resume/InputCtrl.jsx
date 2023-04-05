import React from "react";
import "./Styles.css";

function InputControl({ label, ...props }) {
  return (
    <div className="IpContainer">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;

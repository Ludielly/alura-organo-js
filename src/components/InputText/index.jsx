import { useState } from "react";
import "./InputText.css";

const InputText = ({ label, placeholder, required, onHandleChange, value }) => {

  const handleType = (e) => {
    onHandleChange(e.target.value)
  };

  return (
    <div className="input-text">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        required={required}
        onChange={handleType}
        value={value}
        />
    </div>
  );
};

export default InputText;

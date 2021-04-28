import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ name, handleChange, half, placeholder, type }) => {
  return (
    <div className="form-group">
      <input
        name={name}
        onChange={handleChange}
        required
        placeholder={placeholder}
        type={type}
        className="form-control"
        //         InputProps={name === "password" && {(
        // <button onClick={handleShowPassword}>
        // { type === "password" ? <FaEye /> : <FaEyeSlash/>}
        // </button>
        //         )
        //         }}
      />
    </div>
  );
};

export default Input;

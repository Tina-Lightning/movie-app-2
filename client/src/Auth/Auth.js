import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import Input from "./Input";

const Auth = () => {
  const isSignUp = true;

  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <div className="container">
      <div className="card">
        <FaLock />
        <h5>{isSignUp ? "Sign Up" : "Sign In"}</h5>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <Input
                name="firstName"
                placeholder="First Name"
                type="text"
                handleChange={handleChange}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                type="text"
                handleChange={handleChange}
              />
            </>
          )}
          <Input
            name="email"
            placeholder="Email"
            type="email"
            autocomplete="off"
            handleChange={handleChange}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            autocomplete="off"
            handleChange={handleChange}
          />
          {isSignUp && (
            <Input
              name="confirmPassword"
              placeholder="Retype Password"
              type="password"
              autocomplete="off"
              handleChange={handleChange}
            />
          )}
          <button type="submit" class="btn btn-primary">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import Input from "./Input";
//import Icon from "./icon";
import { AUTH } from "../constants/actionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData });
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful");
  };

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
          <div className="card">
            <button type="submit" className="btn btn-primary">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
          <div className="card">
            <GoogleLogin
              clientId="410052920615-tmk08kcg9ap5j0ev8tdcd3c3npp19kib.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="contained"
                >
                  Google Sign In
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </div>
          <div className="card">
            <button onClick={switchMode}>
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;

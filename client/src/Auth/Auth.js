import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import Input from "./Input";
import Icon from "./icon";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
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
                  //starticon={<Icon />}
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

import React, { useRef, useState } from "react";
import styles from "./Login.modules.css";
import { useNavigate } from "react-router-dom";
function Login({ userSetter }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showUserError, setShowUserError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (!name && !password) {
      setShowUserError(true);
      setShowPasswordError(true);
    } else if (!name && password) {
      setShowUserError(true);
      setShowPasswordError(false);
    } else if (name && !password) {
      setShowPasswordError(true);
      setShowUserError(false);
    } else {
      userSetter({
        name: name,
        password: password,
      });
      setName("");
      setPassword("");
      setShowPasswordError(false);
      setShowUserError(false);
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="main-heading">inCard</h1>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleForm}>
            <label className="username-container">
              <p>Username</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your username..."
              />
              {showUserError ? (
                <p className="input-error">Please fill in the username</p>
              ) : null}
            </label>
            <label>
              <p>Password</p>
              {showPassword ? (
                <div className="password-container">
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password..."
                  />
                  <button
                    type="button"
                    className="show-btn"
                    onClick={() => setShowPassword(false)}
                  >
                    Hide
                  </button>
                </div>
              ) : (
                <div className="password-container">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password..."
                  />
                  <button
                    type="button"
                    className="show-btn"
                    onClick={() => {
                      if (password !== "") {
                        setShowPassword(true);
                      }
                    }}
                  >
                    Show
                  </button>
                </div>
              )}
              {showPasswordError ? (
                <p className="input-error">Please fill in the Password</p>
              ) : null}
            </label>
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

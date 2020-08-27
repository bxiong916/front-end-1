import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({});

  const login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/signin", credentials)
      .then((res) => {
        console.log("login axios call", res);
        localStorage.setItem("token", res.data.token);

        if (res.data.role_id === 123) {
          props.history.push("/iClasses");
        } else {
          props.history.push("/cClasses");
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={login}>
        <h3>Sign In</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <Link exact to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Login;

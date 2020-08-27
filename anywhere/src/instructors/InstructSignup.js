import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button } from "react-bootstrap";

const instructSignup = (props) => {
  const [instructorCredentials, setinstructorCredentials] = useState({
    email: "",
    password: "",

  });

  const handleChange = (e) => {
    setinstructorCredentials({
      ...instructorCredentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesubmit", instructorCredentials);
    axiosWithAuth()
      .post("/signup/instructor", instructorCredentials)
      .then((res) => {
        console.log("data from the signup component: ", res);
        // setinstructorCredentials({
        //     name: "",
        //     password: ""
        // });
        props.history.push("/login");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={instructorCredentials.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={instructorCredentials.password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">
                    Sign Up
                </Button>
                <br />
                <Link to="/login">I already have an account</Link>
                <br></br>
                <Link exact to="/"><Button>Home</Button></Link>

            </form>
    </div>
  );
};

export default iSignup;

//This component allows the user (Restaurant or NGO user) to login to the application.

import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../css/Login.css";
import backgroundlogin from "../Assests/images/pic.jpg";
import axios from "axios";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";

export const Login = () => {
  const navigator = useNavigate();
  const emailRegex = /\S+@\S+\.\S+/;
  const [Emailmessage, setEmailMessage] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //This function authenticates the user credentials and allows the user to login if the user enters valid credentials
  const validsubmit = () => {
    axios
      .post("https://tiserverb00.herokuapp.com/login", {
        email: Email,
        password: Password,
      })
      .then(function (response) {
        console.log(response);
        console.log(jwt(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigator("/");
      })
      .catch(function (error) {
        console.log(error);
        alert("Invalid Email or Password");
      });
  };
  console.log(localStorage.getItem("user"));

  //This function checks whether the email ID entered is in valid email format.
  const validemail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setEmail(email);
      setEmailMessage(" ");
    } else {
      setEmailMessage("Please enter a valid email!");
    }
  };

  //This function checks whether the password entered follows the minimum password requirements.
  const validpassword = (event) => {
    let password = event.target.value;

    setPassword(password);
  };
  return (
    <>
      <HomeHeader />
      <Row
        style={{
          backgroundImage: `url(${backgroundlogin})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Col>
          <Container className="logincontainer">
            <form>
              <h2
                className="heading"
                style={{
                  color: "white",
                  fontFamily: "serif",
                  paddingLeft: "30%",
                }}
              >
                Login
              </h2>
              <div className="form-group">
                <label style={{ color: "white" }}>Email address</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={validemail}
                />
                <small
                  id="loginmessage"
                  style={{ color: "darkorange" }}
                  className="error-label form-text text-muted"
                >
                  {Emailmessage}
                </small>
              </div>
              <br></br>
              <div className="form-group" id="password_id">
                <label style={{ color: "white" }}>Password</label>
                <input
                  required
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={validpassword}
                />
              </div>
              <br></br>
              <div>
                <Button type="button" id="buttonlogin" onClick={validsubmit}>
                  Submit
                </Button>
                <> </>
              </div>
            </form>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Login;

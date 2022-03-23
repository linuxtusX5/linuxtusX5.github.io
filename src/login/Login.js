import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import "../Event.css";

function Login() {
 
  return (
    <>
      <div id="B" className="p-2 box col-md-4 card">
        <h1 className="mb-3 but">STUDENT COUNCILS </h1>
        <h6 className="but">
          should be the every day thing for those who are the members of this
          council
        </h6>
        <h1 className="mt-3 but">Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Login
            </Button>
          </div>
        </Form>
        <hr />
        <div className="but">
          <GoogleButton
            className="g-btn"
            type="dark"
          />
        </div>
      </div>
    </>
  );
};

export default Login;

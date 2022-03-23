import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import './login.css';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      if(email==='STUDENTadmin@gmail.com' && password==='STUDENTadmin16'){navigate("/Event");}
      else{alert("For Admin Only.")}
   
    } catch (err) {
      setError(err.message);
    }
  };

const forgot = () => {

const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("The Link is send to your email.")
  })
  .catch((error) => {
    
      console.log(error.message);
  });
  };


  return (
    <>
      <div className="p-2 box">
        <h1 className="mb-3 but">STUDENT COUNCILS </h1>
        <h6 className="but">should be the every day thing for those who are the members of this council</h6>
        <h1 className="mt-3 but">Login your account</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <a href="#" onClick={forgot}>Forgot your password?</a>

        <hr />
      </div>
    </>
  );
};

export default LoginUser;

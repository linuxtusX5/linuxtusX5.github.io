import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import "../../Event.css";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setError("");
    try {
      logIn(email, password);
      if(email==='organization@gmail.com' && password==='organizationadmin'){
          navigate("/ABS");
          navigate("/HMS");
          navigate("/IBITS");
          navigate("/IIEE");
          navigate("/JME");
          navigate("/JPEA");
          navigate("/PADS");
          navigate("/PASOA");
          navigate("/PICE");
          navigate("/SYNERTECH");
          navigate("/UAPSA");
          navigate("/YES");
        }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-2 box">
        <h1 className="mb-3 but">STUDENT COUNCILS </h1>
        <h6 className="but">should be the every day thing for those who are the members of this council</h6>
        <h1 className="mt-3 but">Admin</h1>
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
        <hr />
      </div>
    </>
  );
};

export default Admin;

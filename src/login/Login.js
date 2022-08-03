import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button, Alert,  } from "react-bootstrap";
import "./Front.css";
import "../Admin/Event.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useUserAuth } from "../context/UserAuthContext";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function Login() {
  const [email, setEmail] = useState("");
  const [studenti, setStudenti] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, passwordInput);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const forgot = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("The Link is send to your email.");
        console.log("Success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };  
  
  const [data, setData] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setData({
      ...data,
      showPassword: !data.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
                autocomplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={forgot}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
      <div id="back2">
        <div id="B2" className="p-3 box col-md-4 card">
          <div class="text-center mb-2 mt-5">
            <img
              alt="PUP"
              class="img-circle"
              src="https://cdn.pup.edu.ph/img/symbols/logo88x88.png"
            />
          </div>
          <h2 className="but">
            <strong style={{ color: "#000" }}>PUP Lopez Quezon </strong>
            <h6>Branch</h6>
          </h2>
          <h5 className="mt-3 but">Sign in to start your session</h5>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="Student ID"
              max_length="15"
              value={studenti}
              name="StudentID"
              autocomplete="off"
              onChange={(e) => setStudenti(e.target.value)}
              className="mb-3"
            />
            <TextField
              required
              type="email"
              id="outlined-required"
              style={{ width: "100%" }}
              label="Email"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3"
            />
            <FormControl
              variant="outlined"
              style={{
                m: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                fullWidth
                type={data.showPassword ? "text" : "password"}
                required
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {data.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <div className="d-grid gap-2">
              <Button variant="outline-primary" type="Submit">
                Sign In
              </Button>
            </div>
          </Form>
          <hr />
          <div className="but">
            <i class="fas fa-key" aria-hidden="true" />{" "}
            <a onClick={handleShow}> I forgot my password </a>
          </div>
          <div class="col-11 m-3">
            <div className=" box mt-1 text-center">
              Don't have an account? <Link to="/register">Register </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { db } from "../firebase/index";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./Front.css";
import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  getDoc,
} from "firebase/firestore";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useUserAuth } from "../context/UserAuthContext";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [studenti, setStudenti] = useState("");
  const [passwordInput, setPassword] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [setLists] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "StudentData"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLists(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (
       email === "2019-00735-lq-0admin21@gmail.com" &&
       passwordInput === "Passw0rd"
     ) {
       navigate("/Admin");
     } else {
       // doc.data() will be undefined in this case
       alert("invalid Account");
       console.log("No such document!");
     }
    //lists.map((list) => list.password)
  };

  const forgot = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("The Link is send to your email.");
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
      <div id="back2">
        <div id="B" className="p-3 box col-md-4 card">
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
          <h5 className="mt-3 but">Admin</h5>
          <Form onSubmit={handleSubmit}>
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
          <div className=" box mt-1 text-center">
            Back to Login option? <Link to="/">{""}Yes </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;

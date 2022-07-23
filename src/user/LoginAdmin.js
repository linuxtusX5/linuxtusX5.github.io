import React, { useState, useEffect } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
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

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [studenti, setStudenti] = useState("");
  const [passwordInput, setPassword] = useState("");
  const navigate = useNavigate();

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
      email === "admin21@gmail.com" &&
      studenti === "2019-00735-LQ-0" &&
      passwordInput === "password") 
    {
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
            <InputGroup className="mb-3">
              <FormControl
                type="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic"
                autocomplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup.Text id="basic">
                <span
                  className="fa-solid fa-envelope"
                  aria-hidden="true"
                ></span>
              </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Student Number"
                aria-label="Student Number"
                aria-describedby="basic-addon1"
                autocomplete="off"
                maxlength="15"
                size="50"
                onChange={(e) => setStudenti(e.target.value)}
              />{" "}
              <InputGroup.Text id="basic-addon1">
                <span class="fas fa-user" aria-hidden="true"></span>
              </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                type="password"
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon1"
                //autocomplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <span className="fas fa-lock" aria-hidden="true"></span>
              </InputGroup.Text>
            </InputGroup>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign in
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

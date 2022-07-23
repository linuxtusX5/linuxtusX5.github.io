import React, { useState } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Modal, Alert } from "react-bootstrap";
import "../Admin/Event.css";
import { db } from "../firebase/index";
import "firebase/compat/firestore";
import logo from "../Photos/PUPLogo.png";
import "./Front.css";
import { useUserAuth } from "../context/UserAuthContext";

import Swal from "sweetalert2";

const Register = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { signUp } = useUserAuth();

  //Password validation
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [middle, setmiddle] = useState("");
  const [birthm, setbirthm] = useState("");
  const [birthd, setbirthd] = useState("");
  const [birthy, setbirthy] = useState("");
  const [org, setorg] = useState("");
  const [gender, setgender] = useState("");
  const [course, setcourse] = useState("");
  const [location, setlocation] = useState("");
  const [email, setEmail] = useState("");
  const [studenti, setStudenti] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1000,
    });

    setError("");
    try {
      await signUp(email, passwordInput);
      console.log("SignUp done");
    } catch (err) {
      setError(err.message);
    }
    //createUserWithEmailAndPassword(auth, data.email, data.password);

    const username = e.target.StudentID.value;

    await db.collection("StudentData").add({
      firstName: fname,
      lastName: lname,
      middle: middle,
      birthM: birthm,
      birthD: birthd,
      birthY: birthy,
      organization: org,
      gender: gender,
      course: course,
      location: location,
      email: email,
      studentId: studenti,
      password: passwordInput,
    });
    setShow(true);

    if (org === "IBITS") {
      await db.collection("IBITS").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "ABS") {
      await db.collection("ABS").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "HMS") {
      await db.collection("HMS").add({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "IIEE") {
      await db.collection("IIEE").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "JME") {
      await db.collection("JME").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "JPEA") {
      await db.collection("JPEA").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "PADS") {
      await db.collection("PADS").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "PASOA") {
      await db.collection("PASOA").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "PICE") {
      await db.collection("PICE").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "SYNERTECH") {
      await db.collection("SYNERTECH").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "UAPSA") {
      await db.collection("UAPSA").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    } else if (org === "YES") {
      await db.collection("YES").doc(username).set({
        firstName: fname,
        lastName: lname,
        middle: middle,
        birthM: birthm,
        birthD: birthd,
        birthY: birthy,
        organization: org,
        gender: gender,
        course: course,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput,
      });
    }

    console.log("Student ID: ", studenti);
    console.log("Student Password: ", passwordInput);

    setfname("");
    setlname("");
    setmiddle("");
    setbirthm("");
    setbirthd("");
    setbirthy("");
    setorg("");
    setgender("");
    setcourse("");
    setlocation("");
    setEmail("");
    setStudenti("");
    setPassword("");
  };

  return (
    <>
      <div id="back3">
        <div id="B" className="p-3 box col-md-4 card">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="but">
                <img width="35px" height="35px" src={logo} alt="Logo" />{" "}
                <b>PUP Lopez Quezon</b>
                <h6>Branch</h6>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <b style={{ color: "#800" }}>Acceptance of Terms</b>
              <p>
                The online services that PUP provides to you are subject to the
                following Terms of Use ("Terms"). This is an agreement between
                you (either an individual or a single entity) and the
                University. By visiting, browsing and/or interacting with our
                online services, you agree to be bound by this Terms.
              </p>
              <p>
                PUP reserves the right to update the Terms at any time without
                notice to you. The most current version of the Terms can be
                viewed by clicking on the "Terms of Use" hypertext link located
                at the bottom of our Web pages and online services.
              </p>
              <p>
                The University offers various online services wherein additional
                terms or requirements may apply. As such, these terms will be
                available to relevant online services, and those additional
                terms become part of your agreement with the University if you
                use those online services.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" href="/login">
                Sign in Now
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="text-center mb-2 mt-5">
            <img
              alt="PUP"
              className="img-circle"
              src="https://cdn.pup.edu.ph/img/symbols/logo88x88.png"
            />
          </div>
          <h2 className="but">
            <strong style={{ color: "#000" }}>PUP Lopez Quezon </strong>
            <h6>Branch</h6>
          </h2>
          <h5 className="mt-3 but">Register to start your session</h5>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                autocomplete="off"
                required
                onChange={(e) => setfname(e.target.value)}
              />{" "}
              <InputGroup.Text id="basic-addon1">
                <span className="fas fa-user" aria-hidden="true"></span>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                autocomplete="off"
                required
                onChange={(e) => setlname(e.target.value)}
              />{" "}
              <InputGroup.Text id="basic-addon1">
                <span className="fas fa-user" aria-hidden="true"></span>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Middle"
                aria-label="Middle"
                aria-describedby="basic-addon1"
                autocomplete="off"
                required
                onChange={(e) => setmiddle(e.target.value)}
              />{" "}
              <InputGroup.Text id="basic-addon1">
                <span className="fas fa-user" aria-hidden="true"></span>
              </InputGroup.Text>
            </InputGroup>

            <div className="row">
              <div className="col-4">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <span
                      className="fa-solid fa-cake-candles"
                      aria-hidden="true"
                    ></span>
                  </InputGroup.Text>
                  <Form.Select
                    aria-label="Default select example"
                    name="SelectMonth"
                    className="form-control select2 text-xs"
                    id="SelectMonth"
                    required
                    onChange={(e) => setbirthm(e.target.value)}
                  >
                    <option value="">Birth Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </Form.Select>
                </InputGroup>
              </div>

              <div className="col-4">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <span
                      className="fa-solid fa-calendar-day"
                      aria-hidden="true"
                    ></span>
                  </InputGroup.Text>
                  <Form.Select
                    aria-label="Default select example"
                    name="SelectMonth"
                    className="form-control select2 text-xs"
                    id="SelectMonth"
                    required
                    onChange={(e) => setbirthd(e.target.value)}
                  >
                    <option value="">Birth Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </Form.Select>
                </InputGroup>
              </div>
              <div className="col-4 mb-3">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <span
                      className="fa-solid fa-calendar"
                      aria-hidden="true"
                    ></span>
                  </InputGroup.Text>
                  <Form.Select
                    aria-label="Default select example"
                    name="SelectMonth"
                    className="form-control select2 text-xs"
                    id="SelectMonth"
                    required
                    onChange={(e) => setbirthy(e.target.value)}
                  >
                    <option value="">Birth Year</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    <option value="1919">1919</option>
                    <option value="1918">1918</option>
                    <option value="1917">1917</option>
                    <option value="1916">1916</option>
                    <option value="1915">1915</option>
                    <option value="1914">1914</option>
                    <option value="1913">1913</option>
                    <option value="1912">1912</option>
                    <option value="1911">1911</option>
                    <option value="1910">1910</option>
                    <option value="1909">1909</option>
                    <option value="1908">1908</option>
                    <option value="1907">1907</option>
                    <option value="1906">1906</option>
                    <option value="1905">1905</option>
                    <option value="1904">1904</option>
                    <option value="1903">1903</option>
                    <option value="1902">1902</option>
                    <option value="1901">1901</option>
                    <option value="1900">1900</option>
                  </Form.Select>
                </InputGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <span className="fa fa-sitemap" aria-hidden="true"></span>
                  </InputGroup.Text>
                  <Form.Select
                    aria-label="Default select example"
                    name="Selectorg"
                    className="form-control select2 text-xs"
                    id="Selectorg"
                    required
                    onChange={(e) => setorg(e.target.value)}
                  >
                    <option value="">Organization</option>
                    <option value="ABS">ABS</option>
                    <option value="HMS">HMS</option>
                    <option value="IIEE">IIEE</option>
                    <option value="IBITS">IBITS</option>
                    <option value="JME">JME</option>
                    <option value="JPEA">JPEA</option>
                    <option value="PADS">PADS</option>
                    <option value="PASOA">PASOA</option>
                    <option value="PICE">PICE</option>
                    <option value="SYNERTECH">SYNERTECH</option>
                    <option value="UAPSA">UAPSA</option>
                    <option value="YES">YES</option>
                  </Form.Select>
                </InputGroup>
              </div>
              <div className="col-6">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <span className="fa fa-sitemap" aria-hidden="true"></span>
                  </InputGroup.Text>
                  <Form.Select
                    aria-label="Default select example"
                    name="Selectorg"
                    className="form-control select2 text-xs"
                    id="Selectorg"
                    required
                    onChange={(e) => setgender(e.target.value)}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                  </Form.Select>
                </InputGroup>
              </div>
            </div>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Course/Year"
                aria-label="Course"
                aria-describedby="basic-addon1"
                autocomplete="off"
                required
                onChange={(e) => setcourse(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-bars-progress"
                  aria-hidden="true"
                ></span>
              </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Location"
                aria-label="Location"
                aria-describedby="basic-addon1"
                autocomplete="off"
                required
                onChange={(e) => setlocation(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-location-dot"
                  aria-hidden="true"
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                autocomplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-envelope"
                  aria-hidden="true"
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Student ID"
                aria-label="Student ID"
                aria-describedby="basic-addon1"
                autocomplete="off"
                maxlength="15"
                size="50"
                required
                name="StudentID"
                onChange={(e) => setStudenti(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <span className="fas fa-user" aria-hidden="true"></span>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="password"
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon1"
                autocomplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <span className="fas fa-lock" aria-hidden="true"></span>
              </InputGroup.Text>
            </InputGroup>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Register
              </Button>
            </div>
          </Form>
          <hr />
          <div className="col-11 m-3">
            <div className=" box mt-1 text-center">
              Already have an account? <Link to="/login">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

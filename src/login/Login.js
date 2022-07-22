import React, { useState  } from "react";
import { Form, InputGroup, FormControl, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import "./Front.css";
import "../Admin/Event.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useUserAuth } from "../context/UserAuthContext";


function Login() {

  const [email, setEmail] = useState("");
  const [studenti, setStudenti] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [birthm, setbirthm] = useState("");
  const [birthd, setbirthd] = useState("");
  const [birthy, setbirthy] = useState("");
  const [error, setError] = useState("");
  const [org, setorg] = useState("");
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
            <div class="row">
              <div class="col-5">
                <Form.Select
                  aria-label="Default select example"
                  name="SelectMonth"
                  class="form-control select2 text-xs"
                  id="SelectMonth"
                  required
                  className="mb-3"
                  onChange={(e) => setbirthm(e.target.value)}
                >
                  <option value="">Birth Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Select>
              </div>

              <div class="col-3">
                <Form.Select
                  aria-label="Default select example"
                  name="SelectMonth"
                  class="form-control select2 text-xs"
                  id="SelectMonth"
                  required
                  className="mb-3"
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
              </div>
              <div class="col-4">
                <Form.Select
                  aria-label="Default select example"
                  name="SelectMonth"
                  class="form-control select2 text-xs"
                  id="SelectMonth"
                  required
                  className="mb-3"
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
              </div>
            </div>
            <div>
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
          <div className="but">
            <i class="fas fa-key" aria-hidden="true" />
            <a href="#" onClick={handleShow}>
              {" "}
              I forgot my password{" "}
            </a>
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
};

export default Login;

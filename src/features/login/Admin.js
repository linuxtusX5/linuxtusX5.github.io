import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import './login.css';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

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
      if(email==='ABSadmin@gmail.com' && password==='ABSadmin10'){navigate("/ABS");}
      if(email==='HMSadmin@gmail.com' && password==='HMSadmin11'){navigate("/HMS");}
      if(email==='IBITSadmin@gmail.com' && password==='IBITSadmin13'){navigate("/IBITS");}
      if(email==='IIEEadmin@gmail.com' && password==='IIEEadmin12'){navigate("/IIEE");}
      if(email==='JMEadmin@gmail.com' && password==='JMEadmin14'){navigate("/JME");}
      if(email==='JPEAadmin@gmail.com' && password==='JPEAadmin15'){navigate("/JPEA");}
      if(email==='PADSadmin@gmail.com' && password==='PADSadmin16'){navigate("/PADS");}
      if(email==='PASOAadmin@gmail.com' && password==='PASOAadmin17'){navigate("/PASOA");}
      if(email==='PICEadmin@gmail.com' && password==='PICEadmin18'){navigate("/PICE");}
      if(email==='SYNERTECHadmin@gmail.com' && password==='SYNERTECHadmin19'){navigate("/SYNERTECH");}
      if(email==='UAPSAadmin@gmail.com' && password==='UAPSAadmin20'){navigate("/UAPSA");}
      if(email==='YESadmin@gmail.com' && password==='YESadmin21'){navigate("/YES");}
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
        <a href="#" onClick={forgot}>Forgot your password?</a>
        <hr />
      </div>
    </>
  );
};

export default Admin;

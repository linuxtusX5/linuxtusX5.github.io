import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { getAuth } from "firebase/auth";

function PasswordInputField({
  handleValidation,
  handlePasswordChange,
  passwordValue,
}) {
  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };
  return (
    <>
      <InputGroup className="mt-3 mb-3">
        <input
          type="password"
          value={passwordValue}
          onChange={(event) => handleInputs(event)}
          onKeyUp={handleValidation}
          name="password"
          placeholder="Password"
          className="form-control"
        />
        <InputGroup.Text id="basic-addon1">
          <span className="fas fa-lock" aria-hidden="true"></span>
        </InputGroup.Text>
      </InputGroup>
    </>
  );
}

export default PasswordInputField;

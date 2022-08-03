import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { getAuth } from "firebase/auth";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";

function PasswordInputField({
  handleValidation,
  handlePasswordChange,
  passwordValue,
  passwordError,
}) {
  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    Password: "",
    showPassword: false,
  });
  const handleInputs = (prop) => (event) => {
    let inputs = { [prop]: event.target.value };

    setData({ ...data, ...inputs });
  };


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
      <div
        className="mb-3"
        style={{
          width: "100%",
        }}
      >
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
            value={passwordValue}
            onChange={handlePasswordChange}
            name="password"
            onKeyUp={handleValidation}
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
        <p style={{ color: "#4c0001" }}>{passwordError}</p>
      </div>
    </>
  );
}

export default PasswordInputField;

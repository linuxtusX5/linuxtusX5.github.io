import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function ConfirmPasswordInputField({
  handleValidation,
  handlePasswordChange,
  confirmPasswordValue,
  confirmPasswordError,
}) {

  

  const [data, setData] = useState({
    email: "",
    Password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            confirmPassword
          </InputLabel>
          <OutlinedInput
            fullWidth
            name="confirmPassword"
            type={data.showPassword ? "text" : "password"}
            value={confirmPasswordValue}
            onChange={handlePasswordChange}
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
        <p style={{ color: "#4c0001" }}>{confirmPasswordError}</p>
      </div>
    </>
  );
}

export default ConfirmPasswordInputField;

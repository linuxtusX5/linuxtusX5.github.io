//import React, { useState, useEffect } from "react";
//import { db } from "../firebase/index";
//import "firebase/compat/firestore";
//import {
//  DataGrid,
//  GridToolbarContainer,
//  GridToolbarExport,
//} from "@mui/x-data-grid";
//import DeleteIcon from "@mui/icons-material/Delete";
//import { Button, Alert } from "react-bootstrap";
//import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//
//import TextField from "@mui/material/TextField";
//
//import Box from "@mui/material/Box";
//import IconButton from "@mui/material/IconButton";
//import Input from "@mui/material/Input";
//import FilledInput from "@mui/material/FilledInput";
//import OutlinedInput from "@mui/material/OutlinedInput";
//import InputLabel from "@mui/material/InputLabel";
//import InputAdornment from "@mui/material/InputAdornment";
//import FormHelperText from "@mui/material/FormHelperText";
//import FormControl from "@mui/material/FormControl";
//import Visibility from "@mui/icons-material/Visibility";
//import VisibilityOff from "@mui/icons-material/VisibilityOff";
//import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
//
//function CustomToolbar() {
//  return (
//    <GridToolbarContainer>
//      <GridToolbarExport />
//    </GridToolbarContainer>
//  );
//}
//
//export default function ExportCustomToolbar() {
//  const [Student, setStudent] = useState([]);
//  useEffect(() => {
//    db.collection("IBITS").onSnapshot((snapshot) => {
//      setStudent(
//        snapshot.docs.map((doc) => ({
//          id: doc.id,
//          data: doc.data(),
//        }))
//      );
//    });
//  }, []);
//  const columns = [
//    {
//      field: "StudentID",
//      headerName: "Student ID",
//      width: 150,
//      headerClassName: "super-app-theme--header",
//    },
//    {
//      field: "Name",
//      headerName: "Name",
//      width: 150,
//      headerClassName: "super-app-theme--header",
//    },
//    {
//      field: "Date",
//      headerName: "Date",
//      width: 150,
//      headerClassName: "super-app-theme--header",
//    },
//    {
//      field: "DueDate",
//      headerName: "Due Date",
//      width: 220,
//      headerClassName: "super-app-theme--header",
//    },
//    {
//      field: "Option",
//      width: 220,
//      renderCell: (cellValues) => {
//        return (
//          <Button variant="danger" onClick={() => setShow(true)}>
//            <DeleteIcon /> Delete
//          </Button>
//        );
//      },
//    },
//  ];
//
//  const trim = Student?.map((user) => {
//    return {
//      StudentID: user?.data.studentId,
//      Name: user?.data.firstName,
//      Date: "07/25/2022",
//      DueDate: "07/31/2022",
//      id: user?.id,
//    };
//  });
//
//  const [show, setShow] = useState(true);
//  const [value, setValue] = React.useState(new Date());
//  
//  const [values, setValues] = React.useState({
//    amount: "",
//    password: "",
//    weight: "",
//    weightRange: "",
//    showPassword: false,
//  });
//
//  const handleChange = (prop) => (event) => {
//    setValues({ ...values, [prop]: event.target.value });
//  };
//
//  const handleClickShowPassword = () => {
//    setValues({
//      ...values,
//      showPassword: !values.showPassword,
//    });
//  };
//
//  const handleMouseDownPassword = (event) => {
//    event.preventDefault();
//  };
//
//  return (
//    <>
//      {" "}
//      <Alert show={show} variant="success">
//        <Alert.Heading>How's it going?!</Alert.Heading>
//        <p>
//          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//          fermentum.
//        </p>
//        <hr />
//        <div className="d-flex justify-content-end">
//          <Button onClick={() => setShow(false)} variant="outline-success">
//            Close me y'all!
//          </Button>
//        </div>
//      </Alert>
//      <div style={{ height: 600, width: "100%" }}>
//        <DataGrid
//          rows={trim}
//          columns={columns}
//          checkboxSelection
//          components={{
//            Toolbar: CustomToolbar,
//          }}
//        />
//      </div>
//      <div>
//      <PasswordAndConfirmPasswordValidation/>
//        <LocalizationProvider dateAdapter={AdapterDateFns}>
//          <DatePicker
//            openTo="year"
//            views={["year", "month", "day"]}
//            label="Year, month and date"
//            value={value}
//            onChange={(newValue) => {
//              setValue(newValue);
//            }}
//            renderInput={(params) => (
//              <TextField {...params} helperText={null} />
//            )}
//          />
//        </LocalizationProvider>
//      </div>
//      <div>
//        <TextField
//          required
//          id="filled-required"
//          label="Required"
//          variant="filled"
//        />
//        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
//          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
//          <FilledInput
//            id="filled-adornment-password"
//            type={values.showPassword ? "text" : "password"}
//            value={values.password}
//            onChange={handleChange("password")}
//            autocomplete="off"
//            endAdornment={
//              <InputAdornment position="end">
//                <IconButton
//                  aria-label="toggle password visibility"
//                  onClick={handleClickShowPassword}
//                  onMouseDown={handleMouseDownPassword}
//                  edge="end"
//                >
//                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                </IconButton>
//              </InputAdornment>
//            }
//          />
//        </FormControl>
//      </div>
//    </>
//  );
//
//
//function PasswordInputField({handleValidation, handlePasswordChange, passwordValue, passwordError}){
//    return (
//        <>
//    <div className="form-group my-3">
//        <input type="password" value={passwordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="password" placeholder="Password" className="form-control" />
//        <p className="text-danger">{passwordError}</p>
//   </div>
//          
//        </>
//    )
//}
//
//function ConfirmPasswordInputField({handleValidation, handlePasswordChange, confirmPasswordValue, confirmPasswordError}){
//    return (
//        <>
//     <div className="form-group my-3">
//        <input type="password" value={confirmPasswordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="confirmPassword" placeholder="Password" className="form-control" />
//        <p className="text-danger">{confirmPasswordError}</p>
//    </div>
//        </>
//    )
//}function PasswordAndConfirmPasswordValidation(){
//const [passwordError, setPasswordErr] = useState("");
//const [confirmPasswordError, setConfirmPasswordError] = useState("");
//const [passwordInput, setPasswordInput]= useState({
//    password:'',
//    confirmPassword:''
//})
//const handlePasswordChange =(evnt)=>{
//    const passwordInputValue = evnt.target.value.trim();
//    const passwordInputFieldName = evnt.target.name;
//    const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
//    setPasswordInput(NewPasswordInput);
//    
//}
//const handleValidation= (evnt)=>{
//    const passwordInputValue = evnt.target.value.trim();
//    const passwordInputFieldName = evnt.target.name;
//        //for password 
//if(passwordInputFieldName==='password'){
//    const uppercaseRegExp   = /(?=.*?[A-Z])/;
//    const lowercaseRegExp   = /(?=.*?[a-z])/;
//    const digitsRegExp      = /(?=.*?[0-9])/;
//    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
//    const minLengthRegExp   = /.{8,}/;
//    const passwordLength =      passwordInputValue.length;
//    const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
//    const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
//    const digitsPassword =      digitsRegExp.test(passwordInputValue);
//    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
//    const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
//    let errMsg ="";
//    if(passwordLength===0){
//            errMsg="Password is empty";
//    }else if(!uppercasePassword){
//            errMsg="At least one Uppercase";
//    }else if(!lowercasePassword){
//            errMsg="At least one Lowercase";
//    }else if(!digitsPassword){
//            errMsg="At least one digit";
//    }else if(!specialCharPassword){
//            errMsg="At least one Special Characters";
//    }else if(!minLengthPassword){
//            errMsg="At least minumum 8 characters";
//    }else{
//        errMsg="";
//    }
//    setPasswordErr(errMsg);
//    }
//    // for confirm password
//    if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
//            
//        if(passwordInput.confirmPassword!==passwordInput.password)
//        {
//        setConfirmPasswordError("Confirm password is not matched");
//        }else{
//        setConfirmPasswordError("");
//        }
//        
//    }
//}
//    return(
//    <div className="row">
//     <div className="col-sm-4">
//        <PasswordInputField 
//        handlePasswordChange={handlePasswordChange} 
//        handleValidation={handleValidation} 
//        passwordValue={passwordInput.password} 
//        passwordError={passwordError}/>
//        <ConfirmPasswordInputField 
//        handlePasswordChange={handlePasswordChange} 
//        handleValidation={handleValidation} 
//        confirmPasswordValue={passwordInput.confirmPassword} 
//        confirmPasswordError={confirmPasswordError}/>
//     </div>
//    </div>
//    )
//}
//
//}
//
//
import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";
import "firebase/compat/firestore";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridCellModes, GridToolbar } from "@mui/x-data-grid";

function EditToolbar(props) {
  
  const [Student, setStudent] = useState([]);
  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedOrg, setUpdatedOrg] = useState("");
  const [updatedGender, setUpdatedGender] = useState("");
  const [updatedCourse, setUpdatedCourse] = useState("");
  const [updatedYear, setUpdatedYear] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedLocation, setUpdatedLocation] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedStudentId, setUpdatedStudentId] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  const { selectedCellParams, cellMode, cellModesModel, setCellModesModel } =
    props;

  const handleSaveOrEdit = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === "edit") {    
      
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } },
      });
    } else {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } },
      });
    }
  };

  const handleCancel = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    setCellModesModel({
      ...cellModesModel,
      [id]: {
        ...cellModesModel[id],
        [field]: { mode: GridCellModes.View, ignoreModifications: true },
      },
    });
  };

  const handleMouseDown = (event) => {
    // Keep the focus in the cell
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        p: 1,
      }}
    >
      <Button
        onClick={handleSaveOrEdit}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        variant="outlined"
      >
        {cellMode === "edit" ? "Save" : "Edit"}
      </Button>
      <Button
        onClick={handleCancel}
        onMouseDown={handleMouseDown}
        disabled={cellMode === "view"}
        variant="outlined"
        sx={{ ml: 1 }}
      >
        Cancel
      </Button>
    </Box>
  );
}

EditToolbar.propTypes = {
  cellMode: PropTypes.oneOf(["edit", "view"]).isRequired,
  cellModesModel: PropTypes.object.isRequired,
  selectedCellParams: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
  setCellModesModel: PropTypes.func.isRequired,
};

export default function StartEditButtonGrid() {
  const [selectedCellParams, setSelectedCellParams] = useState(null);
  const [cellModesModel, setCellModesModel] = useState({});

  const handleCellFocus = React.useCallback((event) => {
    const row = event.currentTarget.parentElement;
    const id = row.dataset.id;
    const field = event.currentTarget.dataset.field;
    setSelectedCellParams({ id, field });
  }, []);

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return "view";
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || "view";
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback(
    (params, event) => {
      if (cellMode === "edit") {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
  ); 
    useEffect(() => {
      db.collection("IBITS").onSnapshot((snapshot) => {
        setStudent(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }, []);

  const [Student, setStudent] = useState([]);
  const trim = Student?.map((user) => {
    return {
      name: user?.data.firstName,
      age: "22",
      id: user?.id,
   
    };
  });
  console.log("sample kuto", Student);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={trim}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        onCellKeyDown={handleCellKeyDown}
        cellModesModel={cellModesModel}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: {
            cellMode,
            selectedCellParams,
            setSelectedCellParams,
            cellModesModel,
            setCellModesModel,
          },
          cell: {
            onFocus: handleCellFocus,
          },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

const columns = [
  { field: "name", headerName: "Name", width: 180, editable: true },
  { field: "age", headerName: "Age", type: "number", editable: true },
];


import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase/index";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "react-bootstrap/Modal";
import { Button, Card, Form } from "react-bootstrap";
import "firebase/compat/firestore";
import { useUserAuth } from "../../../../context/UserAuthContext";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  DataGrid,
  GridToolbar,
  GridCellEditCommitParams,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import PasswordInputField from "../../../../login/PasswordInputField";
import ConfirmPasswordInputField from "../../../../login/ConfirmPasswordInputField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function Dcet3() {
  //Password validation
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [org, setorg] = useState("");
  const [gender, setgender] = useState("");
  const [course, setcourse] = useState("");
  const [year, setYear] = useState("");
  const [Date2, setDate] = useState("");
  const [location, setlocation] = useState("");
  const [email, setEmail] = useState("");
  const [studenti, setStudenti] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  const [Student, setStudent] = useState([]);

  const DateString = Date2.toString();

  useEffect(() => {
    db.collection("DCET3").onSnapshot((snapshot) => {
      setStudent(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShow2(false);

    setError("");
    try {
      await signUp(email, passwordInput);
      console.log("SignUp done");
    } catch (err) {
      setError(err.message);
    }
    const username = e.target.StudentID.value;

    await db.collection("StudentData").doc(username).set({
      firstName: fname,
      lastName: lname,
      Birth: DateString,
      organization: org,
      gender: gender,
      course: course,
      Year: year,
      location: location,
      email: email,
      studentId: studenti,
      password: passwordInput2.confirmPassword,
    });

    if (org === "PICE") {
      await db.collection("PICE").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    }
    //For years
    if (year === "DCET3") {
      await db.collection("DCET3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    }
    setfname("");
    setlname("");
    setDate("");
    setorg("");
    setgender("");
    setcourse("");
    setYear("");
    setlocation("");
    setEmail("");
    setStudenti("");
    setPasswordInput2("");
  };
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput2, setPasswordInput2] = useState({
    password: "",
  });
  const handlePasswordChange = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    const passwordInput = {
      ...passwordInput2,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput2(passwordInput);
  };
  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    //for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordErr(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        passwordInput.confirmPassword.length > 0)
    ) {
      if (passwordInput2.confirmPassword !== passwordInput2.password) {
        setConfirmPasswordError("Confirm password is not matched");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const columns = [
    {
      field: "StudentID",
      headerName: "Student ID",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "FirstName",
      headerName: "First Name",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "LastName",
      headerName: "Last Name",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Birth",
      headerName: "BirthDay",
      width: 145,
      type: "date",
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Email",
      headerName: "Email",
      width: 220,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Organization",
      headerName: "Organization",
      width: 120,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Course",
      headerName: "Course",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Address",
      headerName: "Address",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
  ];

  const trim = Student?.map((user) => {
    return {
      StudentID: user?.data.studentId,
      FirstName: user?.data.firstName,
      LastName: user?.data.lastName,
      Birth: user?.data.Birth,
      Email: user?.data.email,
      Organization: user?.data.organization,
      Course: user?.data.course,
      Gender: user?.data.gender,
      Address: user?.data.location,
      headerClassName: "super-app-theme--header",
      id: user?.id,
    };
  });
  return (
    <>
      <Modal
        show={show2}
        onHide={handleClose2}
        keyboard={false}
        className="Modals"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#4C0001" }}>
            <strong>Add Student</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="text-center mb-1 mt-1">
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
          <br />
          <Form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="First Name"
              autocomplete="off"
              onChange={(e) => setfname(e.target.value)}
              className="mb-3 "
            />
            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="Last Name"
              autocomplete="off"
              onChange={(e) => setlname(e.target.value)}
              className="mb-3"
            />
            <div
              className="row mb-3"
              style={{ width: "100%", marginLeft: "4px" }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  openTo="year"
                  views={["year", "month", "day"]}
                  label="Year, month and date"
                  value={Date2}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} />
                  )}
                />
              </LocalizationProvider>
            </div>
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
            <div
              className="row mb-3"
              style={{ width: "100%", marginLeft: "4px" }}
            >
              <TextField
                select
                label="Organization"
                required
                onChange={(e) => setorg(e.target.value)}
                helperText="Please select your Organization"
                className="mb-3"
              >
                <MenuItem value="PICE" className="scrollable-div">
                  Philippine Institute of Civil Engineers (PICE)
                </MenuItem>
              </TextField>

              <TextField
                select
                label="Gender"
                required
                onChange={(e) => setgender(e.target.value)}
                helperText="Please select your Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </div>
            <TextField
              id="outlined-select-currency"
              select
              label="Course"
              required
              onChange={(e) => setcourse(e.target.value)}
              helperText="Please select your Course"
              className="mb-3"
              value={course}
              style={{ width: "100%", marginLeft: "4px", position: "relative" }}
            >
              {org === "PICE"
                ? [
                    <MenuItem value="DCET3" className="scrollable-div">
                      Diploma in Civil Engineering Technology (DCET)
                    </MenuItem>,
                  ]
                : []}
            </TextField>
            <TextField
              select
              label="Year"
              required
              onChange={(e) => setYear(e.target.value)}
              helperText="Please select your Year"
              className="mb-3"
              value={year}
              style={{ width: "100%", marginLeft: "4px", position: "relative" }}
            >
              {course === "DCET3"
                ? [
                    <MenuItem value="DCET3" className="scrollable-div">
                      DCET-2
                    </MenuItem>,
                  ]
                : []}
            </TextField>

            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="Address"
              autocomplete="off"
              onChange={(e) => setlocation(e.target.value)}
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

            <div className="row">
              <PasswordInputField
                handlePasswordChange={handlePasswordChange}
                handleValidation={handleValidation}
                passwordError={passwordError}
              />
              <ConfirmPasswordInputField
                handlePasswordChange={handlePasswordChange}
                handleValidation={handleValidation}
                confirmPasswordError={confirmPasswordError}
                onChange={(e) => passwordInput(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <Button variant="outline-primary" type="Submit">
                Add Student
              </Button>
            </div>
          </Form>
          <hr />
        </Modal.Body>
      </Modal>

      <div className="App">
        <Card
          className="m-3 p-3 "
          style={{
            borderTop: "4px solid #800",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            color: "#800",
            alignItems: "center",
          }}
        >
          <h1
            className="pup"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <strong style={{ marginTop: "20px" }}>DCET 3 STUDENT RECORD</strong>
          </h1>
        </Card>
        <Button
          variant="primary"
          onClick={handleShow2}
          style={{ padding: "20px", margin: "10px" }}
        >
          <AddBoxIcon /> Add Student
        </Button>
        <h4 style={{ color: "#4c0001" }}>
          <strong>NUMBERS OF STUDENT ENROLLED [ {Student.length} ]</strong>
        </h4>
        <Box
          sx={{
            height: 600,
            width: "100%",
            "& .super-app-theme--header": {
              backgroundColor: "#4c0001",
              color: "#f4f6f9",
            },
            backgroundColor: "#f4f6f9",
          }}
        >
          <DataGrid
            rows={trim}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            experimentalFeatures={{ newEditingApi: true }}
          />
          <br />
        </Box>
        <br />
      </div>
    </>
  );
}

export default Dcet3;

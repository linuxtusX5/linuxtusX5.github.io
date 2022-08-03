import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/index";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "react-bootstrap/Modal";
import { Button, Card, Form, Col } from "react-bootstrap";
import "firebase/compat/firestore";
import { useUserAuth } from "../../../context/UserAuthContext";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function UapsaALL() {
const [dataID, setDataID] = useState("");

const [Student, setStudent] = useState([]);
const [updatedFirstName, setUpdatedFirstName] = useState("");
const [updatedLastName, setUpdatedLastName] = useState("");
const [updatedOrg, setUpdatedOrg] = useState("");
const [updatedGender, setUpdatedGender] = useState("");
const [updatedCourse, setUpdatedCourse] = useState("");
const [updatedYear, setUpdatedYear] = useState("");
const [updatedDate2, setUpdatedDate] = useState("");
const [updatedLocation, setUpdatedLocation] = useState("");
const [updatedEmail, setUpdatedEmail] = useState("");
const [updatedStudentId, setUpdatedStudentId] = useState("");
const UpdatedDateString = updatedDate2.toString();

  useEffect(() => {
    db.collection("UAPSA").onSnapshot((snapshot) => {
      setStudent(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
 const updateData = async (e) => {
   e.preventDefault();

   Swal.fire({
     position: "center",
     icon: "success",
     title: "Success",
     showConfirmButton: false,
     timer: 1000,
   });

   db.collection("BSARCH1").doc(dataID).update({
     firstName: updatedFirstName,
     lastName: updatedLastName,
     Birth: UpdatedDateString,
     organization: updatedOrg,
     gender: updatedGender,
     course: updatedCourse,
     Year: updatedYear,
     location: updatedLocation,
     email: updatedEmail,
     studentId: updatedStudentId,
   });

   db.collection("BSARCH2").doc(dataID).update({
     firstName: updatedFirstName,
     lastName: updatedLastName,
     Birth: UpdatedDateString,
     organization: updatedOrg,
     gender: updatedGender,
     course: updatedCourse,
     Year: updatedYear,
     location: updatedLocation,
     email: updatedEmail,
     studentId: updatedStudentId,
   });

   db.collection("BSARCH3").doc(dataID).update({
     firstName: updatedFirstName,
     lastName: updatedLastName,
     Birth: UpdatedDateString,
     organization: updatedOrg,
     gender: updatedGender,
     course: updatedCourse,
     Year: updatedYear,
     location: updatedLocation,
     email: updatedEmail,
     studentId: updatedStudentId,
   });

   db.collection("BSARCH4").doc(dataID).update({
     firstName: updatedFirstName,
     lastName: updatedLastName,
     Birth: UpdatedDateString,
     organization: updatedOrg,
     gender: updatedGender,
     course: updatedCourse,
     Year: updatedYear,
     location: updatedLocation,
     email: updatedEmail,
     studentId: updatedStudentId,
   });

   db.collection("UAPSA").doc(dataID).update({
     firstName: updatedFirstName,
     lastName: updatedLastName,
     Birth: UpdatedDateString,
     organization: updatedOrg,
     gender: updatedGender,
     course: updatedCourse,
     Year: updatedYear,
     location: updatedLocation,
     email: updatedEmail,
     studentId: updatedStudentId,
   });

   setShow(false);
   setUpdatedFirstName("");
   setUpdatedLastName("");
   setUpdatedDate("");
   setUpdatedOrg("");
   setUpdatedGender("");
   setUpdatedCourse("");
   setUpdatedYear("");
   setUpdatedLocation("");
   setUpdatedEmail("");
   setUpdatedStudentId("");
 };

 const deleteData = (id) => {
   db.collection("BSARCH1").doc(id).delete();
   db.collection("BSARCH2").doc(id).delete();
   db.collection("BSARCH3").doc(id).delete();
   db.collection("BSARCH4").doc(id).delete();
   db.collection("UAPSA").doc(id).delete();
   handleClose3();
 };

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const [show3, setShow3] = useState(false);

 const handleClose3 = () => setShow3(false);
 const handleShow3 = () => setShow3(true);

  const columns = [
    {
      field: "StudentID",
      headerName: "Student ID",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "FirstName",
      headerName: "First Name",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "LastName",
      headerName: "Last Name",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Birth",
      headerName: "BirthDay",
      width: 145,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Email",
      headerName: "Email",
      width: 220,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Organization",
      headerName: "Organization",
      width: 120,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Course",
      headerName: "Course",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Address",
      headerName: "Address",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Edit",
      headerName: "Edit",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="success"
            onClick={() => {
              handleShow();
              setDataID(cellValues.id);
            }}
          >
            <EditIcon /> Update
          </Button>
        );
      },
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="danger"
            onClick={() => {
              // deleteData(cellValues.id);
              setDataID(cellValues.id);
              handleShow3();
            }}
          >
            <DeleteIcon /> Delete
          </Button>
        );
      },
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
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
        style={{ marginTop: "100px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#4c0001" }}>ARE YOU SURE?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You won't be able to revert this?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose3}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => deleteData(dataID)}>
            Yes, Delete it!
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="Modals"
        // style={{ marginTop: "45px", margin: "20px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#4C0001" }}>
            <strong>Update Student</strong>
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
          <Form onSubmit={updateData}>
            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="First Name"
              autocomplete="off"
              value={updatedFirstName}
              onChange={(e) => setUpdatedFirstName(e.target.value)}
              className="mb-3 "
            />
            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="Last Name"
              autocomplete="off"
              value={updatedLastName}
              onChange={(e) => setUpdatedLastName(e.target.value)}
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
                  value={updatedDate2}
                  onChange={(newValue) => {
                    setUpdatedDate(newValue);
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
              value={updatedStudentId}
              name="StudentID"
              autocomplete="off"
              onChange={(e) => setUpdatedStudentId(e.target.value)}
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
                value={updatedOrg}
                onChange={(e) => setUpdatedOrg(e.target.value)}
                helperText="Please select your Organization"
                className="mb-3"
              >
                <MenuItem value="UAPSA" className="scrollable-div">
                  United Architects of the Philippines Student Auxiliary (UAPSA)
                </MenuItem>
              </TextField>

              <TextField
                select
                label="Gender"
                required
                value={updatedGender}
                onChange={(e) => setUpdatedGender(e.target.value)}
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
              onChange={(e) => setUpdatedCourse(e.target.value)}
              helperText="Please select your Course"
              className="mb-3"
              value={updatedCourse}
              style={{ width: "100%", marginLeft: "4px", position: "relative" }}
            >
              {updatedOrg === "UAPSA"
                ? [
                    <MenuItem value="BSARCH" className="scrollable-div">
                      Bachelor of Science in Architecture (BSARCH)
                    </MenuItem>,
                  ]
                : []}
            </TextField>
            <TextField
              select
              label="Year"
              required
              onChange={(e) => setUpdatedYear(e.target.value)}
              helperText="Please select your Year"
              className="mb-3"
              value={updatedYear}
              style={{ width: "100%", marginLeft: "4px", position: "relative" }}
            >
              {updatedCourse === "BSARCH"
                ? [
                    <MenuItem value="BSARCH1" className="scrollable-div">
                      BSARCH-1
                    </MenuItem>,
                    <MenuItem value="BSARCH2" className="scrollable-div">
                      BSARCH-2
                    </MenuItem>,
                    <MenuItem value="BSARCH3" className="scrollable-div">
                      BSARCH-3
                    </MenuItem>,
                    <MenuItem value="BSARCH" className="scrollable-div">
                      BSARCH-4
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
              value={updatedLocation}
              onChange={(e) => setUpdatedLocation(e.target.value)}
              className="mb-3"
            />
            <TextField
              required
              type="email"
              id="outlined-required"
              style={{ width: "100%" }}
              label="Email"
              autocomplete="off"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
              className="mb-3"
            />
            <div className="d-grid gap-2">
              <Button variant="outline-primary" type="Submit">
                Update Student
              </Button>
              <Button variant="outline-danger" onClick={handleClose}>
                Cancel
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
            <strong style={{ marginTop: "20px" }}>UAPSA STUDENT RECORD</strong>
          </h1>
        </Card>
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

export default UapsaALL;

import React, { useState, useEffect } from "react";
import { db } from "../../firebase/index";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Modal from "react-bootstrap/Modal";
import { Button, Card, Form, Table } from "react-bootstrap";
import "firebase/compat/firestore";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PaymentIcon from "@mui/icons-material/Payment";
import Slide from "@mui/material/Slide";

import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SynertechChecker() {
  const [fname, setfname] = useState("");
  const [Amount, setAmount] = useState(null);
  const [Date2, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [dataId, setDataID] = useState("");
  const [dataId2, setDataID2] = useState("");
  const [Student, setStudent] = useState([]);

  //Updating
  const [UpdatedAmount, setUpdatedAmount] = useState(null);
  const [Updatedfname, setUpdatedfname] = useState("");

  const [Pay, setPay] = useState([]);
  const DateString = Date2.toString();

  useEffect(() => {
    db.collection("SYNERTECH").onSnapshot((snapshot) => {
      setStudent(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("SYNERTECHPayment").onSnapshot((snapshot) => {
      setPay(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1000,
    });

    setOpen2(false);
    const username = e.target.StudentID.value;

    await db.collection("SYNERTECHPayment").doc(username).set({
      Date: DateString,
      FeesName: fname,
      Amount: Amount,
    });

    setDate("");
    setfname("");
    setAmount("");
  };

  const updateStatus = async (e) => {
    e.preventDefault();
    handleClose();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 2000,
    });

    await db.collection("SYNERTECH").doc(dataId).update({
      Status: status,
    });
    setStatus("");
  };

  const PaymentUpdate = async (e) => {
    e.preventDefault();
    handleClose3();
  };

  const deleteData = (id) => {
    db.collection("SYNERTECHPayment").doc(id).delete();
  };

  const UpdatedPayment = async (e) => {
    e.preventDefault();
    handleClose4();
    await db.collection("SYNERTECHPayment").doc(dataId2).update({
      FeesName: Updatedfname,
      Amount: UpdatedAmount,
    });
    setUpdatedfname("");
    setUpdatedAmount("");
  };
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

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
      field: "Email",
      headerName: "Email",
      width: 220,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Status",
      headerName: "Status",
      width: 120,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "View",
      headerName: "View",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="success"
            onClick={() => {
              handleClickOpen();
              setDataID(cellValues.id);
            }}
          >
            <RateReviewIcon /> View
          </Button>
        );
      },
    },
    // {
    //   field: "actions",
    //   type: "actions",
    //   width: 80,
    //   getActions: (params) => [
    //     <GridActionsCellItem
    //       icon={<DeleteIcon />}
    //       label="Delete"
    //       onClick={deleteData(params.id)}
    //     />,
    //   ],
    // },
  ];

  const trim = Student?.map((user) => {
    return {
      StudentID: user?.data.studentId,
      FirstName: user?.data.firstName,
      LastName: user?.data.lastName,
      Email: user?.data.email,
      Status: user?.data.Status,
      Organization: user?.data.organization,
      headerClassName: "super-app-theme--header",
      id: user?.id,
    };
  });

  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const [open4, setOpen4] = useState(false);

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("dta", dataId2);
  return (
    <>
      {" "}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Form onSubmit={updateStatus}>
          <DialogTitle>
            <h2>PaymentChecker</h2>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              style={{
                width: "300px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {Pay?.map(({ id, data }) => (
                <div key={id} style={{ color: "#4c0001" }}>
                  <h5>
                    Name of Fees : <strong>{data.FeesName}</strong>
                  </h5>
                  <h5>
                    Amount : <strong>{data.Amount}</strong>
                  </h5>
                </div>
              ))}
              <TextField
                select
                label="Status"
                required
                className="mb-3"
                value={status}
                style={{
                  width: "40%",
                  marginLeft: "4px",
                  position: "relative",
                }}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="Paid" className="scrollable-div">
                  Fully Paid
                </MenuItem>
                <MenuItem value="Unpaid" className="scrollable-div">
                  Unpaid
                </MenuItem>
              </TextField>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="danger">
              Cancel
            </Button>
            <Button type="Submit" variant="success">
              Done
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
      >
        <Form onSubmit={handleSubmit}>
          <DialogTitle style={{ color: "#4C0001" }}>
            <strong>
              <PaymentIcon /> ADD FEES
            </strong>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              POLYTECHNIC UNIVERSITY OF THE PHILIPPINES LOPEZ QUEZON BRANCH
            </DialogContentText>
            <br />
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
              margin="dense"
              label="NAME OF FEES"
              name="StudentID"
              type="text"
              fullWidth
              variant="standard"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
            />
            <TextField
              margin="dense"
              label="AMOUNT"
              type="number"
              fullWidth
              variant="standard"
              value={Amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2} variant="danger">
              Cancel
            </Button>
            <Button type="Submit" variant="success">
              Done
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
      <Dialog
        open={open3}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose3}
      >
        <Form onSubmit={PaymentUpdate}>
          <DialogTitle style={{ color: "#4C0001" }}>
            <strong>
              <PaymentIcon /> EDIT FEES
            </strong>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              POLYTECHNIC UNIVERSITY OF THE PHILIPPINES LOPEZ QUEZON BRANCH
            </DialogContentText>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Option</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {Pay?.map(({ id, data }) => (
                  <tr key={id}>
                    <td></td>
                    <td>{data.FeesName}</td>
                    <td>₱ {data.Amount}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleClickOpen4();
                          setDataID2(id);
                          setUpdatedAmount(data.Amount);
                          setUpdatedfname(data.FeesName);
                        }}
                      >
                        <EditIcon /> update
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteData(id);
                        }}
                      >
                        <DeleteIcon /> Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose3} variant="danger">
              Cancel
            </Button>
            <Button type="Submit" variant="success">
              Done
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
      <Dialog
        open={open4}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose4}
      >
        <Form onSubmit={UpdatedPayment}>
          <DialogTitle style={{ color: "#4C0001" }}>
            <strong>
              <PaymentIcon /> UPDATE FEES
            </strong>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              POLYTECHNIC UNIVERSITY OF THE PHILIPPINES LOPEZ QUEZON BRANCH
            </DialogContentText>
            <br />
            <TextField
              margin="dense"
              label="NAME OF FEES"
              name="StudentID"
              type="text"
              fullWidth
              variant="standard"
              value={Updatedfname}
              onChange={(e) => setUpdatedfname(e.target.value)}
            />
            <TextField
              margin="dense"
              type="number"
              fullWidth
              variant="standard"
              value={UpdatedAmount}
              onChange={(e) => setUpdatedAmount(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose4} variant="danger">
              Cancel
            </Button>
            <Button type="Submit" variant="success">
              Done
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
      <div className="App">
        <Card
          className="m-3 p-3 "
          style={{
            borderTop: "4px solid #800",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            backgroundColor: "#EAF6F6",
            alignItems: "center",
          }}
        >
          <h1
            className="pup"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <strong style={{ marginTop: "20px" }}>
              SYNERTECH Payment Checker
            </strong>
          </h1>
        </Card>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Button
              variant="primary"
              onClick={handleClickOpen2}
              style={{ padding: "20px", margin: "10px" }}
            >
              <AddBoxIcon /> Add Fees
            </Button>
            <Button
              variant="secondary"
              onClick={handleClickOpen3}
              style={{ padding: "20px", margin: "10px" }}
            >
              <EditIcon /> Edit Fee
            </Button>
            <Box
              sx={{
                height: 600,
                width: "90%",
                "& .super-app-theme--header": {
                  backgroundColor: "#4c0001",
                  color: "#f4f6f9",
                },
                backgroundColor: "#EAF6F6",
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
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Card
              className=" p-3"
              style={{
                overflow: "scroll",
                overflowX: "hidden",
                borderTop: "4px solid #800",
                boxShadow:
                  "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                color: "#800",
                alignItems: "center",
                height: "650px",
                backgroundColor: "#EAF6F6",
              }}
            >
              <h4 style={{ color: "#000" }}>
                <strong>STUDENT [ {Student.length} ]</strong>
              </h4>{" "}
              <br />
              <br />
              <h1>
                <strong>PAYMENT</strong>
              </h1>
              <br />
              <br />
              <Table striped>
                <thead>
                  <tr>
                    <th>Date/Time</th>
                    <th>Name</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {Pay?.map(({ id, data }) => (
                    <tr key={id}>
                      <td>{data.Date}</td>
                      <td>
                        <strong>{data.FeesName}</strong>
                      </td>
                      <td>
                        {" "}
                        ₱ <strong>{data.Amount}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {/* <h2>Total : {dataId().Amount + dataId().Amount}</h2> */}
            </Card>
          </Grid>
          <br />
        </Grid>
      </div>
    </>
  );
}

export default SynertechChecker;

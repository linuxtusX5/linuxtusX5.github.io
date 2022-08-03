import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, Card, Button, Modal } from "react-bootstrap";
import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  getDoc,
  namedQuery,
  addDoc,
} from "firebase/firestore";
import "firebase/compat/firestore";
import "firebase/compat/firestore";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import EventIcon from "@mui/icons-material/Event";
import CampaignIcon from "@mui/icons-material/Campaign";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import logo from "../../Photos/PUPLogo.png";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LogoutIcon from "@mui/icons-material/Logout";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import apps from "../../firebase/index";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import HomeIcon from "@mui/icons-material/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";
import Swal from "sweetalert2";

const db = apps.firestore();

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Auditor = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = useState("");

  const [users, setUsers] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const [open2, setOpen2] = useState(false);
  const [updatedInput, setUpdatedInput] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");
  const [show, setShow] = useState(false);

  const handleClose2 = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = apps.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const updateData = async (e) => {
    e.preventDefault();
    handleClose();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 2000,
    });
    await db.collection("Auditor").doc(dataIdToBeUpdated).update({
      name: updatedInput,
      Description: updatedDesc,
      timestamp: new Date(),
    });
    setUpdatedInput("");
    setUpdatedDesc("");
  };
  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen2(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection("Auditor").doc(username).set({
      name: username,
      EventPic: fileUrl,
      Description: desc,
      timestamp: new Date(),
    });
  };

  useEffect(() => {
    const q = query(collection(db, "Auditor"), orderBy("timestamp", "desc"));

    AOS.init({
      duration: 1000,
    });

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const deletedocs = (dataIdToBeUpdated) => {
    db.collection("Auditor").doc(dataIdToBeUpdated).delete();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 2000,
    });
    handleClose2();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        style={{ marginTop: "100px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#4c0001" }}>ARE YOU SURE?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You won't be able to revert this?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose2}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => deletedocs(dataIdToBeUpdated)}
          >
            Yes, Delete it!
          </Button>
        </Modal.Footer>
      </Modal>{" "}
      <Dialog open={open2} onClose={handleClose}>
        <DialogTitle style={{ color: "#4C0001" }}>EDIT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            POLYTECHNIC UNIVERSITY OF THE PHILIPPINES LOPEZ QUEZON BRANCH
          </DialogContentText>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={updatedInput}
            onChange={(e) => setUpdatedInput(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={updatedDesc}
            onChange={(e) => setUpdatedDesc(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="danger">
            Cancel
          </Button>
          <Button onClick={updateData} variant="success">
            Update
          </Button>
        </DialogActions>
      </Dialog>
          <DrawerHeader />
            <Paper sx={{ width: "100%" }}>
              <form onSubmit={onSubmit}>
                <div className="annIn">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Picture"
                    className="col-10 form-group mx-auto mb-2"
                  >
                    <Form.Control
                      type="file"
                      placeholder="Picture"
                      style={{ backgroundColor: "#f4f6f9" }}
                      onChange={onFileChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="col-10 form-group mx-auto mb-2"
                  >
                    <Form.Control
                      type="text"
                      style={{ backgroundColor: "#f4f6f9" }}
                      name="username"
                      autoComplete="off"
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Description Ex(Pup Lopez Central Student Council AY: 2021-2022)"
                    className="col-10 form-group mx-auto mb-2"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Description Ex(Pup Lopez Central Student Council AY: 2021-2022)"
                      style={{ backgroundColor: "#f4f6f9" }}
                      onChange={(e) => setDesc(e.target.value)}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                  <div className="col-10 pt-3 mx-auto">
                    <input
                      class="in"
                      type="submit"
                      className="btn btn-info"
                      value="Upload"
                    ></input>
                  </div>
                  <br />
                </div>
              </form>
            </Paper>
            <div className="container header2">
              <h1>
                <span className="design2">AUDITOR</span>
              </h1>
            </div>
                {users.map((user, name) => {
                  return (
                    <CardActionArea
                      className="mb-4"
                      key={name}
                      onClick={handleExpandClick}
                      style={{
                        color: "#4C0001",
                        backgroundColor: "#4C0001",
                        borderTop: "4px solid #4C0001",
                        boxShadow:
                          "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                      }}
                    >
                      <ExpandMore
                        expand={expanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                        style={{ color: "#fff" }}
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardMedia
                          component="img"
                          height="100%"
                          image={user.EventPic}
                          alt={user.name}
                        />
                      </Collapse>
                      <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.Description}
                        </Typography>
                      </CardContent>
                      <Button
                        variant="success"
                        style={{ margin: "10px" }}
                        onClick={() => {
                          handleClickOpen();
                          setDataIdToBeUpdated(user.id);
                          setUpdatedInput(user.name);
                          setUpdatedDesc(user.Description);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleShow();
                          setDataIdToBeUpdated(user.id);
                        }}
                      >
                        Delete
                      </Button>
                    </CardActionArea>
                  );
                })}
    </>
  );
};
export default Auditor;

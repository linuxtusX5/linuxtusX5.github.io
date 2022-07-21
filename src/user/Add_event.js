import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, Card } from "react-bootstrap";
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
import logo from "../Photos/PUPLogo.png";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FilterListIcon from "@mui/icons-material/FilterList";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import apps from "../firebase/index";

import HomeIcon from "@mui/icons-material/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const db = apps.firestore();
const columns = [
  { id: "Date", label: "Date", minWidth: 160 },
  { id: "Name", label: "Name", minWidth: 100 },
  {
    id: "Description",
    label: "Description",
    minWidth: 290,
    align: "lift",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
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

const Add_event = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = useState("");

  const [users, setUsers] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = apps.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
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
    await db.collection("Event").doc(username).set({
      name: username,
      EventPic: fileUrl,
      Description: desc,
      timestamp: new Date(),
    });
  };


  useEffect(() => {
    const q = query(collection(db, "Event"), orderBy("timestamp", "desc"));

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

  const deletedocs = async (user) => {
    await deleteDoc(doc(db, "Event", user.name));
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          style={{ backgroundColor: "#4C0001" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <img width="35px" height="35px" src={logo} alt="Logo" />
              <b
                style={{
                  color: "#fff",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                PUP LOPEZ BRANCH
              </b>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <br />
              <Tooltip
                title="Home"
                arrow
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListItemButton component="a" href="/admin">
                  <ListItemIcon>
                    <HomeIcon
                      style={{
                        color: "#4C0001",
                      }}
                    />
                  </ListItemIcon>{" "}
                  Home
                </ListItemButton>
              </Tooltip>
              <br />
              <Tooltip
                title="Add Announcement"
                arrow
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListItemButton component="a" href="/AddAnnounce">
                  <ListItemIcon>
                    <CampaignIcon
                      style={{
                        color: "#4C0001",
                      }}
                    />
                  </ListItemIcon>{" "}
                  Announcement
                </ListItemButton>
              </Tooltip>
              <br />
              <Tooltip
                title="Add Event"
                arrow
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListItemButton component="a" href="/AddEvent">
                  <ListItemIcon>
                    <EventIcon
                      style={{
                        color: "#4C0001",
                      }}
                    />
                  </ListItemIcon>{" "}
                  Event
                </ListItemButton>
              </Tooltip>
              <br />
              <Tooltip
                title="Organization"
                arrow
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListItemButton component="a" href="/Org ">
                  <ListItemIcon>
                    <Inventory2Icon
                      style={{
                        color: "#4C0001",
                      }}
                    />
                  </ListItemIcon>{" "}
                  Organization
                </ListItemButton>
              </Tooltip>
              <br />
            </ListItem>
          </List>
          <Divider />
          <List>
            <br />
            <Tooltip
              title="Privacy"
              arrow
              placement="right"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <ListItemButton component="a" href="/PrivacyAdmin">
                <ListItemIcon>
                  <PrivacyTipIcon
                    style={{
                      color: "#4C0001",
                    }}
                  />
                </ListItemIcon>{" "}
                Privacy
              </ListItemButton>
            </Tooltip>
            <br />
            <Tooltip
              title="Terms of Use"
              arrow
              placement="right"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <ListItemButton component="a" href="/TermsAdmin">
                <ListItemIcon>
                  <SecurityOutlinedIcon
                    style={{
                      color: "#4C0001",
                    }}
                  />
                </ListItemIcon>{" "}
                Terms of Use
              </ListItemButton>
            </Tooltip>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Card
            className="m-2"
            style={{
              backgroundColor: "#fff ",
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
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
                      placeholder="NAME  ex( PUP-event)"
                      style={{ backgroundColor: "#f4f6f9" }}
                      name="username"
                      autoComplete="off"
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Description"
                    className="col-10 form-group mx-auto mb-2"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Description"
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
          </Card>
          <Card
            className="m-3 "
            data-aos="fade-up"
            style={{
              backgroundColor: "#fff ",
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <div className="container header2">
              <h1>
                <span className="design2">
                  Polytechnic University of the Philippines
                </span>
              </h1>
            </div>
          </Card>
          <Card
            className="m-3 "
            style={{
              backgroundColor: "#fff ",
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
            data-aos="fade-up"
          >
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 3">
                <ListSubheader style={{ backgroundColor: "#f4f6f9" }}>
                  <CardActionArea>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <span className="design2">
                          Polytechnic University of the Philippines
                        </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </ListSubheader>
              </Box>
              <Box gridColumn="span 9">
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
                      <i
                        className="fa fa-trash"
                        onClick={() => deletedocs(user)}
                        style={{ color: "#4C0001" }}
                      >
                        {" "}
                        Delete
                      </i>
                    </CardActionArea>
                  );
                })}
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};
export default Add_event;

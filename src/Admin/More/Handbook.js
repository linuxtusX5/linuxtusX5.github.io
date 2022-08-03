import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Fade from "@mui/material/Fade";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Navbar, Container, Nav, Card, Dropdown, Modal, Tab, Tabs, Button } from "react-bootstrap";
import logo from "../../Photos/PUPLogo.png";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";

import CloudPdfViewer from "@openbook/cloudpdf-viewer";


import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";
import ListSubheader from "@mui/material/ListSubheader";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import '../../Footer.css';
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Profile from "../../Photos/Advance care (6).png";
import InfoIcon from "@mui/icons-material/Info";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router";

import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

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


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Handbook = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null); 
  const [open, setOpen] = React.useState(false);
  const viewer = useRef(null);

  const handleOpen = () => setOpen(true);

  const handleClose2= () => setOpen(false);

    useEffect(() => {
      CloudPdfViewer(
        {
          documentId: "17b2f31b-7ca6-4e33-af9e-1bbecbe7b477",
          darkMode: true,
        },
        viewer.current
      ).then((instance) => {});
    }, []);
    const handleClose = () => {
      setAnchorEl(null);
    };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

    const renderPagination = () => {
      return (
        <>
          <button
            onClick={() => {
              let newPage = page - 1;
              newPage = newPage > 0 ? newPage : 1;
              setPage(newPage);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              let newPage = page + 1;
              newPage = newPage > pages ? pages : newPage;
              setPage(newPage);
            }}
          >
            Next
          </button>
        </>
      );
    };
      let pagination = null;
      if (pages) {
        pagination = renderPagination();
      }

  const [show, setShow] = React.useState(false);
  const [key, setKey] = React.useState("profile");

  const handleShow = () => setShow(true);    
  const handleClose3 = () => setShow(false);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { user } = useUserAuth();
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
        style={{ marginTop: "100px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="profile" title="Profile">
              <strong>Email: </strong> {user.email}
            </Tab>
            <Tab eventKey="contact" title="Logout">
              <Button variant="primary" onClick={handleLogout}>
                {" "}
                LOG OUT{" "}
              </Button>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ListSubheader>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="Nav"
          sx={{ position: "absolute", bottom: -600, right: 16, zIndex: 999 }}
          onOpen={handleOpen}
          onClose={handleClose2}
          icon={<SpeedDialIcon openIcon={<ArrowUpwardIcon />} />}
        >
          <SpeedDialAction
            icon={<HomeIcon style={{ color: "#4C0001" }} />}
            tooltipTitle="Home"
            href="/Home"
          />
          {
            <SpeedDialAction
              icon={<EventIcon style={{ color: "#4C0001" }} />}
              tooltipTitle="Event"
              href="/Event"
            />
          }
          <SpeedDialAction
            icon={
              <i
                style={{ color: "#4C0001" }}
                class="fa-solid fa-square-caret-down"
              />
            }
            tooltipTitle="More"
            href="/More"
          />
        </SpeedDial>
      </ListSubheader>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="dark"
            sticky="top"
            style={{
              backgroundColor: "#fff ",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <Container>
              <Navbar.Brand href="#home">
                {" "}
                <img width="35px" height="35px" src={logo} alt="Logo" />
                <b
                  style={{
                    color: "#4C0001",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  PUP LOPEZ BRANCH
                </b>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                style={{
                  backgroundColor: "#4C0001",
                }}
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    eventKey="Home"
                    as={Link}
                    to={"/Home"}
                    style={{
                      color: "#4C0001",
                    }}
                  >
                    <i className="fas fa-home"></i> <b>Home</b>
                  </Nav.Link>
                  <Nav.Link
                    eventKey="Event"
                    as={Link}
                    to={"/Event"}
                    style={{
                      color: "#4C0001",
                    }}
                  >
                    <i class="fa-solid fa-calendar-check"></i> <b>Event</b>
                  </Nav.Link>
                  <Nav.Link
                    eventKey="About"
                    as={Link}
                    to={"/More"}
                    style={{
                      color: "#4C0001",
                    }}
                  >
                    <i class="fa-solid fa-square-caret-down"></i> <b>About</b>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </AppBar>
        <Drawer variant="permanent">
          <DrawerHeader></DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Tooltip
                title="student handbook"
                arrow
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListItemButton component="a" href="/Handbook">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                    }}
                  >
                    <InboxIcon
                      style={{
                        color: "#4C0001",
                      }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
              <Tooltip
                title="Privacy"
                arrow
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListItemButton component="a" href="/Privacy">
                  <ListItemIcon>
                    <PrivacyTipIcon
                      style={{
                        color: "#4C0001",
                      }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
              <Tooltip
                title="PUP LOPEZ BRANCH HISTORY"
                arrow
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListItemButton component="a" href="/History">
                  <ListItemIcon>
                    <HistoryEduIcon
                      style={{
                        color: "#4C0001",
                      }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Tooltip
                title="Terms of Use"
                arrow
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListItemButton component="a" href="/Terms">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                    }}
                  >
                    <SecurityOutlinedIcon
                      style={{
                        color: "#4C0001",
                      }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </Box>
      <div className="left">
        <div className="viewers" ref={viewer}></div>
      </div>
    </>
  );
};
export default Handbook;

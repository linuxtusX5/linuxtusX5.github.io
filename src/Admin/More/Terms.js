import * as React from "react";
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
import { Navbar, Container, Nav, Card, Modal, Tab, Button, Tabs } from "react-bootstrap";
import logo from "../../Photos/PUPLogo.png";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";

import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Profile from "../../Photos/Advance care (6).png";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";
import ListSubheader from "@mui/material/ListSubheader";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router";

const drawerWidth = 240;

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

const Terms = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = React.useState(false);
  const handleClose2 = () => setShow(false);
  const [key, setKey] = React.useState("profile");
  const handleShow = () => setShow(true);

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
        onHide={handleClose2}
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
          <Button variant="secondary" onClick={handleClose2}>
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
          onClose={handleClose}
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
            tooltipTitle="About"
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
        <Box component="main">
          <DrawerHeader />
          <Card
            className="m-3 p-3 drawer2"
            style={{
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
              color: "#4C0001",
              alignItems: "center",
            }}
          >
            {" "}
            <h1 className="pup">
              <strong>
                POLYTECHNIC UNIVERSITY OF THE PHILIPPINES LOPEZ, QUEZON BRANCH
              </strong>
            </h1>
          </Card>
          <Card
            className="m-3 drawer2"
            style={{
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <Typography paragraph>
              <h3 className="pup">Terms of Use</h3>
            </Typography>
            <br />
            <Typography paragraph>
              Thank you for using the Polytechnic University of the Philippines
              (“PUP” or “University”) online services. This is provided by the
              University Located at PUP Lopez, Quezon Branch Yumul St., Brgy.
              Burgos Lopez, Quezon, Philippines
            </Typography>
            <br />
            <Typography paragraph style={{ color: "#4C0001" }}>
              By using our online services, you are agreeing to these terms.
              Please read carefully.
            </Typography>
          </Card>
          <Card
            className="m-3 drawer2"
            style={{
              backgroundColor: "#fff ",
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <Typography paragraph>
              <h3 className="pup">Acceptance of Terms</h3>
              The online services that PUP provides to you are subject to the
              following Terms of Use ("Terms"). This is an agreement between you
              (either an individual or a single entity) and the University. By
              visiting, browsing and/or interacting with our online services,
              you agree to be bound by this Terms.
            </Typography>
            <br />
            <Typography paragraph>
              PUP reserves the right to update the Terms at any time without
              notice to you. The most current version of the Terms can be viewed
              by clicking on the "Terms of Use" hypertext link located at the
              bottom of our Web pages and online services.
            </Typography>
            <br />
            <Typography paragraph>
              The University offers various online services wherein additional
              terms or requirements may apply. As such, these terms will be
              available to relevant online services, and those additional terms
              become part of your agreement with the University if you use those
              online services
            </Typography>
          </Card>
          <Card
            className="footer"
            style={{
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <div
              className="footer-box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <b>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</b>
              <p className="u-text-small">&copy; Copyright 2021.</p>
            </div>
          </Card>
        </Box>
      </Box>
    </>
  );
};
export default Terms;

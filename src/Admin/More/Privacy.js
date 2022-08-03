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
import { Navbar, Container, Nav, Card, Modal, Button, Tab, Tabs } from "react-bootstrap";
import logo from "../../Photos/PUPLogo.png";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
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
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";


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

const Privacy = () => {
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
                    eventKey="More"
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
              backgroundColor: "#fff ",
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <h3 className="pup">Privacy Statement</h3>
            <Typography paragraph>
              PUP is very much aware in protecting your privacy and personal
              information. This privacy statement discloses the data we collect
              from you and how we use it.
            </Typography>
            <Typography paragraph>
              This privacy statement only applies to the Services. Other sites
              or apps that has a link from the Services may have a separate
              privacy statement.
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
            <h3 className="pup">Collection of Personal Data</h3>
            <Typography paragraph>
              We also obtain data from third parties. We protect data obtained
              from third parties according to the practices described in this
              statement and any additional restrictions imposed by the source of
              the data. These third-party sources vary over time, but have
              included
            </Typography>
            <Typography paragraph>
              This privacy statement only applies to the Services. Other sites
              or apps that has a link from the Services may have a separate
              privacy statement.
            </Typography>
            <Typography paragraph>
              <ul>
                <li>
                  Social network when you grant permission to PUP Services to
                  access your data on one or more networks,
                </li>
                <li>
                  Service providers that help us determine a location based on
                  your IP address in order to customize certain services to your
                  location,
                </li>
                <li>
                  Partners with which we offer co-branded services or engage in
                  joint research activities, and
                </li>
                <li>
                  Publicly-available sources such as open government databases
                  or other data in the public domain.
                </li>
              </ul>
            </Typography>
          </Card>
          <br/><br/>
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
export default Privacy;

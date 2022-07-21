import React, { useState, useEffect } from "react";
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
import {
  Navbar,
  Container,
  Nav,
  Card,
  Modal,
  Tabs,
  Tab,
  Button,
} from "react-bootstrap";
import logo from "../Photos/PUPLogo.png";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import "./MiniDrawer.css";
import s from "../Photos/s.jpg";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Profile from "../Photos/wp5063265.webp";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";
import ListSubheader from "@mui/material/ListSubheader";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";

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

const MiniDrawer = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("profile");

  const handleOpen = () => setOpen(true);

  const handleShow = () => setShow(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setShow(false);

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
                <Nav>
                  <Nav.Link
                    href="#deets"
                    style={{
                      color: "#4C0001",
                    }}
                  >
                    {" "}
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      {" "}
                      <Tooltip
                        title="Profile :)"
                        fontWeight="bold"
                        arrow
                        placement="bottom"
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={Profile}
                          onClick={handleShow}
                        />
                      </Tooltip>
                    </StyledBadge>
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
            className="m-3 p-3 drawer1"
            style={{
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
              color: "#4C0001",
              alignItems: "center",
            }}
          >
            <h1 className="pup">
              <strong>
                POLYTECHNIC UNIVERSITY OF THE PHILIPPINES LOPEZ, QUEZON BRANCH
              </strong>
            </h1>
            <h2 className="pup">
              <b>Vision and Mission</b>
            </h2>
            <br />
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 9">
                <b style={{ color: "#4C0001" }}>
                  <Typography paragraph>
                    <h1 className="pup">
                      <b>Vision (Bisyon)</b>
                    </h1>
                    <br />
                    <h2>PUP: The National Polytechnic University</h2>
                  </Typography>
                </b>

                <br />
                <Typography paragraph>
                  <h1 className="pup">
                    <b>Mission (Misyon)</b>
                  </h1>
                  <br />
                  <h2>
                    <ol>
                      <li>
                        Provide democratized access to educational opportunities
                        for the holistic development of individuals with global
                        perspective.
                      </li>
                      <li>
                        Offer industry-oriented curricula that produce
                        highly-skilled professionals with managerial and
                        technical capabilities and a strong sense of public
                        service for nation building.
                      </li>
                      <li>Embed a culture of research and innovation.</li>
                      <li>
                        Continuously develop faculty and employees with the
                        highest level of professionalism.
                      </li>
                      <li>
                        Engage public and private institutions and other
                        stakeholders for the attainment of social development
                        goal.
                      </li>
                      <li>
                        Establish a strong presence and impact in the
                        international academic community.
                      </li>
                    </ol>
                  </h2>
                </Typography>
                <br />
                <Typography paragraph>
                  <h1 className="pup">
                    <b>Goals (Mga Tunguhin)</b>
                  </h1>
                  <br />
                  <h2>
                    In consonance with the Vision and Mission of the University,
                    PUP Lopez Branch affirms and avows itself to:
                    <br />
                    <ol>
                      <li>
                        Develop globally competitive and socially through
                        quality and responsive academic programs and services.
                      </li>
                      <li>
                        Generate and disseminate knowledge through productive
                        researches and continuing education relevant to the
                        needs of instruction and viable development.
                      </li>
                      <li>
                        Strengthen linkage, partnership and collaboration with
                        other institutions for constant program relevance,
                        resources generation, and sustainable extension programs
                        and services.
                      </li>
                      <li>
                        Continual review of educational programs to ensure their
                        quality, relevance and effectiveness.
                      </li>
                      <li>
                        Provide adequate and conducive school facilities to
                        ensure optimum student learning.
                      </li>
                    </ol>
                  </h2>
                  <br />
                  <h2>
                    Bilang pagtalima sa Bisyon at Misyon ng Pamantasan, ang PUP
                    Sangay ng Lopez ay nagpapatunay at sumumpa na:
                    <br />
                    <ol>
                      <li>
                        Humubog ng mga propesyonal na may kakayahang
                        makipagsabayan sa daigdig at may pagpapahalagang
                        panlipunan sa pamamagitan ng pagbibigay ng dekalidad at
                        tumutugong pang-akademikong programa at paglilingkod.
                      </li>
                      <li>
                        Lumikha at makapagbahagi ng mga kaalaman sa pamamagitan
                        ng mabungang pananaliksik at patuloy na pag-aaral na
                        tutugon upang higit na mapagbuti ang pagtuturo para sa
                        kapakinapakinabang na pag-unlad.
                      </li>
                      <li>
                        Palakasin ang ugnayan, pakikipagtulungan at kolaborasyon
                        sa ibang institusyon para sa patuloy na pagkakatulad ng
                        prograama, makalikha ng mapagkukunan at makabuo ng mga
                        pang matagalang proyekto at serbisyo sa ugnayang
                        panlabas.
                      </li>
                      <li>
                        Patuloy na pagsusuri sa mga pang-akademikong programa
                        upang masiguro ang kahusayan at kalidad ng edukasyon.
                      </li>
                      <li>
                        Magbigay ng sapat at akmang mga pasilidad sa paaralan
                        para sa lubos na pagkatuto ng mga mag aaral.
                      </li>
                    </ol>
                  </h2>
                </Typography>
              </Box>
            </Box>
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
export default MiniDrawer;

import React, {useEffect} from 'react';
import 'firebase/compat/firestore';
import './Event.css';
import "../Footer.css";
import "aos/dist/aos.css";
import AOS from "aos";
import logo from "../Photos/PUPLogo.png";
import Third from "../Photos/c.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListSubheader from "@mui/material/ListSubheader";
import {
  Navbar,
  Container,
  Nav,
  Card,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";

import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from '@mui/system';
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";

import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AnnouncementTwoToneIcon from "@mui/icons-material/AnnouncementTwoTone";
import storage from "../firebase/index";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Profile from "../Photos/wp5063265.webp";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";

import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";


import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";

const db = storage.firestore();

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

function Event_User() {
  const [users, setUsers] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [single, setSingleDoc] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [smShow, setSmShow] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [key, setKey] = React.useState("profile");

  const [open, setOpen] = React.useState(false);
  const handleClose2 = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {    
    AOS.init({
      duration: 1000,
    });

    const q = query(collection(db, "Event"), orderBy("timestamp", "desc"));

    AOS.init({
      duration: 1000,
    });

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();

  }, []);

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

    const fetchSingle = async (e) => {
      e.preventDefault();
      await db
        .collection("Event")
        .doc(input)
        .get()
        .then((snapshot) => {
          if (snapshot) {
            setSingleDoc(snapshot.data());
          }
        });
      console.log(single.Name);
    };
  return (
    <>
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
      <Modal
        show={show}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
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
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        keyboard={false}
        backdrop="static"
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-sm"
            style={{ color: "#4C0001" }}
          >
            <AnnouncementTwoToneIcon /> Search Event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Search the Name of Event</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setInput(e.target.value)}
              >
                <option>select</option>
                {users.map((list) => (
                  <option>{list.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
          <Button onClick={fetchSingle}>Search</Button>
          <br />
          <br />
          <h3>Event</h3>
          <Card
            className="m-1 item1"
            style={{
              backgroundColor: "#fff ",
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <Paper sx={{ width: "100%" }}>
              <CardActionArea
                className="mb-4"
                style={{
                  backgroundColor: "#4C0001",
                }}
                onClick={handleExpandClick2}
              >
                <ExpandMore
                  expand={expanded2}
                  aria-expanded={expanded2}
                  aria-label="show more"
                  style={{
                    color: "#fff",
                  }}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={single.EventPic}
                    alt={single.name}
                  />
                </Collapse>
                <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {single.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {single.Description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Paper>
          </Card>
        </Modal.Body>
      </Modal>
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
      <div id="header2">
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
            <Box gridColumn="span 3" className="item1">
              <ListSubheader style={{ backgroundColor: "#f4f6f9" }}>
                <CardActionArea>
                  <CardContent
                    style={{
                      marginTop: "60px",
                    }}
                  >
                    <Tooltip
                      title="Click me :)"
                      arrow
                      placement="right"
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                    >
                      <FilterListIcon
                        style={{
                          color: "#4C0001",
                          cursor: "pointer",
                        }}
                        onClick={() => setSmShow(true)}
                      />
                    </Tooltip>{" "}
                    <p>Filter</p>
                  </CardContent>
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
                  </CardActionArea>
                );
              })}
            </Box>
          </Box>
        </Card>
      </div>{" "}
      <Card
        className="footer"
        style={{
          borderTop: "4px solid #800",
          boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
        }}
      >
        <div className="footer-box">
          <b>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</b>
          <p className="u-text-small">&copy; Copyright 2021.</p>
        </div>
      </Card>
    </>
  );
}

export default Event_User;





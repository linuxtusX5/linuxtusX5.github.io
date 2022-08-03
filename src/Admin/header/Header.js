import React, { useState, useEffect} from "react";
import "./Header.css";
import logo from "../../Photos/PUPLogo.png"
import logo2 from "../../Photos/CSC2.png";
import President from "../../Photos/pres.jpg";
import Vice from "../../Photos/vice.jpg";
import Secretary from "../../Photos/sec.jpg";
import Treasurer from "../../Photos/tre.jpg";
import Auditor from "../../Photos/aud.jpg";
import Councilor1 from "../../Photos/coun.jpg";
import Councilor2 from "../../Photos/coun2.jpg";
import Councilor3 from "../../Photos/coun3.jpg";
import Councilor4 from "../../Photos/coun4.jpg";
import Councilor5 from "../../Photos/coun5.jpg";
import Councilor6 from "../../Photos/coun6.jpg";
import Councilor7 from "../../Photos/coun7.jpg";
import "../Button/Button.css";
import "../Event.css";

//Features
import "../features/Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import Feature from "../features/Feature";
import { FeatureList } from "../features/data";
import '../Download.css';
import '../../Sugg.css';
import '../../Footer.css';
import First from "../../Photos/a.jpg";
import Second from "../../Photos/c.jpg";
import Third from "../../Photos/b.jpg";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HomeIcon from "@mui/icons-material/Home";
import MoreIcon from "@mui/icons-material/More";

import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import {
  Navbar,
  Container,
  Nav,
  Card,
  //Table,
  FloatingLabel,
  Form,
  Carousel,
  Modal,
  Button,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import {db} from "../../firebase/index";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
//emailjs
import emailjs from '@emailjs/browser';
import "firebase/compat/firestore";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import AnnouncementTwoToneIcon from "@mui/icons-material/AnnouncementTwoTone";
import FilterListIcon from "@mui/icons-material/FilterList";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Profile from "../../Photos/Advance care (6).png";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";
import ListSubheader from "@mui/material/ListSubheader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EventIcon from "@mui/icons-material/Event";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
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

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Header = () => {

    
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [lists, setLists] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const [single, setSingleDoc] = useState([]);
  const [input, setInput] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("profile");
  const handleOpen = () => setOpen(true);

  const [IBIts, setIbits] = useState("");
  const handleClose = () => setOpen(false);

  const handleClose2 = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t9564z3",
        "template_miyd8br",
        e.target,
        "user_zGZ7M9G7Yd20lIrSMAwL9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    const q = query(
      collection(db, "Announcement"), orderBy("timestamp", "desc")

    );
    AOS.init({
      duration: 1000,
    });

     const unsubscribe = onSnapshot(q, (snapshot) => {
       setLists(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.Description })));
     });
     return () => unsubscribe();

  }, []);

    const fetchSingle = async (e) => {
      e.preventDefault();
      await db.collection("Announcement")
        .doc(input)
        .get()
        .then((snapshot) => {
          if (snapshot) {
            setSingleDoc(snapshot.data());
          }
        });
      console.log(single.Name);
    };

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
  console.log("Email: ", user.email);

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);
  const [expanded8, setExpanded8] = React.useState(false);
  const [expanded9, setExpanded9] = React.useState(false);
  const [expanded10, setExpanded10] = React.useState(false);
  const [expanded11, setExpanded11] = React.useState(false);
  const [expanded12, setExpanded12] = React.useState(false);

  const [President, setPresident] = React.useState([]);
  const [VicePresident, setVicePresident] = React.useState([]);
  const [Secretary, setSecretary] = React.useState([]);
  const [Treasurer, setTreasurer] = React.useState([]);
  const [Auditor, setAuditor] = React.useState([]);
  const [Councilor1, setCouncilor1] = React.useState([]);
  const [Councilor2, setCouncilor2] = React.useState([]);
  const [Councilor3, setCouncilor3] = React.useState([]);
  const [Councilor4, setCouncilor4] = React.useState([]);
  const [Councilor5, setCouncilor5] = React.useState([]);
  const [Councilor6, setCouncilor6] = React.useState([]);
  const [Councilor7, setCouncilor7] = React.useState([]);
  
  
    useEffect(() => {
      const q = query(
        collection(db, "President"),
        orderBy("timestamp", "desc")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setPresident(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
      return () => unsubscribe();
    }, []);
    
    useEffect(() => {
      const q = query(
        collection(db, "Vice-President"),
        orderBy("timestamp", "desc")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setVicePresident(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
      return () => unsubscribe();
    }, []);
 useEffect(() => {
   const q = query(collection(db, "Secretary"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setSecretary(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);
 
    useEffect(() => {
      const q = query(
        collection(db, "Treasurer"),
        orderBy("timestamp", "desc")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setTreasurer(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
      return () => unsubscribe();
    }, []);
    
 useEffect(() => {
   const q = query(collection(db, "Auditor"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setAuditor(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);
 useEffect(() => {
   const q = query(collection(db, "Councilor1"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setCouncilor1(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);

 useEffect(() => {
   const q = query(collection(db, "Councilor2"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setCouncilor2(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);
 useEffect(() => {
   const q = query(collection(db, "Councilor3"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setCouncilor3(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);
 useEffect(() => {
   const q = query(collection(db, "Councilor4"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setCouncilor4(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);
 useEffect(() => {
   const q = query(collection(db, "Councilor5"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setCouncilor5(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);
 useEffect(() => {
   const q = query(collection(db, "Councilor6"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setCouncilor6(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);
 useEffect(() => {
   const q = query(collection(db, "Councilor7"), orderBy("timestamp", "desc"));
   const unsubscribe = onSnapshot(q, (snapshot) => {
     setCouncilor7(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   });
   return () => unsubscribe();
 }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };

  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };

  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };

  const handleExpandClick9 = () => {
    setExpanded9(!expanded9);
  };

  const handleExpandClick10 = () => {
    setExpanded10(!expanded10);
  };

  const handleExpandClick11 = () => {
    setExpanded11(!expanded11);
  };

  const handleExpandClick12 = () => {
    setExpanded12(!expanded12);
  };

  return (
    <>
      {" "}
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
            <AnnouncementTwoToneIcon /> Search Announcement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Search the Name of Announcement</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setInput(e.target.value)}
              >
                <option value="0">select</option>
                {lists.map((list) => (
                  <option>{list.Name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
          <Button onClick={fetchSingle}>Search</Button>
          <br />
          <br />
          <h3>Announcement</h3>
          <Card
            className="m-1 item1"
            style={{
              backgroundColor: "#fff ",
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <Paper sx={{ width: "100%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="center"
                        colSpan={2}
                        style={{ color: "#4C0001" }}
                      >
                        <AnnouncementTwoToneIcon /> Announcement
                      </TableCell>
                      <TableCell
                        align="center"
                        colSpan={3}
                        style={{ color: "#4C0001" }}
                      >
                        <InfoTwoToneIcon /> Details
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      {columns.map((column2) => (
                        <TableCell
                          key={column2.id}
                          align={column2.align}
                          style={{
                            top: 57,
                            minWidth: column2.minWidth,
                            color: "#fff",
                            fontWeight: "bold",
                            backgroundColor: "#4C0001",
                          }}
                        >
                          <BookmarksIcon />
                          {column2.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {columns.map((column) => {
                        const value = single[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
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
                    <Avatar alt="Profile" src={Profile} onClick={handleShow} />
                  </Tooltip>
                </StyledBadge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="header">
        <Card
          className="m-2 item1"
          style={{
            backgroundColor: "#fff ",
            borderTop: "4px solid #4C0001",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
          }}
        >
          <Typography paragraph id="Ann">
            <h1 style={{ color: "#4c0001", fontWeight: "bolder" }}>
              ANNOUNCEMENT
            </h1>
          </Typography>
          <Paper sx={{ width: "100%" }}>
            <Tooltip
              title="Filter Click me :)"
              arrow
              placement="right"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <FilterListIcon
                style={{
                  marginLeft: "20px",
                  color: "#4C0001",
                  cursor: "pointer",
                }}
                onClick={() => setSmShow(true)}
              />
            </Tooltip>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table aria-label=" table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan={2}
                      style={{ color: "#4C0001" }}
                    >
                      <AnnouncementTwoToneIcon /> Announcement
                    </TableCell>
                    <TableCell
                      align="center"
                      colSpan={3}
                      style={{ color: "#4C0001" }}
                    >
                      <InfoTwoToneIcon /> Details
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          top: 57,
                          minWidth: column.minWidth,
                          color: "#fff",
                          fontWeight: "bold",
                          backgroundColor: "#4C0001",
                        }}
                      >
                        <BookmarksIcon />
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lists
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((list) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={list.code}
                        >
                          {columns.map((column) => {
                            const value = list[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              className="page"
              rowsPerPageOptions={[5, 25, 100]}
              component="div"
              count={lists.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Card>
        <Card
          className=" item3"
          style={{
            backgroundColor: "#fff ",
            borderTop: "4px solid #4C0001",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            padding: "10px",
          }}
          data-aos="fade-up"
        >
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Text className="features-content">
              <Card.Text data-aos="fade-up">
                <img className="logogo" src={logo} alt="Logo" />
              </Card.Text>
              <Card.Text data-aos="fade-up">
                <img className="logogo2" src={logo2} alt="Logo" />
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="m-3 "
          data-aos="fade-up"
          style={{
            backgroundColor: "#fff ",
            borderTop: "4px solid #800",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
          }}
        >
          <div className="container header2">
            <h1>
              <span className="design2">
                Polytechnic University of the Philippines Lopez, Quezon Branch
              </span>
            </h1>
            <h1>
              <span className="design2">PUP LOPEZ CENTRAL STUDENT COUNCIL</span>
            </h1>
          </div>
        </Card>
        <Card
          className="m-3 item3"
          style={{
            backgroundColor: "#fff ",
            borderTop: "4px solid #fff",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            padding: "20px",
          }}
          data-aos="fade-up"
        >
          <Grid container spacing={3}>
            {" "}
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {President.map((president, name) => {
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
                        image={president.EventPic}
                        alt={president.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>President</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{president.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {president.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>
          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {VicePresident.map((vice_president, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick2}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded2}
                      aria-expanded={expanded2}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded2} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={vice_president.EventPic}
                        alt={vice_president.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Vice President</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{vice_president.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {vice_president.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Secretary.map((salas, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick3}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded3}
                      aria-expanded={expanded3}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded3} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={salas.EventPic}
                        alt={salas.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Secretary</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{salas.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {salas.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Treasurer.map((Tre, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick4}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded4}
                      aria-expanded={expanded4}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded4} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Tre.EventPic}
                        alt={Tre.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Treasurer</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Tre.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Tre.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Auditor.map((Aud, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick5}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded5}
                      aria-expanded={expanded5}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded5} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Aud.EventPic}
                        alt={Aud.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Auditor</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Aud.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Aud.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Councilor1.map((Cou1, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick6}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded6}
                      aria-expanded={expanded6}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded6} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Cou1.EventPic}
                        alt={Cou1.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Councilor</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Cou1.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Cou1.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Councilor2.map((Cou2, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick7}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded7}
                      aria-expanded={expanded7}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded7} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Cou2.EventPic}
                        alt={Cou2.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Councilor</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Cou2.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Cou2.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Councilor3.map((Cou3, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick8}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded8}
                      aria-expanded={expanded8}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded8} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Cou3.EventPic}
                        alt={Cou3.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Councilor</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Cou3.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Cou3.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Councilor4.map((Cou4, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick9}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded9}
                      aria-expanded={expanded9}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded9} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Cou4.EventPic}
                        alt={Cou4.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Councilor</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Cou4.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Cou4.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Councilor5.map((Cou5, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick10}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded10}
                      aria-expanded={expanded10}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded10} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Cou5.EventPic}
                        alt={Cou5.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Councilor</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Cou5.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Cou5.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Councilor6.map((Cou6, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick11}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded11}
                      aria-expanded={expanded11}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded11} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Cou6.EventPic}
                        alt={Cou6.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Councilor</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Cou6.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Cou6.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <br />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              {Councilor7.map((Cou7, name) => {
                return (
                  <CardActionArea
                    className="mb-4"
                    key={name}
                    onClick={handleExpandClick12}
                    style={{
                      color: "#4C0001",
                      backgroundColor: "#4C0001",
                      borderTop: "4px solid #4C0001",
                      boxShadow:
                        "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                    }}
                  >
                    <ExpandMore
                      expand={expanded12}
                      aria-expanded={expanded12}
                      aria-label="show more"
                      style={{ color: "#fff" }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded12} timeout="auto" unmountOnExit>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={Cou7.EventPic}
                        alt={Cou7.name}
                      />
                    </Collapse>
                    <CardContent style={{ backgroundColor: "#f4f6f9" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <strong>Councilor</strong>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3 style={{ color: "#000" }}>{Cou7.name}</h3>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#4C0001" }}>
                          {Cou7.Description}
                        </strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                );
              })}
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Card>
        <Card
          className="m-3 item2"
          style={{
            backgroundColor: "#fff ",
            borderTop: "4px solid #4C0001",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
          }}
          data-aos="fade-up"
        >
          <div className="container header">
            <div className="header-left" data-aos="fade-up">
              <h1>
                <span className="design">Student councils</span>
              </h1>
              <h2 className="font1">
                <span>should be the every day thing for those</span>
                <span> who are the members of this council</span>
              </h2>
              <p className="u-text-small">
                <b className="font1">
                  Student council speaks a lot more about itself rather than
                  just being a group of people, it show cases its unity,
                  cooperation, coordination and strengths to the world
                </b>
              </p>
            </div>
          </div>
        </Card>

        <Card
          className="m-3 item3"
          style={{
            backgroundColor: "#fff",
            borderTop: "4px solid #4C0001",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
          }}
          data-aos="fade-up"
        >
          <Card.Body>
            <Card.Title className="title" data-aos="fade-up">
              <BsFillBookmarkStarFill color="#ff0" size={50} className="sty" />
              <h2>Polytechnic University of the Philippines</h2>
              <p className="u-text-small"></p>
            </Card.Title>
            <Card.Text className="features-content">
              <Card.Text className="features-left" data-aos="fade-up">
                <Carousel variant="dark" id="Caro">
                  <Carousel.Item>
                    <img className="d-block" src={First} alt="First slide" />
                    <Carousel.Caption>
                      <h5
                        class="p"
                        style={{
                          color: "#4C0001",
                        }}
                      >
                        PUP LOPEZ BRANCH
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block" src={Second} alt="Second slide" />
                    <Carousel.Caption>
                      <h5
                        class="p"
                        style={{
                          color: "#4C0001",
                        }}
                      >
                        PUP LOPEZ BRANCH
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block" src={Third} alt="Third slide" />
                    <Carousel.Caption>
                      <h5
                        class="p"
                        style={{
                          color: "#4C0001",
                        }}
                      >
                        PUP LOPEZ BRANCH
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Text>
              <Card.Text className="features-right" data-aos="fade-up">
                {FeatureList.map((feature) => (
                  <Feature
                    key={feature.id}
                    icon={feature.icon}
                    heading={feature.heading}
                    text={feature.text}
                  />
                ))}
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="m-3 item4"
          style={{
            backgroundColor: "#fff",
            borderTop: "4px solid #4C0001",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            height: "175px",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "30px",
          }}
          data-aos="fade-up"
        >
          <h2 className="header-left font1" data-aos="fade-up">
            <b style={{ color: "#4C0001" }}>STUDENT COUNCILS</b> SHOULD BE THE
            EVERY DAY THING FOR THOSE WHO ARE THE MEMBERS OF THIS COUNCIL
          </h2>
        </Card>

        <Card
          className="m-3 item5"
          style={{
            backgroundColor: "#fff",
            borderTop: "4px solid #4C0001",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
          }}
          data-aos="fade-up"
        >
          <Card.Body className="cent">
            <img class="logoz" data-aos="fade-up" src={logo} alt="photos" />
            <h3 data-aos="fade-up">
              <b class="p">Polytechnic University of the Philippines</b>
            </h3>
            <form onSubmit={sendEmail} data-aos="fade-up">
              <>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="col-10 form-group mx-auto mb-2"
                >
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    style={{ backgroundColor: "#f4f6f9" }}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Course"
                  className="col-10 form-group mx-auto mb-2 "
                >
                  <Form.Control
                    type="text"
                    placeholder="course"
                    style={{ backgroundColor: "#f4f6f9" }}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email Address"
                  className="col-10 form-group mx-auto mb-2 "
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{ backgroundColor: "#f4f6f9" }}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Your message (Suggestion)"
                  className="col-10 form-group mx-auto mb-2 "
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "200px", backgroundColor: "#f4f6f9" }}
                  />
                </FloatingLabel>
                <div className="col-10 pt-3 mx-auto">
                  <input
                    class="in"
                    type="submit"
                    className="btn btn-info"
                    value="Send Message"
                  ></input>
                </div>
              </>
            </form>
          </Card.Body>
          <Card
            className="footer"
            style={{
              borderTop: "4px solid #4C0001",
              boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <div className="footer-box">
              <b>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</b>
              <p className="u-text-small">&copy; Copyright 2021.</p>
            </div>
          </Card>
        </Card>
      </div>
    </>
  );
};

export default Header;

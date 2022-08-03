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
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import InfoIcon from "@mui/icons-material/Info";
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



const History = () => {
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
                <ListItemButton component="a" href="#">
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
              <h3 className="pup">PUP LOPEZ BRANCH HISTORY</h3>
            </Typography>
            <br />
            <Typography paragraph>
              PUP Lopez Branch was established in February 13, 1979 during the
              Presidency of Dr. Pablo T. Mateo, Jr. At that time, Philippine
              Normal College (now PNU) and Eulogio Amang Rodriguez Institute of
              Science & Technology (EARIST) were then in consortia with PUP
              Lopez.
            </Typography>
            <br />
            <Typography paragraph>
              PUP Lopez Branch came into existence when Southern Pacific
              College, a private college, owned by the heirs of the late Don
              Gregorio C. Yumul, Sr., donated the site and the school buildings
              with all the facilities therein. There was one concrete
              three-storey with 21 classrooms and another two-storey building
              made of wood, which housed the library, the faculty rooms and
              administrative offices. The site with total land area of 23,724
              square meters is located at Yumul St., Brgy. Del Pilar (now Brgy.
              Burgos), Lopez, Quezon.
            </Typography>
            <br />
            <Typography paragraph>
              For its initial year of operation (1979-1980), PUP Lopez had 44
              full-time and part-time faculty including the high school faculty
              members. It offered (1) Bachelor in Accountancy (BA) (now Bachelor
              of Science in Accountancy), (2) Bachelor in Business Management
              (BBM) (now Bachelor of Science in Business Administration), (3)
              Bachelor in Office Administration (BOA) (now Bachelor of Science
              in Office Administration), (4) Bachelor in Library Arts (BLA), and
              (5) Bachelor in Applied Economics (BAE). The first Director was
              Atty. Juan T. Publico. New enrollees were admitted but the high
              school students of the former SPC were absorbed as initial
              students of PUP Laboratory High School. The high school department
              became the laboratory of the Bachelor in Business Teacher
              Education Students. The Philippine Normal College (PNC), headed by
              Prof. Feliza M. Magondayao, offered Bachelor of Science in
              Elementary Education (BSEEd) while Eulogio Amang Rodriguez
              Institute of Science and Technology (EARIST) headed by Prof. Jose
              Baysa offered short term vocational-technical courses like Coconut
              Technology and Practical Chemistry. A couple of years later,
              EARIST terminated its consortium with PUP Lopez.
            </Typography>
            <br />
            <Typography paragraph>
              BLA and BAE were phased out and a new course, Bachelor in
              Agri-Business Management (BAM) (now Bachelor of Science in
              Agri-Business Management) was offered.
            </Typography>
            <br />
            <Typography paragraph>
              Dr. Nemesio E. Prudente assumed his office as the next President
              in 1987. During his term, he put up a gymnasium where
              socio-cultural as well as sports and Physical Education activities
              were held. This was destroyed by super typhoon “Rosing” in
              November 1995. A new 2-storey concrete building was also built in
              place of the old wooden building that housed the library at the
              second floor and administrative offices at the first floor. It was
              during his time when additional two courses were offered. One was
              Bachelor in Computer Data Processing Management (BCDPM) and
              another, Bachelor in Business Education (now BBTE). The former did
              not last long. It was phased out due to lack of computer machines
              and facilities. The latter existed till the present time.
            </Typography>
            <br />
            <Typography paragraph>
              In 1990, Dr. Prudente offered two new courses; Bachelor of Science
              in Civil Engineering (BSCE) and Bachelor of Science in Electrical
              Engineering (BSEE). During the same year, he and Dr. Samuel M.
              Salvador, then Vice President for Branches, introduced and started
              the operation of Pamantasang Bayan, which offered free
              vocational-technical courses for the out-of-school youth and
              adults alike. This was followed by offering distance education
              course, Master in Educational Management (MEM) through the Open
              University Education Program. The chief architect, the grand
              designer of the Open University System was Dr. Samuel M. Salvador,
              formerly the Officer-In-Charge of the Polytechnic University of
              the Philippines from 2003 to 2004 and Acting President from 2004
              to 2006.
            </Typography>
            <br />
            <Typography paragraph>
              In the same year, an additional lot of 15,919 square meters on the
              other side of the creek was purchased. Here the high school
              building was built which was donated by former Congressman Manolit
              O. Lavides, Senator Raul Roco and former Senator Wigberto E.
              Tañada.
            </Typography>
            <br />
            <Typography paragraph>
              In 1991, Dr. Prudente established the Bondoc Peninsula Mayors
              Scholarship Foundation Inc. through a Memorandum of Agreement
              between him and the Mayors of the Municipalities of the Bondoc
              Peninsula. Dr. Ofelia M. Carague, then Vice President for Academic
              Affairs was a witness in the historic signing of the MOA.
            </Typography>
            <br />
            <Typography paragraph>
              The Pamantasang Bayan vocational-technical course--General
              Secretarial Course--was offered free in Lopez, Gumaca, Calauag,
              Tagkawayan and Guinayangan municipalities. Its operation continued
              until the time of Dr. Zenaida A. Olonan when budgetary constraints
              led to its demise. However, there was still one municipality left,
              which continues its support in its operation--the municipality of
              Lopez under the administration of then Mayor Joel E. Arago and
              lasted until 2006 when Mayor Isaias B. Ubana II supported the
              offering of Office Management Technology (OMT), a one-year
              voch-tech program that replaced the offering of General
              Secretarial Course. The offering of OMT lasted until 2010. In
              1993, PNU transferred to Lopez National Comprehensive High School
              campus at Brgy. Magsaysay, Lopez, Quezon after the MOA between PUP
              and PNU expired.
            </Typography>
            <br />
            <Typography paragraph>
              When Dr. Ofelia M. Carague became President in November, 1998, she
              ordered the construction of a new gymnasium on the same site where
              the gymnasium built by Dr. Prudente was destroyed by typhoon
              Rosing in 1995. The construction of the gymnasium was supervised
              by PUP Special Project Office under its Director Engr. Marivic R.
              Montelayola. It became fully operational in September, 2001.
            </Typography>
            <br />
            <Typography paragraph>
              In 1999, Commission on Higher Education (CHED) ordered the gradual
              phase out of PUP Lopez laboratory high school. The last batch
              graduated on April 6, 2003.
            </Typography>
            <br />
            <Typography paragraph>
              In 2001, Congresswoman Georgilu R. Yumul-Hermida donated a
              concrete 2-storey 12 –classroom building for academic purposes. It
              is where the laboratory rooms for our Civil and Electrical courses
              are being housed.
            </Typography>
            <br />
            <Typography paragraph>
              The initial operation of the Tissue culture Laboratory for BSAM
              students started in 2003. That same year, the Branch took a big
              leap in keeping pace with the trend in Information Technology by
              establishing one computer laboratory equipped with 10 computer
              sets for instructional purposes. Offices also started to adopt the
              computerization system and to be connected to internet and
              websites. In the same year the Branch served as host of the Inter
              Branch Sports Competition.
            </Typography>
            <br />
            <Typography paragraph>
              The year 2004 was marked with a dramatic increase in the number of
              scholarship program coming from local and overseas sponsors and
              organizations. Reforestation project at the Lopez Water Utilities
              Watershed Area was also given attention. More improvements of the
              physical plant were done such as the leveling of oval grounds,
              renovation of the comfort rooms and concreting of the quadrangle.
            </Typography>
            <br />
            <Typography paragraph>
              In 2005, campus beautification effort was further enhanced with
              the launching of cleaning, greening and beautification program.
              Revision of the curriculum for BBA, BBTE, BOA, BSA, BSCE, BSAM and
              BSEE was done in preparation for accreditation. The signing of
              Memorandum of Agreement between the University President and
              Municipal Mayor for the offering of Office Management Technology
              (OMT) under Open University transpired in 2007. An additional
              classroom from the magnanimity of Sen. Jinggoy Estrada was also
              put up to accommodate the ever increasing number of student
              population.
            </Typography>
            <br />
            <Typography paragraph>
              It was in 2010 when the late Quezon Gov. Rafael P. Nantes donated
              a 2-storey building with 10 classrooms to augment the
              ever-increasing student population. Other major developments in
              instruction, extension services, facilities and resource
              generation continue to flourish. Among which are the illumination
              of the corridor along Yumul and Tañada buildings, the riprapping
              of the creek, putting up of kiosks where students can lounge
              during their free time and perimeter fencing are just among the
              many developments undertaken to foster high quality campus
              environment. In that same year, the Bachelor of Science in Hotel
              and Restaurant Management (BSHRM) was offered along with a
              three-year program, Diploma in Office Management Technology
              (DOMT).
            </Typography>
            <br />
            <Typography paragraph>
              In 2011, when the incumbent Director assumed his office by virtue
              of the provisions of Section 4 (g) of Republic Act 8292 and Board
              Resolution No. 539, s. 2007, clothed with Special Order No. 0026
              s. 2011, he immediately outlined policies and guidelines that
              strengthened his mandate for the implementation of policies set by
              higher management. Different committees were formed and
              consultations were done to set the transparency in his term. As
              visionary as he is, he improved the linkage of PUP Lopez with the
              different national and local governmental units and
              non-governmental organizations to seek assistance in improving the
              facilities of the branch. He was able to request a single-storey
              building worth One Million Pesos from Representative Julieta R.
              Cortuna of A Teacher Party-list. This building is now being used
              as laboratory rooms of BSHRM students for food and beverage and
              housekeeping activities. Different equipment and tools were also
              donated to the school to form part of the learning process of
              students in civil, electrical engineering and agri-business
              management. He also made the whole school a wi-fi campus that
              helped a lot of students in their on-line inquiries and
              researches.
            </Typography>
            <br />
            <Typography paragraph>
              In the same year, to address the perennial problem met by
              education graduates of PUP Lopez, Bachelor in Secondary Education
              (BSEd) major in mathematics was offered replacing BBTE. Likewise,
              the Bachelor of Science in Hospitality Management (BSHM) and the
              Diploma in Accounting Management Technology (DAMT) were also
              offered.
            </Typography>
            <br />
            <Typography paragraph>
              To help defray the expenses of the branch, he invited some
              business enthusiasts to put up a concessionaire building and do
              business inside campus. The monthly rentals are being augmented to
              finance the various projects for the continuing structural
              development of the Branch. Before the end of 2012, PUP Management
              blessed him with Php5,000,000.00 courtesy of Hon. Isaias B. Ubana
              II, PhD, who then sat as chairman of the PUP Board of Regents
              Finance Committee. The said amount was used in the partial
              rehabilitation of the PUP Lopez Gymnasium.
            </Typography>
            <br />
            <Typography paragraph>
              In June 2013, new courses were offered based from the needs of the
              community and industry. These are Bachelor in Public
              Administration (BPA) and another three-year program, Diploma in
              Electrical Engineering Technology (DEET) and Diploma in
              Information Communication Technology (DICT).
            </Typography>
            <br />
            <Typography paragraph>
              In just a short span of time, through the support given by PUP
              Officials and some public servants, he turned PUP Lopez into a
              competitive school in the community by offering additional
              academic programs and services suited to the needs of the society
              and improving basic facilities relevant to the study of the
              students. On November 2010, PUP Lopez made a significant
              historical event when it produced a topnotcher in Civil
              Engineering Licensure Examination in the person of Engr. Arvin B.
              Venzuela, who is now working at Maynilad, a water utility company
              based in Manila. And on 2013, PUP Lopez marked another milestone
              in the history of Board Examinations in Electrical and Civil
              Engineering when Engr. Mark Harry T. Reyes landed 9th Place and
              Engr. Kenneth B. Enopeques landed 5th Place respectively.
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
export default History;

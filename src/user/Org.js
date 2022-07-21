import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "firebase/compat/firestore";
import { useUserAuth } from "../context/UserAuthContext";
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
import HomeIcon from "@mui/icons-material/Home";
import Ta from "./organization/Table";
import Swal from "sweetalert2";
import ABS from "./organization/Abs";
import HMS from "./organization/Hms";
import IIEE from "./organization/Iiee";
import IBITS from "./organization/Ibits";
import JME from "./organization/Jme";
import JPEA from "./organization/Jpea";
import PADS from "./organization/Pads";
import PASOA from "./organization/Pasoa";
import PICE from "./organization/Pice";
import SYNERTECH from "./organization/Synertech";
import UAPSA from "./organization/Uapsa";
import YES from "./organization/Yes";

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

export default function Org() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
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
                title="Announcement"
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
                title="Event"
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
                <ListItemButton component="a" href="/Org">
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
          <Tabs
            defaultActiveKey="All Student"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="All Student" title="All Student">
              <Ta />
            </Tab>
            <Tab eventKey="ABS" title="ABS">
              <ABS />
            </Tab>
            <Tab eventKey="HMS" title="HMS">
              <HMS />
            </Tab>
            <Tab eventKey="IIEE" title="IIEE">
              <IIEE />
            </Tab>
            <Tab eventKey="IBITS" title="IBITS">
              <IBITS />
            </Tab>
            <Tab eventKey="JME" title="JME">
              <JME />
            </Tab>
            <Tab eventKey="JPEA" title="JPEA">
              <JPEA />
            </Tab>
            <Tab eventKey="PADS" title="PADS">
              <PADS />
            </Tab>
            <Tab eventKey="PASOA" title="PASOA">
              <PASOA />
            </Tab>
            <Tab eventKey="PICE" title="PICE">
              <PICE />
            </Tab>
            <Tab eventKey="SYNERTECH" title="SYNERTECH">
              <SYNERTECH />
            </Tab>
            <Tab eventKey="UAPSA" title="UAPSA">
              <UAPSA />
            </Tab>
            <Tab eventKey="YES" title="YES">
              <YES />
            </Tab>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

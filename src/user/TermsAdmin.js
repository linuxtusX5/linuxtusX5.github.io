import * as React from "react";
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
import logo2 from "../Photos/council_Logo-modified.png";
import { Card } from "react-bootstrap";
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

export default function TermsAdmin() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
        <DrawerHeader />{" "}
        <Card
          className="m-3 p-3 drawer2"
          style={{
            borderTop: "4px solid #800",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            color: "#800",
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
            borderTop: "4px solid #800",
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
          <Typography paragraph style={{ color: "#800" }}>
            By using our online services, you are agreeing to these terms.
            Please read carefully.
          </Typography>
        </Card>
        <Card
          className="m-3 drawer2"
          style={{
            backgroundColor: "#fff ",
            borderTop: "4px solid #800",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
          }}
        >
          <Typography paragraph>
            <h3 className="pup">Acceptance of Terms</h3>
            The online services that PUP provides to you are subject to the
            following Terms of Use ("Terms"). This is an agreement between you
            (either an individual or a single entity) and the University. By
            visiting, browsing and/or interacting with our online services, you
            agree to be bound by this Terms.
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
            borderTop: "4px solid #800",
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
  );
}

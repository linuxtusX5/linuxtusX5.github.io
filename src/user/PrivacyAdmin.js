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

export default function PrivacyAdmin() {
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
            backgroundColor: "#fff ",
            borderTop: "4px solid #800",
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
            This privacy statement only applies to the Services. Other sites or
            apps that has a link from the Services may have a separate privacy
            statement.
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
          <h3 className="pup">Collection of Personal Data</h3>
          <Typography paragraph>
            We also obtain data from third parties. We protect data obtained
            from third parties according to the practices described in this
            statement and any additional restrictions imposed by the source of
            the data. These third-party sources vary over time, but have
            included
          </Typography>
          <Typography paragraph>
            This privacy statement only applies to the Services. Other sites or
            apps that has a link from the Services may have a separate privacy
            statement.
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
                Publicly-available sources such as open government databases or
                other data in the public domain.
              </li>
            </ul>
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

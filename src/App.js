import React from "react";
import "./App.css";
import Home from "./Admin/header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./login/Login";
import Reg from "./login/Register";
import Front from "./login/Front";
import Event from "./Admin/Event_User";
import AddAnnounce from "./user/Add_announcement";
import More from "./Admin/MiniDrawer";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Tab from './user/organization/Table';
import ProtectedRoute from "./ProtectedRoute";
import AddEvent from "./user/Add_event";
import Admin from "./user/Drawer";
import LoginAdmin from "./user/LoginAdmin";
import Handbook from "./Admin/More/Handbook";
import Privacy from "./Admin/More/Privacy";
import Terms from "./Admin/More/Terms";
import History from "./Admin/More/History";
import Forgot from "./login/ForgotPass";
import "firebase/compat/firestore";
import "firebase/compat/firestore";
import Org from "./user/Org";
import Abs from "./user/organization/Abs"
import Hms from "./user/organization/Hms";
import Iiee from "./user/organization/Iiee";
import Ibits from "./user/organization/Ibits";
import Jme from "./user/organization/Jme";
import Jpea from "./user/organization/Jpea";
import Pads from "./user/organization/Pads";
import Pasoa from "./user/organization/Pasoa";
import Pice from "./user/organization/Pice";
import Synertech from "./user/organization/Synertech";
import Uapsa from "./user/organization/Uapsa";
import Yes from "./user/organization/Yes";
import PrivacyAdmin from "./user/PrivacyAdmin";
import TermsAdmin from "./user/TermsAdmin";

const App = () => {
 
  return (
    <>
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route
              exact
              path="TermsAdmin"
              element={
                  <TermsAdmin />
              }
            />
            <Route
              exact
              path="PrivacyAdmin"
              element={
                  <PrivacyAdmin />
              }
            />
            <Route
              exact
              path="Yes"
              element={
                  <Yes />
              }
            />
            <Route
              exact
              path="Uapsa"
              element={
                  <Uapsa />
              }
            />
            <Route
              exact
              path="Synertech"
              element={
                  <Synertech />
              }
            />
            <Route
              exact
              path="Pice"
              element={
                  <Pice />
              }
            />
            <Route
              exact
              path="Pasoa"
              element={
                  <Pasoa />
              }
            />
            <Route
              exact
              path="Pads"
              element={
                  <Pads />
              }
            />
            <Route
              exact
              path="Jme"
              element={
                  <Jme />
              }
            />
            <Route
              exact
              path="Jpea"
              element={
                  <Jpea />
              }
            />
            <Route
              exact
              path="Ibits"
              element={
                  <Ibits />
              }
            />
            <Route
              exact
              path="Iiee"
              element={
                  <Iiee />
              }
            />
            <Route
              exact
              path="Hms"
              element={
                  <Hms />
              }
            />
            <Route
              exact
              path="Abs"
              element={
                  <Abs />
              }
            />
            <Route
              exact
              path="Org"
              element={
                  <Org />
              }
            />
            <Route
              exact
              path="Forgot"
              element={
                  <Forgot />
              }
            />
            <Route
              exact
              path="History"
              element={
                  <History />
              }
            />
            <Route
              exact
              path="Privacy"
              element={
                <ProtectedRoute>
                  <Privacy />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Terms"
              element={
                <ProtectedRoute>
                  <Terms />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Handbook"
              element={
                <ProtectedRoute>
                  <Handbook />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Admin"
              element={
                  <Admin />
              }
            />
            <Route
              exact
              path="LoginAdmin"
              element={
                  <LoginAdmin />
              }
            />
            <Route
              exact
              path="AddEvent"
              element={
                  <AddEvent />
              }
            />
            <Route
              exact
              path="Tab"
              element={
                  <Tab />
              }
            />
            <Route
              exact
              path="More"
              element={
                <ProtectedRoute>
                  <More />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="AddAnnounce"
              element={
                  <AddAnnounce />
              }
            />
            <Route
              exact
              path="Home"
              element={
                <ProtectedRoute>
                  {" "}
                  <Home />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Event"
              element={
                <ProtectedRoute>
                  <Event />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Reg />} />
            <Route path="/" element={<Front />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </>
  );
};

export default App;

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
                <ProtectedRoute>
                  <TermsAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="PrivacyAdmin"
              element={
                <ProtectedRoute>
                  <PrivacyAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Yes"
              element={
                <ProtectedRoute>
                  <Yes />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Uapsa"
              element={
                <ProtectedRoute>
                  <Uapsa />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Synertech"
              element={
                <ProtectedRoute>
                  <Synertech />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Pice"
              element={
                <ProtectedRoute>
                  <Pice />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Pasoa"
              element={
                <ProtectedRoute>
                  <Pasoa />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Pads"
              element={
                <ProtectedRoute>
                  <Pads />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Jme"
              element={
                <ProtectedRoute>
                  <Jme />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Jpea"
              element={
                <ProtectedRoute>
                  <Jpea />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Ibits"
              element={
                <ProtectedRoute>
                  <Ibits />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Iiee"
              element={
                <ProtectedRoute>
                  <Iiee />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Hms"
              element={
                <ProtectedRoute>
                  <Hms />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Abs"
              element={
                <ProtectedRoute>
                  <Abs />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Org"
              element={
                <ProtectedRoute>
                  <Org />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Forgot"
              element={
                <ProtectedRoute>
                  <Forgot />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="History"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
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
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
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
                <ProtectedRoute>
                  <AddEvent />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="Tab"
              element={
                <ProtectedRoute>
                  <Tab />
                </ProtectedRoute>
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
                <ProtectedRoute>
                  <AddAnnounce />
                </ProtectedRoute>
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

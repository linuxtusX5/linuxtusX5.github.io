import React from 'react';
import './App.css';
import Event from './Event';
import Navs from './header/Header';
import Organization from './Organization';
import ABS from './organization/ABS';
import HMS from './organization/HMS';
import IIEE from './organization/IIEE';
import IBITS from './organization/IBITS';
import JME from './organization/JME';
import JPEA  from './organization/JPEA';
import PADS from './organization/PADS';
import PASOA from './organization/PASOA';
import PICE from './organization/PICE';
import SYNERTECH from './organization/SYNERTECH';
import UAPSA from './organization/UAPSA';
import YES from './organization/YES';

import { Navbar, Container, Nav, Badge, Dropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './Photos/PUPLogo.png';
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Login from './features/login/Login';
import Signup from './features/login/Signup';

const App = () => {

  return (
  <>     
  
  <Router>
  <div className='con'>
  <Navbar collapseOnSelect expand="lg" className='navbar-custom sticky-top' variant='dark'>
  <Container>
  <h1>
  <Navbar.Brand href="#home"><img width='35px' height='35px' src={logo} alt='Logo'/> <b>PUP</b></Navbar.Brand>
  </h1>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse className="justify-content-end">
    <Nav>  
      <Nav.Link eventKey='Login' as={Link} to={"/Navs"}><i className="fas fa-home"> Home</i></Nav.Link>
      <Nav.Link eventKey='Login' as={Link} to={"/Event"}><i className="fas fa-calendar-week"> Event</i></Nav.Link>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          <i className="fas fa-sitemap"> Organization</i>
        </Dropdown.Toggle><Badge bg="danger">Lima</Badge>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={"/ABS"}><b>ABS</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/HMS"}><b>HMS</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/IIEE"}><b>IIEE</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/IBITS"}><b>IBITS</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/JME"}><b>JME</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/JPEA"}><b>JPEA</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/PADS"}><b>PADS</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/PASOA"}><b>PASOA</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/PICE"}><b>PICE</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/SYNERTECH"}><b>SYNERTECH</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/UAPSA"}><b>UAPSA</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/YES"}><b>YES</b></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div>
    <UserAuthContextProvider>
  <Routes>
              <Route
                path="Event"
                element={
                  <ProtectedRoute>
                    <Event />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

          <Route exact path="Navs" element={<ProtectedRoute> <Navs /> </ProtectedRoute>}/>
          <Route path="Organization" element={<Organization />}/>
          <Route path="ABS" element={<ProtectedRoute><ABS /></ProtectedRoute>}/>
          <Route path="HMS" element={<ProtectedRoute><HMS /></ProtectedRoute>}/>
          <Route path="IIEE" element={<ProtectedRoute><IIEE /></ProtectedRoute>}/>
          <Route path="IBITS" element={<ProtectedRoute><IBITS /></ProtectedRoute>}/>
          <Route path="JME" element={<ProtectedRoute><JME /></ProtectedRoute>}/>
          <Route path="JPEA" element={<ProtectedRoute><JPEA /></ProtectedRoute>}/>
          <Route path="PADS" element={<ProtectedRoute><PADS /></ProtectedRoute>}/>
          <Route path="PASOA" element={<ProtectedRoute><PASOA /></ProtectedRoute>}/>
          <Route path="PICE" element={<ProtectedRoute><PICE /></ProtectedRoute>}/>
          <Route path="SYNERTECH" element={<ProtectedRoute><SYNERTECH /></ProtectedRoute>}/>
          <Route path="UAPSA" element={<ProtectedRoute><UAPSA /></ProtectedRoute>}/>
          <Route path="YES" element={<ProtectedRoute><YES /></ProtectedRoute>}/>
  </Routes>
 </UserAuthContextProvider>
</div>
</div>
</Router>
</> 
  );
}

export default App;

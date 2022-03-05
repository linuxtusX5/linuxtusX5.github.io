import React,{useState, useEffect} from 'react';
import './App.css';
import User from './Event_User';
import Event from './Event';
import Navs from './header/Header';
import ABS from './organization/ABS';
import HMS from './organization/HMS';
import IIEE from './organization/IIEE';
import JME from './organization/JME';
import JPEA  from './organization/JPEA';
import PADS from './organization/PADS';
import PASOA from './organization/PASOA';
import PICE from './organization/PICE';
import SYNERTECH from './organization/SYNERTECH';
import UAPSA from './organization/UAPSA';
import YES from './organization/YES';
import ADMIN from './features/login/Admin';
import Notice from './Announcement';
import IBITSTABS from './organization/IBITSTABS';

import { Navbar, Container, Nav, Badge, Dropdown, Button, Modal} from 'react-bootstrap';
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
import LogUser from './features/login/LoginUser';
import NoticeAdmin from './features/login/Announce_admin';

import {collection, onSnapshot, query, orderBy} from "firebase/firestore";
import apps from '../src/firebase/index';
import 'firebase/compat/firestore';
import 'firebase/compat/firestore';

const db = apps.firestore();


const App = () => {

const [setInput] = useState("")
const [modalShow, setModalShow] = React.useState(false);
  
    const [lists, setLists] = useState([])
    useEffect(()=> {
    const q = query(collection(db, "Announcement"),  orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLists(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      setInput("")
    });
      return () => unsubscribe()
 }, [setInput]) 
  

 function MyVerticallyCenteredModal(props) {
  return (
          
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b style={{color: '#800'}}>Announcement</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{
          borderTop: '1px solid #800',
          borderBottom: '1px solid #800',
          overflow: 'scroll',
          maxHeight: '400px',
          
        }}>
        <div className="w-full ">  
            {lists.map(list => (
              <div className="border-b mt-4 w-full h-16 flex items-center justify-between" key={list.id}>
                <Badge bg="success"><i className="fas fa-bullhorn"/></Badge> <b  style={{marginLeft: '25px'}}>{list.name}</b>
          </div>
            ))}

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal> 
  );
}

  return (
  <>     
  
  <Router>
  <div className='con'>
  <Navbar collapseOnSelect expand="lg" className='navbar-custom sticky-top' variant='dark'>
  <Container>
  <h1 class="IMG">
  <Navbar.Brand href="#home"><img width='35px' height='35px' src={logo} alt='Logo'/><b style={{color:'#ff0', marginLeft:'10px', fontWeight:'bold'}}> PUP LOPEZ BRANCH</b></Navbar.Brand>
  </h1>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse className="justify-content-end">
    <Nav>  
      <Nav.Link eventKey='Navs' as={Link} to={"/Navs"}><i className="fas fa-home"> Home</i></Nav.Link>
      <Nav.Link eventKey='User' as={Link} to={"/User"}><i className="fas fa-calendar-week"> Event</i></Nav.Link>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          <i className="fas fa-sitemap"> Organization</i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>ABS</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>HMS</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>IIEE</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>IBITS</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>JME</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>JPEA</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>PADS</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>PASOA</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>PICE</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>SYNERTECH</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>UAPSA</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/ADMIN"}><b>YES</b></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown2">
        <i className="fa fa-wrench"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item as={Link} to={"/LogUser"}><b>Event</b></Dropdown.Item>
          <Dropdown.Item as={Link} to={"/NoticeAdmin"}><b>Announcement</b></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      <Button variant="warning" className='bullhorn' onClick={() => setModalShow(true)}>
      <i className="fas fa-bullhorn"/>
      </Button><Badge bg="danger" class='ba'>{lists.length} New</Badge>
    </Nav>
  </Navbar.Collapse>

  </Container>
</Navbar>
<div>
    <UserAuthContextProvider>
  <Routes>
          <Route path="User" element={ <ProtectedRoute> <User /> </ProtectedRoute> } />
          <Route path="Event" element={  <ProtectedRoute><Event /></ProtectedRoute> } />
          <Route path="/LogUser" element={<ProtectedRoute><LogUser /></ProtectedRoute>} />
          <Route path="/Notice" element={<ProtectedRoute><Notice /></ProtectedRoute>} />

          <Route path="/NoticeAdmin" element={<ProtectedRoute><NoticeAdmin /></ProtectedRoute>} />

          <Route exact path="Navs" element={<ProtectedRoute> <Navs /> </ProtectedRoute>}/>
  
          <Route path="/" element={<Login />} />
          <Route path="ADMIN" element={<ProtectedRoute><ADMIN /></ProtectedRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="ABS" element={<ProtectedRoute><ABS /></ProtectedRoute>}/>
          <Route path="HMS" element={<ProtectedRoute><HMS /></ProtectedRoute>}/>
          <Route path="IIEE" element={<ProtectedRoute><IIEE /></ProtectedRoute>}/>
          <Route path="IBITS" element={<ProtectedRoute><IBITSTABS /></ProtectedRoute>}/>
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
  <>
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
</> 
  );
}

export default App;

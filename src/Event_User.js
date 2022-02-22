import React, {useEffect} from 'react';
import 'firebase/compat/firestore';
import './Event.css';
import "aos/dist/aos.css";
import AOS from "aos";
import apps from './firebase/index';


const db = apps.firestore();

function Event_User() {
  
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);


  return (
    <>
    
    <section id="header2">
      <div className="container header2">
        <div className="header-left" data-aos="fade-right">
          <h1><span className="design2">Polytechnic University of the Philippines</span></h1>
            <h2 style={{color: "#fff"}}>
            <span>should be the every day thing for those</span>
            <span> who are the members of this council</span>
            </h2>
          <p className="u-text-small" style={{color: "#fff"}}><b>There are some people who live in a dream world, and there are some who face reality; 
          and then there are those who turn one into the other.</b>
          </p>
        </div>
        
      </div>
      <ul className='con2'>
        {users.map((user, name) => {
          return (
            <div key={name} className='con3'>
              <span className='sp'>{user.name}</span><br/>
              <img className='im2' src={user.EventPic} alt={user.name} />   
            </div>
          );
        })}
      </ul>
      
      <div className="footer2">
          <div className="footer-box"><b>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</b>
          <p className="u-text-small">&copy; Copyright 2021.</p>
        </div>
      </div>
      </section>
    </>
  );
}

export default Event_User;





import React, {useEffect, useState} from 'react';
import {Button, Badge} from 'react-bootstrap';
import {doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc} from "firebase/firestore";
import apps from '../src/firebase/index';
import 'firebase/compat/firestore';
import 'firebase/compat/firestore';
import './Announce.css';

import AOS from "aos";
import "aos/dist/aos.css";
import Pup from "../src/Photos/Front_view.jpg";

const db = apps.firestore();


const Announcement = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);



const [input, setInput] = useState("")

    const handleClick = (e) => {
    e.preventDefault()

    if(input) {
      addDoc(collection(db, "Announcement"), {
        name: input,
        timestamp: new Date()
      }).catch(err => console.error(err))
    }//end of If statement  
  }
  
    const [lists, setLists] = useState([])
    useEffect(()=> {
    const q = query(collection(db, "Announcement"),  orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLists(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      setInput("")
    });
      return () => unsubscribe()
 }, []) 
  
 async function deletedocs(id) {
      let request = await deleteDoc(doc(db, "Announcement", id));
      console.log(request)
  }


  return (
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
         <h1 style={{color: '#ff0', marginLeft: '40px', fontWeight: 'bold',fontSize: 'revert', marginBottom: '-50px'}}>Announcement</h1>

       <input className='announce'
              type="text" name="Announce" 
              placeholder="Announcement"
              value={input}
              onChange={e => setInput(e.target.value)}
              />
      <Button className='announce' variant="primary" onClick={handleClick}>Done</Button>
      <div className="featuresPic" data-aos="fade-left">
            <img src={Pup} alt="Pup" />
          </div>
      <div className='box5'>
          <div className="w-full ">  
              {lists.map(list => (
                <div className="border-b mt-4 w-full h-16 flex items-center justify-between" key={list.id}>
                  <Badge bg="success"><i className="fas fa-bullhorn"/></Badge> <b  style={{marginLeft: '25px'}}>{list.name}</b>
                  <i class="fa fa-times-circle" aria-hidden="true"   style={{color: '#800', marginLeft: '30px'}} onClick={() => deletedocs(list.id)}></i>
            </div>
              ))}

          </div>
      </div>
    </div>
    </section>
  );
}

export default Announcement;
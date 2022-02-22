import React, {useEffect, useState} from 'react';
import {Button, Badge} from 'react-bootstrap';
import {doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc} from "firebase/firestore";
import apps from '../src/firebase/index';
import 'firebase/compat/firestore';
import 'firebase/compat/firestore';

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
    <div style={{
      backgroundColor: '#800',
         paddingTop: '30px',
         paddingBottom: '20px'
    }}>
          <div className="header-left" data-aos="fade-right" style={{marginLeft: '120px'}}>
          <h1><span className="design" style={{fontSize: '6rem'}} >Student councils</span></h1>
            <h2 style={{color: "#fff"}}>
            <span>should be the every day thing for those</span>
            <span> who are the members of this council</span>
            </h2>
          <p className="u-text-small" style={{color: "#fff"}}><b>
            Student council speaks a lot more about itself rather than just being a group of people, 
            it show cases its unity, cooperation, coordination and strengths to the world</b>
          </p>
        </div>
         <h1 style={{color: '#ff0', marginLeft: '120px', fontWeight: 'bold'}}>Announcement</h1>

       <input style={{
        width: '500px',
        height: '10px',
        marginLeft: '20px',
       }}
              type="text" name="Announce" 
              placeholder="Announcement"
              className="w-2/3 h-10 p-3 outline-none border border-gray-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              />
      <Button style={{
         marginLeft:'20px',
        height: '35px',
        }} variant="primary" onClick={handleClick}>Done</Button>
      <div className="features-left" data-aos="fade-left" style={{
        marginLeft: '650px',
        backgroundColor: '#800',
        marginTop: '-100px',
        padding: '5px',
      }}>
            <img src={Pup} alt="Pup" />
          </div>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '600px',
          padding: '50px',
          border: '2px solid #800',
          overflow: 'scroll',
          maxHeight: '300px',
          marginTop: '-300px',
          scrollBehavior: 'smooth',
          backgroundColor: '#fff',
          borderRadius: '20px',
          marginLeft: '20px',
          marginBottom: '30px'
        }}>
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
  );
}

export default Announcement;
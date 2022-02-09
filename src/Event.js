import React, { useEffect } from 'react';
import apps from './firebase/index';
import 'firebase/compat/firestore';
import './Event.css';
import {doc, deleteDoc} from 'firebase/firestore';


const db = apps.firestore();

function Event() {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);


  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = apps.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection("users").doc(username).set({
      name: username,
      EventPic: fileUrl,
    });
  };

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

  const deletedocs = async (user) => {
    alert("the Page is automatically refresh...")
    await deleteDoc(doc(db, "users", user.name))
    window.location.reload(false);
  };

  const done = async (users) => {
    alert("the Page is automatically refresh...")
    window.location.reload(true);
  };

  return (
    <>
      <form onSubmit={onSubmit} className='con2'>
        <input className='input1' type="file" onChange={onFileChange} />
        <input className='input2' type="text" name="username" placeholder="NAME  ex( PUP-event sept-16-2033 )" />
        <button className='b2E'>Upload</button>
        <button className='b2E1' onClick={() => done(users)}>Done</button>
      </form>
      <ul className='con2'>
        {users.map((user, name) => {
          return (
            <div key={name} className='con3'>
              <span className='sp'>{user.name}</span><br/>
              <button className='b3D' onClick={() => deletedocs(user)}> Delete</button>
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
    </>
  );
}

export default Event;





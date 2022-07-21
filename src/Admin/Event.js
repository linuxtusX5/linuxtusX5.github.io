import React, { useEffect, useState } from "react";
import apps from "../firebase/index";
import "firebase/compat/firestore";
import "./Event.css";
import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import "aos/dist/aos.css";
import AOS from "aos";

const db = apps.firestore();

function Event() {
  const [fileUrl, setFileUrl] = useState(null);
  const [users, setUsers] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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
    await db.collection("Event").doc(username).set({
      name: username,
      EventPic: fileUrl,
      Description: desc,
      timestamp: new Date(),
    });
  };

  useEffect(() => {
    const q = query(collection(db, "Event"), orderBy("timestamp", "desc"));

    AOS.init({
      duration: 1000,
    });

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const deletedocs = async (user) => {
    alert("the Page is automatically refresh...");
    await deleteDoc(doc(db, "Event", user.name));
    window.location.reload(false);
  };

  const done = async (users) => {
    alert("the Page is automatically refresh...");
    window.location.reload(true);
  };

  return (
    <>
      <section id="header2">
        <div className="container header2">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span className="design2">
                Polytechnic University of the Philippines
              </span>
            </h1>
            <h2 style={{ color: "#fff" }}>
              <span>should be the every day thing for those</span>
              <span> who are the members of this council</span>
            </h2>
            <p className="u-text-small" style={{ color: "#fff" }}>
              <b>
                There are some people who live in a dream world, and there are
                some who face reality; and then there are those who turn one
                into the other.
              </b>
            </p>
          </div>
          <form onSubmit={onSubmit} className="con2">
            <input className="input1" type="file" onChange={onFileChange} />
            <input
              className="input2"
              type="text"
              name="username"
              placeholder="NAME  ex( PUP-event)"
            />
            <input
              className="announce0"
              type="text"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className="b2E">Upload</button>
            <button className="b2E1" onClick={() => done(users)}>
              Done
            </button>
            <h1>
              <span className="design">PUP Lopez Branch</span>
            </h1>
          </form>
        </div>
        <ul className="con2">
          {users.map((user, name) => {
            return (
              <div key={name} className="con3">
                <span className="sp">{user.name}</span>
                <span className="sp">{user.Description}</span>
                <br />
                <img className="im2" src={user.EventPic} alt={user.name} />
                <i className="fa fa-trash" onClick={() => deletedocs(user)}>
                  {" "}
                  Delete
                </i>
              </div>
            );
          })}
        </ul>

        <div className="footer2">
          <div className="footer-box">
            <b>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</b>
            <p className="u-text-small">&copy; Copyright 2021.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;

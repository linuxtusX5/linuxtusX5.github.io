import React, { useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  getDoc,
  namedQuery,
  addDoc,
} from "firebase/firestore";
import {db} from "../firebase/index";
import "firebase/compat/firestore";
import "firebase/compat/firestore";
import "./Announce.css";

import AOS from "aos";
import "aos/dist/aos.css";


const Announcement = () => {

  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(null);


  const [users, setUsers] = React.useState([]);
  const [lists, setLists] = useState([]);
  const [single, setSingleDoc] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();

    const name = e.target.Announce.value;
       if (!name) {
         return;
       }
    await db.collection("Announcement").doc(name).set({
      Name: input,
      Description: desc,
      Date: date,
      timestamp: new Date(),
    });
   

    //const docRef = doc(db, "Announcement", "sam22");
    //const docSnap = await getDoc(docRef);
    //
    //if(docSnap.exists){
    //  console.log(docSnap.data().Description)
    //}
  }

  useEffect(() => {
  const q = query(collection(db, "Announcement"), orderBy("timestamp", "desc"));

 AOS.init({
   duration: 1000,
 });

       const unsubscribe = onSnapshot(q, (snapshot) => {
         setLists(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       });
       return () => unsubscribe();
  }, []);

  async function deletedocs(name) {
    let request = await deleteDoc(doc(db, "Announcement", name));
    console.log(request);
  }

  const fetchSingle = (e) => {
    e.preventDefault();
    db.collection("Announcement")
      .doc("Ginoo at Binibining PUP Lopez 2022")
      .get()
      .then((snapshot) => {
        if (snapshot) {
          setSingleDoc(snapshot.data());
        }
      });
    console.log(single)
  }

  return (
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
              some who face reality; and then there are those who turn one into
              the other.
            </b>
          </p>
        </div>
        <h1
          style={{
            color: "#ff0",
            marginLeft: "40px",
            fontWeight: "bold",
            fontSize: "revert",
            marginBottom: "180px",
          }}
        >
          Announcement
        </h1>
        <form onSubmit={handleClick}>
          <div className="annIn">
            <input
              className="announce0"
              type="text"
              name="Announce"
              placeholder="Announcement"
              onChange={(e) => setInput(e.target.value)}
            />
            <input
              className="announce0"
              type="text"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              className="announce0"
              type="text"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
            />
            <Button className="announce0" variant="primary" type="Submit">
              Done
            </Button>
          </div>
          <button onClick={fetchSingle}>Search</button>
        </form>
        <div className="box5">
          <div className="w-full ">
            {
               lists.map((list) => (
              <div
                className="border-b mt-4 w-full h-16 flex items-center justify-between"
                key={list.id}
              >
                <Badge bg="success">
                  <i className="fas fa-bullhorn" />
                </Badge>{" "}
                <b style={{ marginLeft: "25px" }}>{list.Description}</b>
                <i
                  class="fa fa-times-circle"
                  aria-hidden="true"
                  style={{ color: "#800", marginLeft: "30px" }}
                  onClick={() => deletedocs(list.id)}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;

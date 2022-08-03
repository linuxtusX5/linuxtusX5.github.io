import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";
import "firebase/compat/firestore";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: "Group A", y: 900 },
  { x: "Group B", y: 400 },
  { x: "Group C", y: 300 },
];

const Data = () => {
  
  const [Student, setStudent] = useState([]);
  useEffect(() => {
    db.collection("StudentData").onSnapshot((snapshot) => {
      setStudent(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

    
const trim = Student?.map((user) => {
  return {
    StudentID: user?.data.studentId,
    FirstName: user?.data.firstName,
    LastName: user?.data.lastName,
    Email: user?.data.email,
    Organization: user?.data.organization,
    Course: user?.data.course,
    Gender: user?.data.gender,
    Address: user?.data.location,
    id: user?.id,
  };
});
  return (
    <div>
      <VictoryPie
        data={trim}
        colorScale={["blue", "yellow", "red"]}
        radius={50}
      />
    </div>
  );
};

export default Data;

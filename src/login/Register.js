import React, { useState } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal, Alert, Button } from "react-bootstrap";
import "../Admin/Event.css";
import { db } from "../firebase/index";
import "firebase/compat/firestore";
import logo from "../Photos/PUPLogo.png";
import "./Front.css";
import { useUserAuth } from "../context/UserAuthContext";

import Checkbox from "@mui/material/Checkbox";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import PasswordInputField from "./PasswordInputField";
import ConfirmPasswordInputField from "./ConfirmPasswordInputField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MenuItem from "@mui/material/MenuItem";


const Register = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { signUp } = useUserAuth();

  //Password validation
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [org, setorg] = useState("");
  const [gender, setgender] = useState("");
  const [course, setcourse] = useState("");
  const [year, setYear] = useState("");
  const [location, setlocation] = useState("");
  const [email, setEmail] = useState("");
  const [studenti, setStudenti] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [Date2, setDate] = useState("");
  const [error, setError] = useState("");

  const [status, setStatus] = useState("");
  
const DateString = Date2.toString();

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1000,
    });

    setError("");
    try {
      await signUp(email, passwordInput2.confirmPassword);
      console.log("SignUp done");
    } catch (err) {
      setError(err.message);
    }
    //createUserWithEmailAndPassword(auth, data.email, data.password);

    const username = e.target.StudentID.value;

    await db.collection("StudentData").doc(username).set({
      firstName: fname,
      lastName: lname,
      Birth: DateString,
      organization: org,
      gender: gender,
      course: course,
      Year: year,
      location: location,
      email: email,
      Status: status,
      studentId: studenti,
      password: passwordInput2.confirmPassword,
    });
    setShow(true);

    if (org === "IBITS") {
      await db.collection("IBITS").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "ABS") {
      await db.collection("ABS").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "HMS") {
      await db.collection("HMS").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "IIEE") {
      await db.collection("IIEE").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "JME") {
      await db.collection("JME").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "JPIA") {
      await db.collection("JPIA").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "PAdS") {
      await db.collection("PAdS").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "PASOA") {
      await db.collection("PASOA").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "PICE") {
      await db.collection("PICE").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "SYNERTECH") {
      await db.collection("SYNERTECH").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "UAPSA") {
      await db.collection("UAPSA").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "YES") {
      await db.collection("YES").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "BSBIO") {
      await db.collection("BSBIO").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (org === "BSND") {
      await db.collection("BSND").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        Status: status,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    }
    //For years
    if (year === "DICT1") {
      await db.collection("DICT1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DICT2") {
      await db.collection("DICT2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DICT3") {
      await db.collection("DICT3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSIT1") {
      await db.collection("BSIT1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSIT2") {
      await db.collection("BSIT2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSIT3") {
      await db.collection("BSIT3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSIT4") {
      await db.collection("BSIT4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DCETech1") {
      await db.collection("DCETech1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DCETech2") {
      await db.collection("DCETech2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DCETech3") {
      await db.collection("DCETech3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSAME1") {
      await db.collection("BSAME1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSAME2") {
      await db.collection("BSAME2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSAME3") {
      await db.collection("BSAME3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSAME4") {
      await db.collection("BSAME4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSHM1") {
      await db.collection("BSHM1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSHM2") {
      await db.collection("BSHM2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSHM3") {
      await db.collection("BSHM3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSHM4") {
      await db.collection("BSHM4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSEE1") {
      await db.collection("BSEE1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSEE2") {
      await db.collection("BSEE2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSEE3") {
      await db.collection("BSEE3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSEE4") {
      await db.collection("BSEE4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSEE5") {
      await db.collection("BSEE5").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DEET1") {
      await db.collection("DEET1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DEET2") {
      await db.collection("DEET2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DEET3") {
      await db.collection("DEET3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DEET4") {
      await db.collection("DEET4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSBA1") {
      await db.collection("BSBA1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSBA2") {
      await db.collection("BSBA2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSBA3") {
      await db.collection("BSBA3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSBA4") {
      await db.collection("BSBA4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSA1") {
      await db.collection("BSA1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSA2") {
      await db.collection("BSA2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSA3") {
      await db.collection("BSA3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSA4") {
      await db.collection("BSA4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BPA1") {
      await db.collection("BPA1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BPA2") {
      await db.collection("BPA2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BPA3") {
      await db.collection("BPA3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BPA4") {
      await db.collection("BPA4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSOA1") {
      await db.collection("BSOA1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSOA2") {
      await db.collection("BSOA2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSOA3") {
      await db.collection("BSOA3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSOA4") {
      await db.collection("BSOA4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSCE1") {
      await db.collection("BSCE1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSCE2") {
      await db.collection("BSCE2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSCE3") {
      await db.collection("BSCE3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSCE4") {
      await db.collection("BSCE4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DCET1") {
      await db.collection("DCET1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DCET2") {
      await db.collection("DCET2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DCET3") {
      await db.collection("DCET3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DOMT-LOM1") {
      await db.collection("DOMT-LOM1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DOMT-LOM2") {
      await db.collection("DOMT-LOM2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DOMT-LOM3") {
      await db.collection("DOMT-LOM3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DOMT-MOM1") {
      await db.collection("DOMT-MOM1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DOMT-MOM2") {
      await db.collection("DOMT-MOM2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "DOMT-MOM3") {
      await db.collection("DOMT-MOM3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSARCH1") {
      await db.collection("BSARCH1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSARCH2") {
      await db.collection("BSARCH2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSARCH3") {
      await db.collection("BSARCH3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSARCH4") {
      await db.collection("BSARCH4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSED1") {
      await db.collection("BSED1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSED2") {
      await db.collection("BSED2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSED3") {
      await db.collection("BSED3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSED4") {
      await db.collection("BSED4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BEED1") {
      await db.collection("BEED1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BEED2") {
      await db.collection("BEED2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BEED3") {
      await db.collection("BEED3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BEED4") {
      await db.collection("BEED4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSND1") {
      await db.collection("BSND1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSND2") {
      await db.collection("BSND2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSND3") {
      await db.collection("BSND3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSND4") {
      await db.collection("BSND4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSBIO1") {
      await db.collection("BSBIO1").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSBIO2") {
      await db.collection("BSBIO2").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSBIO3") {
      await db.collection("BSBIO3").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } else if (year === "BSBIO4") {
      await db.collection("BSBIO4").doc(username).set({
        firstName: fname,
        lastName: lname,
        Birth: DateString,
        organization: org,
        gender: gender,
        course: course,
        Year: year,
        location: location,
        email: email,
        studentId: studenti,
        password: passwordInput2.confirmPassword,
      });
    } 



    setStatus("");
    setfname("");
    setlname("");
    setDate("")
    setorg("");
    setgender("");
    setcourse("");
    setYear("");
    setlocation("");
    setEmail("");
    setStudenti("");
    setPasswordInput2("");
  };

  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput2, setPasswordInput2] = useState({
    password: "",
  });
  const handlePasswordChange = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    const passwordInput = {
      ...passwordInput2,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput2(passwordInput);
  };
  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    //for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordErr(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        passwordInput.confirmPassword.length > 0)
    ) {
      if (passwordInput2.confirmPassword !== passwordInput2.password) {
        setConfirmPasswordError("Confirm password is not matched");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

                
  return (
    <>
      <div id="back3">
        <div id="B" className="p-3 box col-md-4 card">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="but">
                <img width="35px" height="35px" src={logo} alt="Logo" />{" "}
                <b>PUP Lopez Quezon</b>
                <h6>Branch</h6>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <b style={{ color: "#800" }}>Acceptance of Terms</b>
              <p>
                The online services that PUP provides to you are subject to the
                following Terms of Use ("Terms"). This is an agreement between
                you (either an individual or a single entity) and the
                University. By visiting, browsing and/or interacting with our
                online services, you agree to be bound by this Terms.
              </p>
              <p>
                PUP reserves the right to update the Terms at any time without
                notice to you. The most current version of the Terms can be
                viewed by clicking on the "Terms of Use" hypertext link located
                at the bottom of our Web pages and online services.
              </p>
              <p>
                The University offers various online services wherein additional
                terms or requirements may apply. As such, these terms will be
                available to relevant online services, and those additional
                terms become part of your agreement with the University if you
                use those online services.
              </p>
              <h6>
                <Checkbox color="success" /> I Agree
              </h6>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" href="/login">
                Sign in Now
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="text-center mb-2 mt-5">
            <img
              alt="PUP"
              className="img-circle"
              src="https://cdn.pup.edu.ph/img/symbols/logo88x88.png"
            />
          </div>
          <h2 className="but">
            <strong style={{ color: "#000" }}>PUP Lopez Quezon </strong>
            <h6>Branch</h6>
          </h2>
          <h5 className="mt-3 but">Register to start your session</h5>

          <Form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="First Name"
              autocomplete="off"
              onChange={(e) => setfname(e.target.value)}
              className="mb-3 "
            />
            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="Last Name"
              autocomplete="off"
              onChange={(e) => setlname(e.target.value)}
              className="mb-3"
            />
            <div
              className="row mb-3"
              style={{ width: "100%", marginLeft: "4px" }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  openTo="year"
                  views={["year", "month", "day"]}
                  label="Year, month and date"
                  value={Date2}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} />
                  )}
                />
              </LocalizationProvider>
            </div>
            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="Student ID"
              max_length="15"
              value={studenti}
              name="StudentID"
              autocomplete="off"
              onChange={(e) => setStudenti(e.target.value)}
              className="mb-3"
            />
            <div
              className="row mb-3"
              style={{ width: "100%", marginLeft: "4px" }}
            >
              <TextField
                select
                label="Organization"
                required
                onChange={(e) => setorg(e.target.value)}
                helperText="Please select your Organization"
                className="mb-3"
              >
                <MenuItem value="ABS" className="scrollable-div">
                  Agri Business Society (ABS)
                </MenuItem>
                <MenuItem value="HMS" className="scrollable-div">
                  Hospitality Management Society (HMS)
                </MenuItem>
                <MenuItem value="IIEE" className="scrollable-div">
                  Institute of Integrated Electrical Engineers (IIEE)
                </MenuItem>
                <MenuItem value="IBITS" className="scrollable-div">
                  Institute of Brilliant Information Technology Students (IBITS)
                </MenuItem>
                <MenuItem value="JME" className="scrollable-div">
                  Junior Marketing Executive (JME)
                </MenuItem>
                <MenuItem value="JPIA" className="scrollable-div">
                  Junior Philippine Institute of Acceptants (JPIA)
                </MenuItem>
                <MenuItem value="PAdS" className="scrollable-div">
                  Public Administrators Society (PAdS)
                </MenuItem>
                <MenuItem value="PASOA" className="scrollable-div">
                  Philippine Association of Students in Office Administration
                  (PASOA)
                </MenuItem>
                <MenuItem value="PICE" className="scrollable-div">
                  Philippine Institute of Civil Engineers (PICE)
                </MenuItem>
                <MenuItem value="SYNERTECH" className="scrollable-div">
                  Synergism of Student in Technology (SYNERTECH)
                </MenuItem>
                <MenuItem value="UAPSA" className="scrollable-div">
                  United Architects of the Philippines Student Auxiliary (UAPSA)
                </MenuItem>
                <MenuItem value="YES">Young Educators Society (YES)</MenuItem>
                <MenuItem value="BSBIO" className="scrollable-div">
                  Bachelor of Science Biology (BSBIO)
                </MenuItem>
                <MenuItem value="BSND" className="scrollable-div">
                  Bachelor of Science Nutrition and Dietetics (BSND)
                </MenuItem>
              </TextField>

              <TextField
                select
                label="Gender"
                required
                onChange={(e) => setgender(e.target.value)}
                helperText="Please select your Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </div>
            <TextField
              id="outlined-select-currency"
              select
              label="Course"
              required
              onChange={(e) => setcourse(e.target.value)}
              helperText="Please select your Course"
              className="mb-3"
              value={course}
              style={{ width: "100%", marginLeft: "4px", position: "relative" }}
            >
              {org === "IBITS"
                ? [
                    <MenuItem value="BSIT" className="scrollable-div">
                      Bachelor of Science in Information Technology (BSIT)
                    </MenuItem>,
                    <MenuItem value="DICT" className="scrollable-div">
                      Diploma in Information and Communication Technology (DICT)
                    </MenuItem>,
                    <MenuItem value="DCETech" className="scrollable-div">
                      Diploma in Computer Engineering Technology (DCET)
                    </MenuItem>,
                  ]
                : org === "ABS"
                ? [
                    <MenuItem value="BSAME" className="scrollable-div">
                      Bachelor of Science in Business Administration Major
                      inMarketing Management (BSAME)
                    </MenuItem>,
                  ]
                : org === "PADS"
                ? [
                    <MenuItem value="BPA" className="scrollable-div">
                      Bachelor in Public Administration (BPA)
                    </MenuItem>,
                  ]
                : org === "JPIA"
                ? [
                    <MenuItem value="BSA" className="scrollable-div">
                      Bachelor of Science in Accountancy (BSA)
                    </MenuItem>,
                  ]
                : org === "JME"
                ? [
                    <MenuItem value="BSBA" className="scrollable-div">
                      Bachelor of Science in Business Administration Major in
                      Marketing Management (BSBA)
                    </MenuItem>,
                  ]
                : org === "SYNERTECH"
                ? [
                    <MenuItem value="DOMT-LOM" className="scrollable-div">
                      Diploma in Office Management Technology with
                      Spelicialization in Legal Office Management (DOMT LOM)
                    </MenuItem>,
                    <MenuItem value="DOMT-MOM" className="scrollable-div">
                      Diploma in Office Management Technology with
                      Spelicialization in Medical Office Management (DOMT MOM)
                    </MenuItem>,
                  ]
                : org === "HMS"
                ? [
                    <MenuItem value="BSHM" className="scrollable-div">
                      Bachelor of Science in Hospitality Management (BSHM)
                    </MenuItem>,
                  ]
                : org === "IIEE"
                ? [
                    <MenuItem value="BSEE" className="scrollable-div">
                      Bachelor of Science in Electrical Engineering (BSEE)
                    </MenuItem>,
                    <MenuItem value="DEET" className="scrollable-div">
                      Diploma in Electrical Engineering Technology (DEET)
                    </MenuItem>,
                  ]
                : org === "PICE"
                ? [
                    <MenuItem value="BSCE" className="scrollable-div">
                      Bachelor of Science in Civil Engineering (BSCE)
                    </MenuItem>,
                    <MenuItem value="DCET" className="scrollable-div">
                      Diploma in Civil Engineering Technology (DCET)
                    </MenuItem>,
                  ]
                : org === "UAPSA"
                ? [
                    <MenuItem value="BSARCH" className="scrollable-div">
                      Bachelor of Science in Architecture (BSARCH)
                    </MenuItem>,
                  ]
                : org === "YES"
                ? [
                    <MenuItem value="BSED" className="scrollable-div">
                      Bachelor of Secondary Education Major in Mathematics
                      (BSED)
                    </MenuItem>,
                    <MenuItem value="BEED" className="scrollable-div">
                      Bachelor in Elementary Education (BEED)
                    </MenuItem>,
                  ]
                : org === "PASOA"
                ? [
                    <MenuItem value="BSOA" className="scrollable-div">
                      Bachelor of Science in office Administration (BSOA)
                    </MenuItem>,
                  ]
                : org === "BSND"
                ? [
                    <MenuItem value="BSND" className="scrollable-div">
                      Bachelor of Science Nutrition and Dietetics (BSND)
                    </MenuItem>,
                  ]
                : org === "BSBIO"
                ? [
                    <MenuItem value="BSBIO" className="scrollable-div">
                      Bachelor of Science Biology (BSBIO)
                    </MenuItem>,
                  ]
                : []}
            </TextField>
            <TextField
              select
              label="Year"
              required
              onChange={(e) => setYear(e.target.value)}
              helperText="Please select your Year"
              className="mb-3"
              value={year}
              style={{ width: "100%", marginLeft: "4px", position: "relative" }}
            >
              {course === "DICT"
                ? [
                    <MenuItem value="DICT1" className="scrollable-div">
                      DICT-1
                    </MenuItem>,
                    <MenuItem value="DICT2" className="scrollable-div">
                      DICT-2
                    </MenuItem>,
                    <MenuItem value="DICT3" className="scrollable-div">
                      DICT-3
                    </MenuItem>,
                  ]
                : course === "BSIT"
                ? [
                    <MenuItem value="BSIT1" className="scrollable-div">
                      BSIT-1
                    </MenuItem>,
                    <MenuItem value="BSIT2" className="scrollable-div">
                      BSIT-2
                    </MenuItem>,
                    <MenuItem value="BSIT3" className="scrollable-div">
                      BSIT-3
                    </MenuItem>,
                    <MenuItem value="BSIT4" className="scrollable-div">
                      BSIT-4
                    </MenuItem>,
                  ]
                : course === "DCETech"
                ? [
                    <MenuItem value="DCETech1" className="scrollable-div">
                      DCET-1
                    </MenuItem>,
                    <MenuItem value="DCETech2" className="scrollable-div">
                      DCET-2
                    </MenuItem>,
                    <MenuItem value="DCETech3" className="scrollable-div">
                      DCET-3
                    </MenuItem>,
                  ]
                : course === "BSAME"
                ? [
                    <MenuItem value="BSAME1" className="scrollable-div">
                      BSAME-1
                    </MenuItem>,
                    <MenuItem value="BSAME2" className="scrollable-div">
                      BSAME-2
                    </MenuItem>,
                    <MenuItem value="BSAME3" className="scrollable-div">
                      BSAME-3
                    </MenuItem>,
                    <MenuItem value="BSAME4" className="scrollable-div">
                      BSAME-4
                    </MenuItem>,
                  ]
                : course === "BSHM"
                ? [
                    <MenuItem value="BSHM1" className="scrollable-div">
                      BSHM-1
                    </MenuItem>,
                    <MenuItem value="BSHM2" className="scrollable-div">
                      BSHM-2
                    </MenuItem>,
                    <MenuItem value="BSHM3" className="scrollable-div">
                      BSHM-3
                    </MenuItem>,
                    <MenuItem value="BSHM4" className="scrollable-div">
                      BSHM-4
                    </MenuItem>,
                  ]
                : course === "BSEE"
                ? [
                    <MenuItem value="BSEE1" className="scrollable-div">
                      BSEE-1
                    </MenuItem>,
                    <MenuItem value="BSEE2" className="scrollable-div">
                      BSEE-2
                    </MenuItem>,
                    <MenuItem value="BSEE3" className="scrollable-div">
                      BSEE-3
                    </MenuItem>,
                    <MenuItem value="BSEE4" className="scrollable-div">
                      BSEE-4
                    </MenuItem>,
                    <MenuItem value="BSEE5" className="scrollable-div">
                      BSEE-5
                    </MenuItem>,
                  ]
                : course === "DEET"
                ? [
                    <MenuItem value="DEET1" className="scrollable-div">
                      DEET-1
                    </MenuItem>,
                    <MenuItem value="DEET2" className="scrollable-div">
                      DEET-2
                    </MenuItem>,
                    <MenuItem value="DEET3" className="scrollable-div">
                      DEET-3
                    </MenuItem>,
                    <MenuItem value="DEET4" className="scrollable-div">
                      DEET-4
                    </MenuItem>,
                  ]
                : course === "BSBA"
                ? [
                    <MenuItem value="BSBA1" className="scrollable-div">
                      BSBA-1
                    </MenuItem>,
                    <MenuItem value="BSBA2" className="scrollable-div">
                      BSBA-2
                    </MenuItem>,
                    <MenuItem value="BSBA3" className="scrollable-div">
                      BSBA-3
                    </MenuItem>,
                    <MenuItem value="BSBA4" className="scrollable-div">
                      BSBA-4
                    </MenuItem>,
                  ]
                : course === "BSA"
                ? [
                    <MenuItem value="BSA1" className="scrollable-div">
                      BSA-1
                    </MenuItem>,
                    <MenuItem value="BSA2" className="scrollable-div">
                      BSA-2
                    </MenuItem>,
                    <MenuItem value="BSA3" className="scrollable-div">
                      BSA-3
                    </MenuItem>,
                    <MenuItem value="BSA4" className="scrollable-div">
                      BSA-4
                    </MenuItem>,
                  ]
                : course === "BPA"
                ? [
                    <MenuItem value="BPA1" className="scrollable-div">
                      BPA-1
                    </MenuItem>,
                    <MenuItem value="BPA2" className="scrollable-div">
                      BPA-2
                    </MenuItem>,
                    <MenuItem value="BPA3" className="scrollable-div">
                      BPA-3
                    </MenuItem>,
                    <MenuItem value="BPA4" className="scrollable-div">
                      BPA-4
                    </MenuItem>,
                  ]
                : course === "BSOA"
                ? [
                    <MenuItem value="BSOA1" className="scrollable-div">
                      BSOA-1
                    </MenuItem>,
                    <MenuItem value="BSOA2" className="scrollable-div">
                      BSOA-2
                    </MenuItem>,
                    <MenuItem value="BSOA3" className="scrollable-div">
                      BSOA-3
                    </MenuItem>,
                    <MenuItem value="BSOA4" className="scrollable-div">
                      BSOA-4
                    </MenuItem>,
                  ]
                : course === "BSCE"
                ? [
                    <MenuItem value="BSCE1" className="scrollable-div">
                      BSCE-1
                    </MenuItem>,
                    <MenuItem value="BSCE2" className="scrollable-div">
                      BSCE-2
                    </MenuItem>,
                    <MenuItem value="BSCE3" className="scrollable-div">
                      BSCE-3
                    </MenuItem>,
                    <MenuItem value="BSCE4" className="scrollable-div">
                      BSCE-4
                    </MenuItem>,
                  ]
                : course === "DCET"
                ? [
                    <MenuItem value="DCET1" className="scrollable-div">
                      DCET-1
                    </MenuItem>,
                    <MenuItem value="DCET2" className="scrollable-div">
                      DCET-2
                    </MenuItem>,
                    <MenuItem value="DCET3" className="scrollable-div">
                      DCET-3
                    </MenuItem>,
                  ]
                : course === "DOMT-LOM"
                ? [
                    <MenuItem value="DOMT-LOM1" className="scrollable-div">
                      DOMTLOM-1
                    </MenuItem>,
                    <MenuItem value="DOMT-LOM2" className="scrollable-div">
                      DOMTLOM-2
                    </MenuItem>,
                    <MenuItem value="DOMT-LOM3" className="scrollable-div">
                      DOMTLOM-3
                    </MenuItem>,
                  ]
                : course === "DOMT-MOM"
                ? [
                    <MenuItem value="DOMT-MOM1" className="scrollable-div">
                      DOMTMOM-1
                    </MenuItem>,
                    <MenuItem value="DOMT-MOM2" className="scrollable-div">
                      DOMTMOM-2
                    </MenuItem>,
                    <MenuItem value="DOMT-MOM3" className="scrollable-div">
                      DOMTMOM-3
                    </MenuItem>,
                  ]
                : course === "BSARCH"
                ? [
                    <MenuItem value="BSARCH1" className="scrollable-div">
                      BSARCH-1
                    </MenuItem>,
                    <MenuItem value="BSARCH2" className="scrollable-div">
                      BSARCH-2
                    </MenuItem>,
                    <MenuItem value="BSARCH3" className="scrollable-div">
                      BSARCH-3
                    </MenuItem>,
                    <MenuItem value="BSARCH4" className="scrollable-div">
                      BSARCH-4
                    </MenuItem>,
                  ]
                : course === "BSED"
                ? [
                    <MenuItem value="BSED1" className="scrollable-div">
                      BSED-1
                    </MenuItem>,
                    <MenuItem value="BSED2" className="scrollable-div">
                      BSED-2
                    </MenuItem>,
                    <MenuItem value="BSED3" className="scrollable-div">
                      BSED-3
                    </MenuItem>,
                    <MenuItem value="BSED4" className="scrollable-div">
                      BSED-4
                    </MenuItem>,
                  ]
                : course === "BEED"
                ? [
                    <MenuItem value="BEED1" className="scrollable-div">
                      BEED-1
                    </MenuItem>,
                    <MenuItem value="BEED2" className="scrollable-div">
                      BEED-2
                    </MenuItem>,
                    <MenuItem value="BEED3" className="scrollable-div">
                      BEED-3
                    </MenuItem>,
                    <MenuItem value="BEED4" className="scrollable-div">
                      BEED-4
                    </MenuItem>,
                  ]
                : course === "BSND"
                ? [
                    <MenuItem value="BSND1" className="scrollable-div">
                      BSND-1
                    </MenuItem>,
                    <MenuItem value="BSND2" className="scrollable-div">
                      BSND-2
                    </MenuItem>,
                    <MenuItem value="BSND3" className="scrollable-div">
                      BSND-3
                    </MenuItem>,
                    <MenuItem value="BSND4" className="scrollable-div">
                      BSND-4
                    </MenuItem>,
                  ]
                : course === "BSBIO"
                ? [
                    <MenuItem value="BSBIO1" className="scrollable-div">
                      BSBIO-1
                    </MenuItem>,
                    <MenuItem value="BSBIO2" className="scrollable-div">
                      BSBIO-2
                    </MenuItem>,
                    <MenuItem value="BSBIO3" className="scrollable-div">
                      BSBIO-3
                    </MenuItem>,
                    <MenuItem value="BSBIO4" className="scrollable-div">
                      BSBIO-4
                    </MenuItem>,
                  ]
                : []}
            </TextField>

            <TextField
              required
              id="outlined-required"
              style={{ width: "100%" }}
              label="Address"
              autocomplete="off"
              onChange={(e) => setlocation(e.target.value)}
              className="mb-3"
            />
            <TextField
              required
              type="email"
              id="outlined-required"
              style={{ width: "100%" }}
              label="Email"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3"
            />

            <div className="row">
              <PasswordInputField
                handlePasswordChange={handlePasswordChange}
                handleValidation={handleValidation}
                passwordError={passwordError}
              />
              <ConfirmPasswordInputField
                handlePasswordChange={handlePasswordChange}
                handleValidation={handleValidation}
                confirmPasswordError={confirmPasswordError}
                onChange={(e) => passwordInput(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <Button variant="outline-primary" type="Submit">
                Register
              </Button>
            </div>
          </Form>
          <hr />
          <div className="col-11 m-3">
            <div className=" box mt-1 text-center">
              Already have an account? <Link to="/login">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

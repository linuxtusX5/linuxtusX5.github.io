import React, { useState, useEffect } from "react";
import {db} from "../../firebase/index";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button, Card } from "react-bootstrap";
import "firebase/compat/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import { InputGroup, FormControl } from "react-bootstrap";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Badge from "@mui/material/Badge";

function Table1() {
  const [Student, setStudent] = useState([]);
  const [Student1, setStudent1] = useState([]);
  const [Student2, setStudent2] = useState([]);
  const [Student3, setStudent3] = useState([]);
  const [Student4, setStudent4] = useState([]);
  const [Student5, setStudent5] = useState([]);
  const [Student6, setStudent6] = useState([]);
  const [Student7, setStudent7] = useState([]);
  const [Student8, setStudent8] = useState([]);
  const [Student9, setStudent9] = useState([]);
  const [Student10, setStudent10] = useState([]);
  const [Student11, setStudent11] = useState([]);
  const [Student12, setStudent12] = useState([]);
  const [Student13, setStudent13] = useState([]);
  const [Student14, setStudent14] = useState([]);
 
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
  useEffect(() => {
    db.collection("ABS").onSnapshot((snapshot) => {
      setStudent1(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("HMS").onSnapshot((snapshot) => {
      setStudent2(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("BSBIO").onSnapshot((snapshot) => {
      setStudent3(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("BSND").onSnapshot((snapshot) => {
      setStudent4(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("IBITS").onSnapshot((snapshot) => {
      setStudent5(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("IIEE").onSnapshot((snapshot) => {
      setStudent6(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("JME").onSnapshot((snapshot) => {
      setStudent7(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("JPIA").onSnapshot((snapshot) => {
      setStudent8(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("PAdS").onSnapshot((snapshot) => {
      setStudent9(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("PASOA").onSnapshot((snapshot) => {
      setStudent10(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("PICE").onSnapshot((snapshot) => {
      setStudent11(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("SYNERTECH").onSnapshot((snapshot) => {
      setStudent12(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("UAPSA").onSnapshot((snapshot) => {
      setStudent13(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("YES").onSnapshot((snapshot) => {
      setStudent14(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);


  return (
    <>
      <div>
        {" "}
        <Card
          className="m-3 p-3 "
          style={{
            borderTop: "4px solid #800",
            boxShadow: "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
            color: "#800",
            alignItems: "center",
          }}
        >
          <h1 className="pup">
            <strong>
              POLYTECHNIC UNIVERSITY OF THE PHILIPPINES LOPEZ, QUEZON BRANCH
            </strong>
          </h1>
          <h1 className="pup">
            <strong>ALL STUDENT RECORD</strong>
          </h1>
        </Card>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#4c0001",
              marginBottom: "-50px",
            }}
          >
            <strong>{Student.length}</strong>
          </h1>
          <AccountBoxIcon sx={{ width: 400, height: 400, color: "#f1c40f" }} />
        </div>
        <Badge color="secondary" badgeContent={Student1.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#e74c3c" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student2.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#16a085" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student3.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#95a5a6" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student4.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#2c3e50" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student5.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#27ae60" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student6.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#8e44ad" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student7.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#000" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student8.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#c7522a" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student9.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#e5c185" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student10.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#8ac926" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student11.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#74a892" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student12.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#008585" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student13.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#730220" }} />
        </Badge>
        <Badge color="secondary" badgeContent={Student14.length} max={999}>
          <AccountBoxIcon sx={{ width: 230, height: 200, color: "#f27b50" }} />
        </Badge>
      </div>
    </>
  );
}

export default Table1;

import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";
import "firebase/compat/firestore";
import {
  GridColumns,
  GridRowsProp,
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  MuiEvent,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

export default function DisableStopEditModeOnFocusOut() {
    
  const columns: GridColumns =[
    {
      field: "StudentID",
      headerName: "Student ID",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "FirstName",
      headerName: "First Name",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "LastName",
      headerName: "Last Name",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Birth",
      headerName: "BirthDay",
      width: 145,
      type: "date",
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Email",
      headerName: "Email",
      width: 220,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Organization",
      headerName: "Organization",
      width: 120,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Course",
      headerName: "Course",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Address",
      headerName: "Address",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "Edit",
      headerName: "Edit",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
  ];

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
      Birth: user?.data.Birth,
      Email: user?.data.email,
      Organization: user?.data.organization,
      Course: user?.data.course,
      Gender: user?.data.gender,
      Address: user?.data.location,
      headerClassName: "super-app-theme--header",
      id: user?.id,

    };
  });

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={trim}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
      />
    </div>
  );
}
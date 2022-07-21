import React from "react";
import { variables } from "../../Variables";
import Table from "react-bootstrap/Table";
import "../../organization/org.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default class BSIT4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bsit4: [],
      modalTitle: "",
      studentId: 0,
      studentName: "",
      Gmail: "",
      DateOfJoining: "",
      Names: "",
    };
    this.viewClick = this.viewClick.bind(this);
  }

  onChange = (e) => {
    e.preventDefault();

    this.setState({ Names: e.target.value });
  };

  refreshList() {
    fetch(variables.API_URL + "bsit4")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ bsit4: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeStudentId = (e) => {
    this.setState({ studentId: e.target.value });
  };

  changeStudentName = (e) => {
    this.setState({ studentName: e.target.value });
  };
  changeGmail = (e) => {
    this.setState({ Gmail: e.target.value });
  };
  changeDateOfJoining = (e) => {
    this.setState({ DateOfJoining: e.target.value });
  };

  addClick() {
    this.setState({
      Title: "Add Student (BSIT)",
      studentId: 0,
      studentName: "",
      Gmail: "",
      DateOfJoining: "",
    });
  }

  editClick(iBITS) {
    this.setState({
      Title: "Edit Student (BSIT)",
      studentId: iBITS.studentId,
      studentName: iBITS.studentName,
      Gmail: iBITS.Gmail,
      DateOfJoining: iBITS.DateOfJoining,
    });
  }

  createClick() {
    fetch(variables.API_URL + "bsit4", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: this.state.studentId,
        studentName: this.state.studentName,
        Gmail: this.state.Gmail,
        DateOfJoining: this.state.DateOfJoining,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  updateClick() {
    fetch(variables.API_URL + "bsit4", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: this.state.studentId,
        studentName: this.state.studentName,
        Gmail: this.state.Gmail,
        DateOfJoining: this.state.DateOfJoining,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + "bsit4/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  viewClick(name) {
    name = this.state.Names;

    fetch(variables.API_URL + "bsit4/" + name, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ bsit4: data });
        console.log({ studentName: this.state.Names });
      });
  }

  render() {
    const { bsit4, Title, studentId, studentName, Gmail, DateOfJoining } =
      this.state;

    return (
      <div id="wtf">
        <h2
          className="d-flex justify-content-center mt-3"
          style={{ color: "#ff0", padding: "10px" }}
        >
          Bachelor of Science in Information Technology (BSIT-4)
        </h2>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#sampleModal7"
          onClick={() => this.addClick()}
        >
          Add STUDENT
        </button>

        <InputGroup className="mb-3" style={{ width: 400, marginTop: 100 }}>
          <FormControl
            placeholder="Student Name"
            aria-label="Student Name"
            aria-describedby="basic-addon2"
            value={this.state.Names}
            onChange={this.onChange}
          />
          <Button
            variant="outline-primary"
            id="button-addon2"
            onClick={() => this.viewClick()}
          >
            Search
          </Button>
        </InputGroup>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>
                <i class="fa fa-id-card"> STUDENT ID</i>
              </th>
              <th>
                <i class="fa fa-user"> STUDENT NAME</i>
              </th>
              <th>
                <i class="fa fa-id-badge"> GMAIL ACCOUNT</i>
              </th>
              <th>
                <i class="fa fa-cheese"> BIRTHDAY</i>
              </th>
              <th>
                <i class="fa fa-toolbox"> OPTIONS</i>
              </th>
            </tr>
          </thead>
          <tbody>
            {bsit4.map((iBITS) => (
              <tr key={iBITS.studentId}>
                <td>{iBITS.studentId}</td>
                <td>{iBITS.studentName}</td>
                <td>{iBITS.Gmail}</td>
                <td>{iBITS.DateOfJoining}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#sampleModal8"
                    onClick={() => this.editClick(iBITS)}
                    style={{
                      marginRight: 20,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    onClick={() => this.deleteClick(iBITS.studentId)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div
          className="modal fade"
          id="sampleModal7"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{Title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center">
                  <div className="p-2 w-50 bd-highlight">
                    <div className="mb-3">
                      <span className="id input-group-text">STUDENT ID</span>
                      <input
                        type="number"
                        className="nn1"
                        value={studentId}
                        onChange={this.changeStudentId}
                      />
                    </div>

                    <div className="mb-3">
                      <span className="id2 input-group-text">STUDENT NAME</span>
                      <input
                        type="text"
                        className="n2"
                        value={studentName}
                        onChange={this.changeStudentName}
                      />
                    </div>

                    <div className="mb-3">
                      <span className="id3 input-group-text">
                        GMAIL ACCOUNT
                      </span>
                      <input
                        type="email"
                        className="n3"
                        value={Gmail}
                        onChange={this.changeGmail}
                      />
                    </div>

                    <div className="mb-3">
                      <span className="id input-group-text">BIRTHDAY</span>
                      <input
                        type="date"
                        className="n4"
                        value={DateOfJoining}
                        onChange={this.changeDateOfJoining}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary float-start"
                  onClick={() => this.createClick()}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="sampleModal8"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{Title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center">
                  <div className="p-2 w-50 bd-highlight">
                    <div className="mb-3">
                      <span className="id2 input-group-text">STUDENT NAME</span>
                      <input
                        type="text"
                        className="n2"
                        value={studentName}
                        onChange={this.changeStudentName}
                      />
                    </div>

                    <div className="mb-3">
                      <span className="id3 input-group-text">
                        GMAIL ACCOUNT
                      </span>
                      <input
                        type="email"
                        className="n3"
                        value={Gmail}
                        onChange={this.changeGmail}
                      />
                    </div>

                    <div className="mb-3">
                      <span className="id input-group-text">BIRTHDAY</span>
                      <input
                        type="date"
                        className="n4"
                        value={DateOfJoining}
                        onChange={this.changeDateOfJoining}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary float-start"
                  onClick={() => this.updateClick()}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

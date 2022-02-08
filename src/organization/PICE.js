import React from 'react';
import {variables} from '../Variables';
import Table from 'react-bootstrap/Table';
import './org.css';

export default class PICE extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            pice:[],
            modalTitle:"",
            studentId: 0, 
            studentName: "", 
            Gmail: "", 
            DateOfJoining: ""
        }
    }

    refreshList(){

         fetch(variables.API_URL + 'pice')
        .then(response => response.json())
        .then(data => {
            this.setState({pice:data});
        })
    }
    
    componentDidMount(){
        this.refreshList();
    }
    
    changeStudentId = (e) =>{
        this.setState({studentId:e.target.value});
    }
    changeStudentName = (e) =>{
        this.setState({studentName:e.target.value});
    }
    changeGmail = (e) =>{
        this.setState({Gmail:e.target.value});
    }
    changeDateOfJoining = (e) =>{
        this.setState({DateOfJoining:e.target.value});
    }

    addClick(){
        this.setState({
            Title:"Add Student (PICE)",
            studentId:0,
            studentName:"",
            Gmail:"",
            DateOfJoining:""
        });
    }

     createClick(){
            fetch(variables.API_URL + 'pice',{
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    studentId: this.state.studentId,       
                    studentName: this.state.studentName,
                    Gmail: this.state.Gmail,
                    DateOfJoining: this.state.DateOfJoining
                })
            })   
                .then(res => res.json())
                .then((result) =>{
                    alert(result);
                    this.refreshList();
                },(error) => {
                    alert('Failed');
                })
    };

    

    deleteClick(id){
        if(window.confirm("Are you sure?")){
            fetch(variables.API_URL + 'pice/' + id,{
                method: 'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })   
                .then(res => res.json())
                .then((result) =>{
                    alert(result);
                    this.refreshList();
                },(error) => {
                    alert('Failed');
                })
            }
    }

    render(){
         const {
            pice,
            Title,
            studentId, 
            studentName, 
            Gmail, 
            DateOfJoining
            } = this.state;
    return (
        <div id='wtf'>
        <h1 className='d-flex justify-content-center mt-3' style={{color:'#ff0', padding: '10px'}}>PHILIPPINE INSTITUTE OF CIVIL ENGINEERS (pice)</h1>
            <button type='button' className='btn btn-primary m-2 float-end' 
            data-bs-toggle="modal" data-bs-target="#sampleModal" onClick={() => this.addClick()}>
                Add STUDENT
            </button>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>
                                STUDENT ID
                            </th>
                            <th>
                                STUDENT NAME
                            </th>
                            <th>
                                GMAIL ACCOUNT
                            </th>
                            <th>
                                DATE
                            </th>
                            <th>
                                OPTIONS
                            </th>
                        </tr>  
                    </thead>
                    <tbody>
                        {pice.map(pICE => 
                        <tr key={pICE.studentId}>
                                <td>{pICE.studentId}</td>
                                <td>{pICE.studentName}</td>
                                <td>{pICE.Gmail}</td>
                                <td>{pICE.DateOfJoining}</td>
                                <td className='d-flex justify-content-center'>
                                    <button type='button' className='btn btn-light mr-1'
                                    onClick={() => this.deleteClick(pICE.studentId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </td>
                        </tr>
                        )}
                    </tbody>
                </Table>

                <div className='modal fade' id='sampleModal' tabIndex="-1" aria-hidden="true">
                    <div className='modal-dialog modal-lg modal-dialog-centered'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title'>{Title}</h5>
                                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'>

                                </button>
                            </div>
                            <div className='modal-body'>
                            <div className='d-flex justify-content-center'>

                            <div className='p-2 w-50 bd-highlight'>

                                 <div className='mb-3'>
                                    <span className='id input-group-text'>STUDENT ID</span>
                                    <input type='number' className='nn1' value={studentId} onChange={this.changeStudentId} />
                                </div>

                                <div className='mb-3'>
                                    <span className='id2 input-group-text'>STUDENT NAME</span>
                                    <input type='text' className='n2' value={studentName} onChange={this.changeStudentName} />
                                </div>

                                <div className='mb-3'>
                                    <span className='id3 input-group-text'>GMAIL ACCOUNT</span>
                                    <input type='email' className='n3' value={Gmail} onChange={this.changeGmail} />
                                </div>

                                <div className='mb-3'>
                                    <span className='id input-group-text'>DATE</span>
                                    <input type='date' className='n4' value={DateOfJoining} onChange={this.changeDateOfJoining} />
                                </div>

                            </div>
                            </div>
                                    <button type="button" className="btn btn-primary float-start"
                                    onClick={() => this.createClick()}>
                                        Create
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}
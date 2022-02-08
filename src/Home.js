import React, { Component } from 'react';
import {storage} from './firebase';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if(e.target.files[0]){
      const Image = e.target.files[0];
      this.setState(() => ({Image}));
    }
  }

  handleUpload = () => {
    const {Image} = this.state;
    const uploadTask = storage.ref(`images/${Image.name}`).put(Image);
    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress})
    }, (error) => {
      console.log(error);
    }, () => {
      storage.ref('images').child(Image.name).getDownloadURL().then(url => {
        console.log(url);
        this.setState({url});
      })
    });
  }

  render() {
    return (
      <div >
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img id='URL' src={this.setState.url || 'https://via.placeholder.com/400x300'} alt='Uploaded images' height='300' width='400'/>     
      </div>
    )
  }
}
export default Event;











import React, { useEffect } from "react";
import app from "./base";
import 'firebase/compat/firestore';
import {doc, deleteDoc} from 'firebase/firestore';

const db = app.firestore();

function App({dev}) {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);


  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
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


  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="NAME" />
        <button>Submit</button>
      </form>
      <ul>
        {users.map((user, name) => {
          return (
            <div key={name}>
            <p>{user.name}</p><br/>
            <button onClick={() => deletedocs(user)}> Delete</button>
              <img width="300" height="300" src={user.EventPic} alt={user.name} />
              
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default App;

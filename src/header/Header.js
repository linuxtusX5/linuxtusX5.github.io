import React, { useEffect, useState } from "react";
import "./Header.css";
import Buttons from "../Button/Button";
import "../Button/Button.css";
import design from "../Photos/PUP.jpg";
import { BsMouse } from "react-icons/bs";
import {Form, Button} from 'react-bootstrap';
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

//Features
import "../features/Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import Pup from "../Photos/Front_view.jpg";
import Feature from "../features/Feature";
import { FeatureList } from "../features/data";
import '../Download.css';
import '../Subscribe.css';
import '../Footer.css';


import AOS from "aos";
import "aos/dist/aos.css";

//firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";

import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";



const Header = () => {


  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


    
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span className="design">Student councils</span></h1>
            <h2 style={{color: "#fff"}}>
            <span>should be the every day thing for those</span>
            <span> who are the members of this council</span>
            </h2>
          <p className="u-text-small" style={{color: "#fff"}}><b>
            Student council speaks a lot more about itself rather than just being a group of people, 
            it show cases its unity, cooperation, coordination and strengths to the world</b>
          </p>
          <div className="header-cta">
            <Button variant="primary" onClick={handleLogout}> LOG OUT </Button>
          </div>
        </div>
        <div className="header-right"  data-aos="fade-left">
          <img src={design} alt="photos" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#ff0" size={25} className="mouse" />
        </a>
      </div>
      
      <div id="features" className="container features" style={{backgroundColor: "#fff"}}>
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="#ff0" size={30} className="sty"/>
          <h2>Polytechnic University of the Philippines</h2>
          <p className="u-text-small">
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={Pup} alt="Pup" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" download">
        <h2  data-aos="fade-up">
          <b style={{color:'#ff0'}}>STUDENT COUNCILS</b> SHOULD
           BE THE EVERY DAY THING FOR THOSE WHO ARE THE MEMBERS OF THIS COUNCIL
        </h2>
        <nav>
        
        </nav>
      </div>

       <div className="subscribe">
        <h2>Register now!</h2>
        <form>
          <div className="form-control">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="mail"><Form.Label ><b>Email address</b></Form.Label></div>
              <Form.Control type="email" placeholder="Enter email" onChange={(event) => {
              setRegisterEmail(event.target.value);
          }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="pass"><Form.Label><b>Password</b></Form.Label></div>
              <Form.Control type="password" placeholder="Password" onChange={(event) => {
              setRegisterPassword(event.target.value);
          }}/>
            </Form.Group>
            <Button className="but" variant="primary" type="submit" onClick={register}>
              Register
            </Button>
          </Form>
          </div>
        </form>
        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer">
          <div className="footer-box"><b>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</b>
          <p className="u-text-small">&copy; Copyright 2021.</p>
        </div>
      </div>
    </section>
  );
};

export default Header;

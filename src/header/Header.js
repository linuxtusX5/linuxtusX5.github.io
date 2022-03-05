import React, { useEffect} from "react";
import "./Header.css";
import design from "../Photos/p4.png";
import logo from "../Photos/PUPLogo.png"
import { BsMouse } from "react-icons/bs";
import {Button} from 'react-bootstrap';
import "../Button/Button.css";

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

import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

//emailjs
import emailjs from '@emailjs/browser';

const Header = () => {

  function sendEmail(e) {
      e.preventDefault();
  emailjs.sendForm('service_t9564z3', 'template_miyd8br', e.target, 'user_zGZ7M9G7Yd20lIrSMAwL9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


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
          <h1><span className="design">Student councils</span></h1>
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
          <img class="logoz" data-aos="fade-right" src={logo} alt="photos" />
          <h3><b class="p" data-aos="fade-right">Polytechnic University of the Philippines</b></h3>
        <form onSubmit={sendEmail} data-aos="fade-right">
                    <div className="row pt-5 mx-auto pt">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Course" name="course"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message (Suggestion)" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input class="in" type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
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

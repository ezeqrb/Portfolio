import { React } from 'react'
import './Profile.css'
import  { FaGithub , FaShareAlt , FaFacebook , FaInstagram , FaLinkedinIn , FaDiscord } from 'react-icons/fa'
import { BrowserRouter as Router , NavLink } from "react-router-dom";
import Typewriter from 'typewriter-effect';



export default function Profile() {

  return (
    <div className="Profile">
      
      
      <div className="tarjeta">
        <div><img src='./newPortfolio.jpg' alt="foto perfil zeker" className="foto"/></div>
        <div className="name">
          <h1 className="tittle anim-typewriter"> Ezequiel RB </h1>
        </div>
        <div className="job">
          <h4 className="crimeson"><Typewriter
            options={{
              strings: ['Fullstack', 'Web developer',  'NodeJS', 'ReactJS', 'JavaScript'],
              autoStart: true,
              loop: true,
            }}
            />
        </h4>
        </div>
        <div className="social">
          <FaGithub size="1.2em" className="social-icons"/>
          <FaShareAlt size="1.2em" className="social-icons"/>
          <FaFacebook size="1.2em" className="social-icons"/>
          <FaInstagram size="1.2em"className="social-icons"/>
          <FaLinkedinIn size="1.2em"className="social-icons"/>
          <FaDiscord size="1.2em"className="social-icons"/>
        </div>
      </div>
      <div className="botones">
        <div className="download">Download CV</div>
        <Router>
          <NavLink to="/" activeClassName="selected" >Contact Me</NavLink>
        </Router>
      </div>   
    </div>
);
}
 
  
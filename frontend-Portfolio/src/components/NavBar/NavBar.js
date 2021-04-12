import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css';
import { motion } from "framer-motion"
import { BsAt , BsBraces , BsPerson , BsHouse , BsCardList } from "react-icons/bs"
import { useMediaQuery } from 'react-responsive'

export default function NavBar() {
    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      const isMobile = useMediaQuery({
        query: '(max-device-width: 1223px)'
      })
    
   
  return (

    <div className={ isDesktopOrLaptop ? "NavBar" : "NavBar-movile" }>

       
            <ul>
                <motion.li
                    whileHover={{ scale:1.15 }}
                >
                    <NavLink className="NavLink" exact to="/" activeClassName="selected">
                        <div className="divider div-transparent"></div>
                        <div className="icons"><BsHouse size="1.2rem" /></div>
                        <small>Home</small>
                    </NavLink>
                    
                </motion.li>
                 
                <motion.li
                    whileHover={{ scale:1.15 }}
                >
                    <NavLink className="NavLink" to="/about" activeClassName="selected">
                        <div className="divider div-transparent"></div>
                        <div className="icons"><BsPerson size="1.2rem" /></div>
                        <small>About</small>
                        
                    </NavLink>
                    
                </motion.li>   
                
                <motion.li
                    whileHover={{ scale:1.15 }}
                >
                    <NavLink className="NavLink" to="/resume" activeClassName="selected">
                        <div className="divider div-transparent"></div>
                        <div className="icons"><BsCardList size="1.2rem" /></div>
                        <small>Resume</small>
                        
                    </NavLink>
                </motion.li> 
                
                    <motion.li
                    whileHover={{ scale:1.15 }}
                >
                    <NavLink className="NavLink" to="/works" activeClassName="selected">
                        <div className="divider div-transparent"></div>
                        <div className="icons"><BsBraces size="1.2rem" /></div>
                        <small>Projects</small>
                        
                    </NavLink>
                </motion.li> 
                
                <motion.li
                    whileHover={{ scale:1.15 }}
                >
                    <NavLink className="NavLink" to="/contact" activeClassName="selected">
                        <div className="divider div-transparent"></div>
                        <div className="icons"><BsAt size="1.2rem" /></div>
                        <small>Contact</small>
                        
                    </NavLink>
                </motion.li>
            </ul>
        
    </div>
);
}
 
  
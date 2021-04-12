import React from 'react'
import './Card.css'
import './Resume.css'
import { motion } from "framer-motion"
import { BsFillBriefcaseFill, BsBookHalf , BsFillImageFill , BsFillTerminalFill } from 'react-icons/bs'
import {DiMongodb , DiMysql, DiReact, DiNodejs, DiJavascript1, DiHtml5, DiCss3, DiGoogleAnalytics } from 'react-icons/di'
import { useMediaQuery } from 'react-responsive'



export default function Resume() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      const isMobile = useMediaQuery({
        query: '(max-device-width: 1223px)'
      })

    return (
        <motion.div
        initial={{ opacity: 0 , x: -400}}
        animate={{opacity: 1, x:0 }}
        exit={{ opacity: 0, x: -400}}
        >
            <div className={ isDesktopOrLaptop ? "Card" : "Card-movile" }>
                <div className="titulo">
                    <h1>Resume</h1>
                </div>
                <div className="divider div-transparent"></div>
                
                <div className="container-resume">
                <div className="section">
                    <div className="box">
                        <div className="tittle"> <BsFillBriefcaseFill size="2.2rem" color="#dc143c" />EXPÉRIENCE</div>
                        <div className="divider div-transparent"></div>
                        <br/>
                        <div className="fila"> 
                            <div > <div className="btn">2020-present</div> <h3> e-commerce </h3> <small>Digital House</small></div>
                            <div> <img className ="logos" src="/dh.png" alt="Digital House Logo academy fullstack " />  </div>
                        </div>
                        <div className="paragraph"> 
                            <p>Collaborate with creative and development teams on the execution of ideas.</p> 
                        </div>

                       
                    </div>

                    <div className="box">
                        <div className="fila"> 
                            <div > <div className="btn">2020-present</div> <h3> Developer </h3> <small>Ideas Conectadas</small></div>
                            <div> <img className ="logos" src="/logo1.png" alt="" />  </div>
                        </div>
                        <div className="paragraph"> 
                            <p>Collaborate with creative and development teams on the execution of ideas.</p> 
                        </div>
                        
                    </div>
                                 
                </div>
                
                <div className="section">
                   
                   
                    <div className="box">
                        <div className="tittle"> <BsBookHalf size="2.2rem" color="#dc143c" />EDUCATION</div>
                        <div className="divider div-transparent"></div>
                        <br/>
                        <div className="fila"> 
                            <div > <div className="btn">2020-present</div> <h3>Full Stack </h3> <small>Digital House </small></div>
                            <div> <img className ="logos" src="/dh.png" alt="Digital House Logo academy fullstack " />  </div>
                        </div>
                        <div className="paragraph"> 
                            <p>Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri</p> 
                        </div>
                    </div>  


                    
                    
                    <div className="box">
                        <div className="fila"> 
                            <div > <div className="btn">2019-present</div> <h3> Economic CS </h3> <small>UBA </small></div>
                            <div> <img className ="logos" src="/uba.png" alt="Digital House Logo academy fullstack " />  </div>
                        </div>
                        <div className="paragraph"> 
                            <p>Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri</p> 
                        </div>
                    </div>                
                </div>
                </div>
               

                
                <div className="titulo">
                    <h1>Skills</h1>
                </div>
                <div className="divider div-transparent"></div>
                <div className="container-resume">
                    
                        <div className="box">
                            <div className="tittle"> <BsFillImageFill size="2.2rem" color="#dc143c"/> Front-End</div>
                            <div className="divider div-transparent"></div>
                            <br/>
                            <div className="atributes">
                                <div className="Progbars">
                                    <h3>React JS</h3>
                                    <div className="cbar">
                                        <div className="pbar" style={{width:"75%"}}></div>
                                    </div>
                                </div>
                                <div className="Progbars">
                                    <h3>Javascript</h3>
                                    <div className="cbar">
                                        <div className="pbar" style={{width:"75%"}}></div>
                                    </div>
                                </div>
                                <div className="Progbars">
                                    <h3>HTML</h3>
                                    <div className="cbar">
                                        <div className="pbar" style={{width:"75%"}}></div>
                                    </div>
                                </div>
                                <div className="Progbars">
                                    <h3>CSS</h3>
                                    <div className="cbar">
                                        <div className="pbar" style={{width:"75%"}}></div>
                                    </div>
                                </div>
                                <div className="Progbars">
                                    <h3>Bootstrap</h3>
                                    <div className="cbar">
                                        <div className="pbar" style={{width:"50%"}}></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>  
                        
                        
                        <div className="box">
                            <div className="tittle"> <BsFillTerminalFill size="2.2rem" color="#dc143c" /> Back-End</div>
                            <div className="divider div-transparent"></div>
                            <br/>
                            <div className="atributes">
                                <h3>Node</h3>
                                <div className="cbar">
                                    <div className="pbar" style={{width:"75%"}}></div>
                                </div>
                                <h3>express</h3>
                                <div className="cbar">
                                    <div className="pbar" style={{width:"75%"}}></div>
                                </div>
                                <h3>Postman</h3>
                                <div className="cbar">
                                    <div className="pbar" style={{width:"75%"}}></div>
                                </div>
                                <h3>React</h3>
                                <div className="cbar">
                                    <div className="pbar" style={{width:"75%"}}></div>
                                </div> <h3>React</h3>
                                <div className="cbar">
                                    <div className="pbar" style={{width:"75%"}}></div>
                                </div>
                            </div>
                        </div> 
                               
                      
                </div>
                <div className="titulo">
                    <h1>Tecnologies</h1>
                </div>
                <div className="divider div-transparent"></div>
                <div className="container-resume">
                    <div>
                        
                        <div>
                            <DiMongodb size="3rem"/>
                            <DiMysql size="3rem"/>
                            <DiReact size="3rem"/>
                            <DiNodejs size="3rem"/>
                            
                        </div>
                    </div>
                </div>
                
            </div>

        </motion.div>
    );
  }
  

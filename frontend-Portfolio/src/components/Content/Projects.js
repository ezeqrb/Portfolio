import React , { useState } from 'react'
import './Card.css'
import './Projects.css'
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive'



export default function Projects() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      const isMobile = useMediaQuery({
        query: '(max-device-width: 1223px)'
      })


    const dhproject = {
        id:1 ,
        key:"node",
        name:"proyecto integrador DH",
        type:"Shoes Store",
        img:"/dhproj.jpg",
        description:"This is a website developed in NodeJs(ejs) and my sql, its an e-commerce of sport shoes " 
    }
    const alexpe = {
        id:2 ,
        key:"wordpress",
        name:"WholeSaler store",
        type:"e-commerce",
        img:"/alexpe.png",
        description:"E-commerce realized in Wordpress for a wholesaler " 
    }
    const mundopesca ={
        id:3 ,
        key:"wordpress",
        name:"Fishing Store",
        type:"e-commerce",
        img:"/mundopes.png",
        description:"E-commerce realized on Wordpress, Fishing products " 
    }
    const dashboard ={
        id:4 ,
        key:"react",
        name:"DashBoard",
        type:"statadistics",
        img:"/dashboard.jpg",
        description:"Dashboard realize with ReactJs to monitoring all the information about E-commerce " 
    }
    const projects =[dhproject ,alexpe,mundopesca,dashboard]

    const [key , setKey] = useState('all');
    const [filter , setFilter] =useState([dhproject , alexpe , mundopesca, dashboard]);
    
   
        function changeKey(key) {
            console.log("ingresé a la funcion")
            console.log(key)
            setKey(key)
            if(key == "all"){
                setFilter([dhproject , alexpe , mundopesca, dashboard])
            }else{
                setFilter(projects.filter( proj => proj.key === key))} 
            }
   
    


    return (

        
      <motion.div
      initial={{ opacity: 0 , x: -400}}
      animate={{opacity: 1, x:0 }}
      exit={{ opacity: 0, x: -400}}
      >
            <div className={ isDesktopOrLaptop ? "Card" : "Card-movile" }>
                <div className="header">
                    
                        <div className="Tittle"><h1>Projects</h1></div>
                        <div className="divider div-transparent"></div>
                        
                        <div >
                            <motion.ul className="filtro">
                                <li key="1"> <button name="all" onClick={() => changeKey("all")}>All</button></li>
                                <li key="2"> <button name="node" onClick={() => changeKey("node")}>Node</button></li>
                                <li key="3"> <button name="react" onClick={() => changeKey("react")}>React</button></li>
                                <li key="4"> <button name="wordpress" onClick={() => changeKey("wordpress")}>Wordpress</button></li>
                            </motion.ul>
                        </div>
                    
                </div>
                <div className="divider div-transparent"></div>
                <div className="imgList">
                    {filter.map( item => 
                    <motion.li 
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{opacity: 1 }}
                        exit={{ opacity: 0 }}    
                    >  
                    <div className="smallCard">
                        <div><img src={item.img} className="imageCard" /></div>
                        <div className="typetext">type : {item.type}</div>
                        <div className="descript">{item.description}</div>
                    </div>
                   </motion.li>)}
                </div>
            </div>
        </motion.div>
    );
}
  

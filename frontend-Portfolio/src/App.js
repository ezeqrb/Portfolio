import React from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import Home from './components/Content/Home'
import About from './components/Content/About'
import Resume from './components/Content/Resume'
import Projects from './components/Content/Projects'
import Contact from './components/Content/Contact'
import { AnimatePresence } from "framer-motion"
import {BrowserRouter as Router,
        Switch,
        Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'



function App() {

  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-device-width: 1223px)'
  })
  

  return (
     <div className={ isDesktopOrLaptop ? "App" : "App-movile" } > 
        <Router>
          
          
          <div className="Nav">
            <NavBar />
          </div>
         
          <div className={ isDesktopOrLaptop ? "Static" : "Static-movile" }>
              <Profile />
          </div>
          
          <div className="Dynamic">
            <Route render={({location}) => (
                <AnimatePresence exitBeforeEnter >
                  <Switch location={location} key={location.pathname} >
                
                    <Route exact path="/" component={Home}  />
                    <Route path="/about" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/works" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    
                  </Switch>
                </AnimatePresence>
              )} />
          </div>
        </Router> 
      </div>
    
  );
}

export default App;

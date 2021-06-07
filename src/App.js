import './App.css';
import Row from "./Components/Row"
import Banner from "./Components/Banner";
import Nav from './Components/Nav';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Components/Home"
import About from "./Components/About"
import Vision from './Components/Vision';
import Projects from './Pages/Projects';
import Tabs from "./Pages/Tabs";
import ReactSocial from "./Projects/ReactSocial/src/App"
import App_tracker from "./Projects/TraveryMedia/ExpenseTracker/App"
import ic_App from './Projects/InsideCollege';
import { Index_calc } from './Projects/Calculator';
function App() {
  return (
     <Router>
     
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/vision" component={Vision}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/DS" component={Tabs}/>
        <Route path="/ReactSocial" component={ReactSocial}/>
        <Route path="/App_tracker" component={App_tracker}/> 
         <Route path="/ic_App" component={ic_App}/> 
         <Route path="/Index_calc" component={Index_calc}/>
      </Switch>
  
      </Router>
  );
}

export default App;

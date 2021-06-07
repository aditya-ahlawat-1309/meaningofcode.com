import React from 'react'

import '../App.css';
import Row from "./Row"
import Banner from "./Banner";
import Nav from "./Nav"
import Footer from './Footer';
import Taskbar from './Taskbar';
function Home() {
    return (
    <div className="App">
    <Nav/>
    <Banner/>
    <Row title="MEANING OF CODE ORIGINALS"/>
    <Taskbar/>

    <Footer/>
    
    </div>
    
    )
}

export default Home

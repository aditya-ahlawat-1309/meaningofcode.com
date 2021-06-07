import React from 'react'
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">

        <h1 className="nav_logo" style={{fontSize:"0.75rem",textDecorationLine:"none"}}>MEANING OC</h1>
            <div className="banner_buttons">
            <a href="/" className="banner_button" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>HOME</a>

            <a href="/projects" className="banner_button" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>PROJECTS</a>
            <a href="/about" className="banner_button" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>ABOUT CEO</a>
            <a href="/vision" className="banner_button" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>VISION</a>

        </div>
        </div>
    )
}

export default Nav

import React from 'react'
import "./Banner.css" 

function Banner() {
    return (
        <header className="banner"
        style={{  
  backgroundImage: "url(" + "https://maxoffsky.com/word/wp-content/uploads/2014/04/andreasbg.png" + ")",
  
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  height:"250px"
}}>

        <div className="banner_contents">
            <h1 className="banner_title" style={{fontSize:"2.15rem",color:"white"}}>MEANING OF CODE</h1>
        
        <div className="banner_buttons">
        
            <button className="banner_button" style={{fontSize:"0.75rem"}}>READ IT</button>
            <button className="banner_button" style={{fontSize:"0.75rem"}}>LOVE IT</button>
            <button className="banner_button" style={{fontSize:"0.75rem"}}>SHARE IT</button>

        </div>

        <h1 className="banner_description" style={{fontSize:"0.95rem", color:"white"}}>ONE PLACE FOR ALL YOUR REVISION</h1>
        
        </div>

        <div className="banner--fadedBottom"/>
            
        </header>
    )
}

export default Banner

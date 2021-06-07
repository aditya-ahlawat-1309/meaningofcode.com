import React, {useState} from 'react'
import poster_path from "../Media/poster_path.jpeg"; 
import "./Row.css";

function Row({title}) {

const [movies, setMovies] = useState([]);

    return (
        <div className="row">
            {/* title */}
            <h2 style={{fontSize:"1.25rem"}}>{title}</h2>
            {/* container -> posters */}
            <div className="row_posters">
                
                   


 {/* 3D Slideshow Section   */}
<section id="slideshow" style={{paddingTop:"5rem"}}>
      <div class="entire-content">
        <div class="content-carrousel">
          <figure class="shadow"><img src="https://images5.alphacoders.com/106/thumb-350-1068450.png"/></figure>
          <figure class="shadow"><img src="https://wallpapercave.com/wp/wp6559397.png"/></figure>
          <figure class="shadow"><img src="https://i.pinimg.com/originals/35/c2/df/35c2dfcefe6f56bb244aa4faa271d28c.png"/></figure>
          <figure class="shadow"><img src="https://c0.klipartz.com/pngpicture/698/419/gratis-png-tinder-aplicaciones-de-citas-en-linea-android-yesca.png"/></figure>
          <figure class="shadow"><img src="https://wallpaperaccess.com/full/2404603.png"/></figure>
          <figure class="shadow"><img src="https://wallpaperaccess.com/full/2403655.jpg"/></figure>
          <figure class="shadow"><img src="https://wallpaperaccess.com/full/1383655.jpg"/></figure>
          <figure class="shadow"><img src="https://i.pinimg.com/originals/c7/8f/2c/c78f2c15fdf293f6beb2b60b482b1b4a.jpg"/></figure>
          <figure class="shadow"><img src="https://wallpapercave.com/wp/wp5063337.jpg"/></figure>
    </div>
  </div>
</section>
                    

                     
            </div>
            
            <h2 style={{fontSize:"1.25rem"}}>NOTES</h2>
             <div className="row_posters">
                
                    <img
                    key={movies.id} 
                    className="row_poster" 
                    src={poster_path}/>
                    
            </div>
             
        </div>
    )
}

export default Row

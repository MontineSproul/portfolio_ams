import React, {useState} from 'react';
import { Gallery } from "react-grid-gallery";
import '../css/form.css';




function Home () {
    const images = [
        {
           src: process.env.PUBLIC_URL + "/images/apiQuiz.png",
           width: 320,
           height: 174,
           customOverlay: (
            <div className="custom-overlay__caption">
              <div  className="custom-overlay__tag">
              <a href="https://montinesproul.github.io/API_Quiz/" target="_blank" class="deployedSite"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          <div  className="custom-overlay__tag">
          <a href="https://github.com/MontineSproul/API_Quiz" target="_blank" class="githubRepo"><i className="fa-brands fa-github"></i></a>
          </div>
            </div>
          ),
        //    caption: <i className="fa-solid fa-arrow-up-right-from-square"></i>,
        },
        {
           src: process.env.PUBLIC_URL + "/images/weathermann.png",
           width: 320,
           height: 212,
           alt: "Project",
        },
     
        {
           src: process.env.PUBLIC_URL + "/images/weathermann.png",
           width: 320,
           height: 212,
        },
        {
            src: process.env.PUBLIC_URL + "/images/weathermann.png",
            width: 320,
            height: 212,
         },
         {
            src: process.env.PUBLIC_URL + "/images/weathermann.png",
            width: 320,
            height: 212,
         },
         {
            src: process.env.PUBLIC_URL + "/images/weathermann.png",
            width: 320,
            height: 212,
         }
     ];
     
    return (
        <div>
            <h2 className="portfolio">Portfolio</h2>
            <Gallery images={images} />
            {/* <div id="photo1">
            
                <a href="https://montinesproul.github.io/API_Quiz/" target="_blank" class="deployedSite"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="https://github.com/MontineSproul/API_Quiz" target="_blank" class="githubRepo"><i className="fa-brands fa-github"></i></a>
                </div> */}
            {/* <div id="photo3">{images[2]}</div>
            <div id="photo4">{images[3]}</div>
            <div id="photo5">{images[4]}</div>
            <div id="photo6">{images[5]}</div>
            <div id="photo1">{images[0]}</div> */}
         
        </div>
    )
    };

export default Home;
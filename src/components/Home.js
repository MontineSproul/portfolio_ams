import React, {useState} from 'react';
import { Gallery } from "react-grid-gallery";
import photo1 from "../assets/apiQuiz.png";
import photo2 from "../assets/scheduler.png";
import photo3 from "../assets/weatherfor.png";
import photo4 from "../assets/weathermann.png";
import photo5 from "../assets/weathermann.png";
import photo6 from "../assets/weathermann.png";


function Home () {
    const images = [
        {
           src:{photo1},
           width: 320,
           height: 174,
           isSelected: true,
           caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
           src: {photo2},
           width: 320,
           height: 212,
           tags: [
            
           ],
           alt: "Project",
        },
     
        {
           src: {photo3},
           width: 320,
           height: 212,
        },
        {
            src: {photo4},
            width: 320,
            height: 212,
         },
         {
            src: {photo5},
            width: 320,
            height: 212,
         },
         {
            src: {photo6},
            width: 320,
            height: 212,
         }
     ];
     
    return (
        <div>
            <h2 className="portfolio">Portfolio</h2>
            <Gallery images={images} />
        </div>
    )
};

export default Home;
import React, {useState} from 'react';
// import App from '../App';
import Home from './Home';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';

function Header() {
    const [page, setPage] = useState("Home")
        function switchPage () {
            if (page === "Home") {
                return (
                 // how to use a component once react is separated into different files 
                <Home/>
             )
        } else if (page === "AboutMe") {
                return (
            <div>
                 <AboutMe/>
            </div>
        )
     } else if (page === "Resume") {
             return (
                <div>
                     <Resume/>
                </div>
            )
        } else if (page === "Contact") {
             return (
                <div>
                    <Contact/>
                </div>
             )
         }
    }
    return (
        <div className='header'>
        <header>
        <h1 className="MSheader">Montine Sproul</h1>
      <nav>
        <ul className='nav'>
      <li><a onClick = {()=> setPage("Home")}>Home</a></li>
      <li><a onClick = {()=> setPage("AboutMe")}>About Me</a></li>
      <li><a onClick = {()=> setPage("Resume")}>Resume</a></li>
      <li><a onClick = {()=> setPage("Contact")}>Contact</a></li>
      </ul>
      </nav>
      
      </header>
      {switchPage()}
      </div>
 
    )
    
}

export default Header;
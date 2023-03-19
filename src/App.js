import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
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
    //always need a div to house all of the react you want since a return can only return one thing it will all live in the div
    <div className="App">
      {/* any single line of code can go inside the braces, call functions, variables, map, filter and reduce, terinarys  */}
      {/* {switchPage()} */}
      {/* below if it were to be a nav you would have a button for each one then have state be whatever page you are on */}
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
  );
}

export default App;


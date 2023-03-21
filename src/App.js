import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
    //always need a div to house all of the react you want since a return can only return one thing it will all live in the div
    <div className="App">
      {/* any single line of code can go inside the braces, call functions, variables, map, filter and reduce, terinarys  */}
      {/* {switchPage()} */}
      {/* below if it were to be a nav you would have a button for each one then have state be whatever page you are on */}
      {Header()}
      {/* {switchPage()} */}

      {Footer()}
    </div>
  );
}

export default App;


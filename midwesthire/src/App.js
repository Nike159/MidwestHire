import React from "react";
import './app.css';
import Navbar from "./Components/Navbar"
import Landing from './Components/Landing';
import About from "./Components/About";
import { Element } from "react-scroll";
import Contact from "./Components/Contact";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Element id="content">
        <Landing/>
      </Element>

      <Element id="aboutContainer">
        <About />
      </Element>
      
      <Element id="contactContainer">
        <Contact />
      </Element>
    </div>
  );
}

export default App;

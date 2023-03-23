import React from "react";
import Navbar from "./Components/Navbar";
import Landing from './Components/Landing';
import './app.css';
import About from "./Components/About";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;

import React from 'react'
import "./LandingStyles.css";
import {Parallax} from 'react-parallax'
import LandingImg from '../Assets/Landing.jpg';
import About from '../Assets/About.jpg';

function Landing() {
  return (
    <div>
      <Parallax strength={600} bgImage={LandingImg} >
        <div className='content'>
          <div className='text-content'>Midwest Hire</div>
        </div>
      </Parallax>
      <h1 className='About'>Who We Are</h1>
      <Parallax strength={-600} bgImage={LandingImg} >
        <div className='AboutContainer'>

        </div>
    </Parallax>
<div className='content'></div>
    </div>
  )
}

export default Landing


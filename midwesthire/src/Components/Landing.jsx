import React from 'react'
import "./LandingStyles.css";
import {Parallax} from 'react-parallax'
import LandingImg from '../Assets/Landing.jpg';
import About from '../Assets/About.jpg';

function Landing() {
  return (
    <div>
      <Parallax strength={600} bgImage={LandingImg} className="LandingImg">
        <div className='content'>
          <div className='text-content'>Midwest Hire</div>
        </div>
      </Parallax>
<div className='content'></div>
    </div>
  )
}

export default Landing


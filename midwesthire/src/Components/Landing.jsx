import React from 'react'
import "./LandingStyles.css";
import {Parallax} from 'react-parallax'
import LandingImg from '../Assets/Landing.jpg';


function Landing() {
  return (
    <div>
      <Parallax strength={600} bgImage={LandingImg} >
        <div className='content' id='content'>
          <div className='text-content'>
            <div className='title'>Midwest Hire</div>
            <p className='slogan'>We connect great companies with the perfect candidates.</p>
            <button className='call'>Contact Us</button>
          </div>
        </div>
      </Parallax>

  </div>
  )
}

export default Landing


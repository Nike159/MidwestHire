import React from 'react'
import "./LandingStyles.css";
import {Parallax} from 'react-parallax'
import LandingImg from '../Assets/Landing.jpg';


function Landing() {
  return (
    <div>
      <Parallax strength={300} bgImage={LandingImg} >
        <div className='content' id='content'>
          <div className='text-content'>
            <h1 className='title'>Midwest Hire</h1>
            <p className='slogan'>We connect great companies with the perfect candidates.</p>
            <button className='call'>Contact Us</button>
          </div>
        </div>
      </Parallax>

  </div>
  )
}

export default Landing


import React from 'react'
import "./LandingStyles.css";
import {Parallax} from 'react-parallax'
import LandingImg from '../Assets/Landing.jpg';
import About from '../Assets/About.jpg';

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

      <Parallax strength={-600} bgImage={LandingImg} >
      <section className='AboutContainer' id='about'>
        <div className='divy'>
          <h1 className='About'>Who We Are</h1>
          <p className='AboutText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, adipisci? Nesciunt unde excepturi eaque nisi cumque, nulla laudantium tempora facere animi obcaecati deserunt totam voluptatem tenetur vero recusandae necessitatibus ad!</p>
        </div>


      </section>
    </Parallax>

  </div>
  )
}

export default Landing


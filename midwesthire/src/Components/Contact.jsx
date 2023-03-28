import React from 'react'
import './ContactStyles.css'

function Contact() {
  return (
    <div className='contactContainer' id='contactContainer'>
        <div className='contact-box'>
            <div className='left'></div>
            <div className='right'>
                <h2>Contact Us</h2>
                <input type="text" className="field" placeholder="Your Name"></input>
                <input type="text" className="field" placeholder="Your Email"></input>
                <input type="text" className="field" placeholder="Phone"></input>
                <textarea placeholder="Message" class="field"></textarea>
                <button className="contact-btn">Send</button>
            </div>
        </div>
        
    </div>
  )
}
export default Contact

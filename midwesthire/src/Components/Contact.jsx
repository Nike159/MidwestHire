import React from 'react'
import './ContactStyles.css'

function Contact() {
  return (
    <div className='contactContainer' id='contactContainer'>
        <form className="contact-box" action="https://formspree.io/f/moqzwzrv" method="POST">
            <div className='left'></div>
            <div className='right'>
                <h2>Contact Us</h2>
                <input type="text" className="field" placeholder="Your Name" name="name"></input>
                <input type="email" className="field" placeholder="Your Email" name="_replyto"></input>
                <input type="phone" className="field" placeholder="Phone" name="Phone"></input>
                <textarea placeholder="Message" className="field" name="message"></textarea>
                <button className="contact-btn" type="submit">Send</button>
            </div>
        </form>
        
    </div>
  )
}
export default Contact

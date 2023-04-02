import React from 'react'
import "./AboutStyles.css";
import about from '../Assets/About.jpg'
import Landing from '../Assets/Landing.jpg'
import pic1 from '../Assets/pic1.jpg'

function About() {
  return (
    <div className='aboutConatiner' id='aboutContainer'>

        <div className='aboutTitle'>Who Are We</div>
        <div className='aboutText'>MidWest Hire is a result-driven Chicago-based staffing agency with a nationwide reach. We are focused on matching clients with the todiv talent in the IT and healthcare fields. We provide staffing services for direct hire opportunities contract to hire, and project-based employment</div>
        <div className="infoContainer">
            <div className="Info">
                <h1>For Employers</h1>
                <p className='aboutText'>Our industry development experts will understand your business needs and can connect you with top talent to support your project and organizational needs on a temporary or long-term basis. Our professionals are available for on-site or remote work all over the country. </p>
            </div>
            <div className='image'>
                <img alt='img' src={about}/>
                <img alt='img' src={Landing}/>
            </div>                           
        </div>
        <div className="infoContainer-reverse">
            <div className="Info">
                <h1>For Candidates</h1>
                <p className='aboutText'> Our Talent Acquisition agents can work together with you, and discuss opportunities with the best companies in the market. There are on-site and remote opportunities that you can choose from. Join our great network of professionals and sign up today. </p>
            </div>
            <div className='image'>
                <img alt='img' src={pic1}/>
                <img alt='img' src={Landing}/>
            </div>                           
        </div>
        <div className="infoContainer2">
            <div className="Info">
                <h1>Lets Work Together!</h1>
                <p className='aboutText'>At Midwest Hire, our focus is mainly on the Healthcare and IT industry. Let us work together so we can match you with the perfect candidate.</p>
            </div>
            <div className='image'>
                <img alt='img' src={pic1}/>
                <img alt='img' src={Landing}/>
            </div>                           
        </div>
    </div>

  )
}

export default About
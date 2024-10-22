import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        {/* <p>
          Welcome to Deeva Payon, where we are committed to providing the best financial services
          tailored to your needs. Our dedicated team is here to support you every step of the way.
        </p> */}
        <a href="#contact" className="contact-button">Contact Us &rarr;</a>
      </div>
    </div>
  )
}

export default AboutUs

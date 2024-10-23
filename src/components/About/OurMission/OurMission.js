import React from "react";
import "./OurMission.css"; 
import valuesicon from '../../../assest/values-icon.png'
import missionicon from '../../../assest/misson-icon.png'
import visionicon from '../../../assest/vision-icon.png'

const OurMission = () => {
  return (
    <div className="mission-vision-container">
      <div className="card">
        <div className="icon">
          <img src={missionicon} alt="Mission Icon" />
        </div>
        <h2>Our Mission</h2>
        <p>
          Our mission is to Revolutionise the digital landscape through
          innovative and impactful software solutions. With a deep commitment to
          develop the best software that could satisfy our client’s needs. We
          strive to empower businesses by delivering high-quality, custom
          software development that drives growth and success to our client’s
          business. <br /> <br /> We have a team of skilled developers and engineers dedicated
          to creating best software products that cater to your unique needs.
          Whether you require web applications, android applications, or custom
          software, we use the latest technologies and industry’s best practices
          to deliver best software . <br /> <br />By partnering with us, you gain access to a
          collaborative and experienced team that is passionate about your
          success. We work closely with you throughout the entire development
          process, providing personalised attention and support.
        </p>
      </div>
      <div className="card">
        <div className="icon">
          <img src={valuesicon} alt="Vision Icon" />
        </div>
        <h2>Our Vision</h2>
        <p>
        Our vision is to revolutionise the digital landscape through innovative and impactful software solutions. With a deep commitment to develop the best software that could satisfy our client’s needs. We strive to empower businesses by delivering high-quality, custom software development that drives growth and success to our client’s business. <br /> <br /> We have a team of skilled developers and engineers dedicated to creating the best software products that cater to your unique needs. Whether you require web applications, Android applications, or custom software, we use the latest technologies and industry’s best practices to deliver the best software. <br /> <br /> By partnering with us, you gain access to a collaborative and experienced team that is passionate about your success. We work closely with you throughout the entire development process, providing personalised attention and support.
        </p>
      </div>
      <div className="card">
        <div className="icon">
          <img src={visionicon} alt="Vision Icon" />
        </div>
        <h2>Our Goles</h2>
        <p>
        Our goals are to revolutionise the digital landscape through innovative and impactful software solutions. With a deep commitment to develop the best software that could satisfy our client’s needs. We strive to empower businesses by delivering high-quality, custom software development that drives growth and success to our client’s business. <br /> <br /> We have a team of skilled developers and engineers dedicated to creating the best software products that cater to your unique needs. Whether you require web applications, Android applications, or custom software, we use the latest technologies and industry’s best practices to deliver the best software. <br /> <br /> By partnering with us, you gain access to a collaborative and experienced team that is passionate about your success. We work closely with you throughout the entire development process, providing personalised attention and support.
        </p>
      </div>
      
    </div>
  );
};

export default OurMission;

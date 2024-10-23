import React from 'react';
import './Software.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {  FaCogs, FaLaptopCode, FaScrewdriver, FaRocket } from 'react-icons/fa';

// ServiceBox Component for Reusability
const ServiceBox = ({ href, iconClass, title, description, style }) => (
  <div className="service-box-wrapper cus_center" style={style}>
    <a href={href}>
      <div className="serviceBox-2">
        <div className="service-icon-3">
          <span><i className={iconClass}></i></span>
        </div>
        <h3 className="title">{title}<FontAwesomeIcon icon={faArrowRight} className="ml-2" /></h3>
        {description && <p className="description">{description}</p>}
      </div>
    </a>
  </div>
);

const Software = () => {
  return (
    <section className="banner-bg">
      <div className="container">
        <div className="content-wrapper">
          {/* Left Content */}
          <div className="left-title-box">
            <h1>Deeva Payon Private Limited</h1>
            <h4>Innovating for a better tomorrow.</h4>
            <p>
              Deeva Payon is a leading software development company with a mission to deliver innovative solutions
              that empower businesses and individuals to achieve their goals. With a team of experienced software
              engineers and designers, we specialize in creating custom software applications and mobile apps that
              are tailored to meet the unique needs of our clients.
            </p>
          </div>

          {/* Right Content (Services Boxes) */}
          <div className="right-content-box">
            <ServiceBox
              href="/services"
              iconClass={FaCogs}
              title="Services"
            //   description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              style={{ marginRight: '10px' }}
            />
            <ServiceBox
              href="/softwares"
              iconClass={FaRocket}
              title="Deeva Payons"
            //   description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              style={{ marginLeft: '10px' }}
            />
            <ServiceBox
              href="/fintech_services"
              iconClass={FaLaptopCode}
              title="Fintech Services"
              style={{ marginRight: '10px' }}
            />
            <ServiceBox
              href="/api-services"
              iconClass={FaScrewdriver}
              title="Our API's"
              style={{ marginLeft: '10px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;

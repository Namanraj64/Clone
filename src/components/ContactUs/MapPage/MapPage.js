import React from 'react';
import './MapPage.css';
// import emailjs from '@emailjs/browser';
const MapPage = () => {
  return (
    <div className="map-page">
      <div className="map-container">
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1St3NVf9NUFQIEjrKfN9jv1HX2g7hnFQ&ehbc=2E312F"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="info-cards">
        <div className="info-card">
          <div className="info-icon">📍</div>
          <h3>Address</h3>
          <p>Dunlap Ave D17, Phoenix, Arizona 85021, USA</p>
          <a href="#">Learn More</a>
        </div>
        <div className="info-card">
          <div className="info-icon">✉️</div>
          <h3>Email</h3>
          <p>demo@yourwebsite.com</p>
          <p>you@website.com</p>
          <a href="#">Learn More</a>
        </div>
        <div className="info-card">
          <div className="info-icon">📞</div>
          <h3>Phone</h3>
          <p>0800 212 123 45 67</p>
          <p>0800 212 123 45 68</p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default MapPage;

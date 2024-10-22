import React from 'react';
import './WhatsApp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const WhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=917689815576&text=Hello, more information !" // Replace with your WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsApp;

import React, { useRef, useState } from 'react';
import './Form.css'; // Make sure to use the existing CSS for styling
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form values
    const contactName = form.current['user_name'].value;
    const contactEmail = form.current['user_email'].value;
    const contactProject = form.current['user_subject'].value;

    // Check if required fields are filled
    if (contactName === '' || contactEmail === '' || contactProject === '') {
      setMessage('Please fill in all required fields 📩');
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm(
      'service_1bwmub4',  // Replace with your service ID
      'template_y2wrayh', // Replace with your template ID
      form.current,
      'mUK_xnv7-7m3_UjCf' // Replace with your public key
    ).then(() => {
      setMessage('Message sent ✅');

      // Clear form fields
      form.current.reset();

      // Remove message after 5 seconds
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }, (error) => {
      alert('OOPS! Something went wrong...', error);
    });
  };

  return (
    <div className="contact-form-container">
      <h3 className="contact-title">Get in Touch</h3>
      <h2 className="contact-subtitle">Send Your Message</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact-form">
        <div className="form-group">
          <input type="text" name="user_name" placeholder="Your Name *" required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <input type="email" name="user_email" placeholder="Email *" required />
          </div>
          <div className="form-group">
            <input type="text" name="user_phone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group">
          <input type="text" name="user_subject" placeholder="Subject" required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Write Message ..." rows="5"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Send Message</button>
        </div>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default Form;

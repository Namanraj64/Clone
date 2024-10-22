// src/pages/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MapPage from '../components/ContactUs/MapPage/MapPage';
import ContactPage from '../components/ContactUs/ContactPage/ContactPage';
import Form from '../components/ContactUs/Form/Form';
const Contact = () => {
  return (
    <>
      <Header />
      <ContactPage/>
      <MapPage/>
      <Form/>
      <Footer />
    </>
  );
};

export default Contact;
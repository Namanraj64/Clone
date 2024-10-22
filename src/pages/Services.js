// src/pages/Services.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Servicespage from '../Services/Servicespage'

const services = [
  { title: 'Web Development', description: 'Building robust websites tailored for your business.' },
  { title: 'Mobile App Development', description: 'Creating intuitive and engaging mobile applications.' },
  { title: 'Cloud Solutions', description: 'Offering scalable cloud services for modern businesses.' },
  { title: 'Digital Marketing', description: 'Comprehensive marketing strategies for your brand.' },
];

const Services = () => {
  return (
    <>
      <Header />
      <Servicespage/>
      <Footer />
    </>
  );
};

export default Services;

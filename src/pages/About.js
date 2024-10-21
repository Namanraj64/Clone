// src/pages/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {
  return (
    <>
    <Header/>
    <Container sx={{ padding: '4rem 0' }}>
      <Typography variant="h4" gutterBottom>
        About Deeva Payon
      </Typography>
      <Typography variant="body1" paragraph>
        Deeva Payon is a leading software development company specializing in delivering high-quality solutions to clients worldwide. Our mission is to empower businesses with innovative technology, ensuring growth and success. Our team of experts is committed to building scalable, secure, and efficient applications tailored to your needs.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '2rem' }}>
        Our Vision
      </Typography>
      <Typography variant="body1" paragraph>
        To become the most trusted software development partner for businesses by providing exceptional service, innovative solutions, and a client-first approach.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '2rem' }}>
        Our Team
      </Typography>
      <Typography variant="body1">
        We are a team of passionate developers, designers, and strategists dedicated to delivering the best results for our clients.
      </Typography>
    </Container>
    <Footer/>
    </>
  );
};

export default About;

// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features'
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: '1 0 auto', // Allows the main content to expand to fill available space
        }}
      >
        <Hero/>
      <Services />
      <AboutUs />
      <Testimonials />
      <Features />
      <ContactUs/>
      </Box>
      <Footer />
      </Box>
    </>
  );
};

export default Home;

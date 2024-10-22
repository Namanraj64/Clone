// src/Services/B2BSoftware.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from '../components/Header'; // Import your Header component
import Footer from '../components/Footer'; // Import your Footer component

const B2BSoftware = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ padding: '4rem 0', textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>B2B Software Solutions</Typography>
          <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
            We provide custom B2B software solutions that drive innovation and help companies optimize their business processes. Our expert team offers end-to-end solutions tailored to your specific needs.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default B2BSoftware;

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebsiteDevelopment = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ padding: '4rem 0', textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>Website Development</Typography>
          <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
            We create dynamic, responsive websites that provide an engaging user experience. From e-commerce platforms to corporate websites, we build solutions that meet your business goals.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default WebsiteDevelopment;

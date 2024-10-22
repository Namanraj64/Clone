import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fintechsoftwaredevelopment = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ padding: '4rem 0', textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>Graphic Design</Typography>
          <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
            Our creative graphic design team brings your ideas to life with visually appealing designs that resonate with your target audience. Whether it's branding, logos, or marketing materials, we have you covered.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default fintechsoftwaredevelopment;

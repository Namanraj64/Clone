// src/components/Hero.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/path/to/your/image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Deeva Payon
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        We provide the best solutions for your business.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={scrollToServices}
        sx={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
        component={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Discover More
      </Button>
    </Box>
  );
};

export default Hero;

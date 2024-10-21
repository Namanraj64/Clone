// src/components/Hero.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

import backimg from "../assest/HeroBackground.jpg"; // Corrected asset path

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
        position: 'relative', // Set relative positioning
        overflow: 'hidden', // Hide overflow
        color: '#ffff',
        textAlign: 'center',
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Blur */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)', // Apply blur effect
          zIndex: -1, // Send the background to the back
        }}
      />

      <Typography variant="h2" gutterBottom>
        <b>Welcome to Deeva Payon</b>
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 2}}>
        <b>We provide the best solutions for your business.</b>
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

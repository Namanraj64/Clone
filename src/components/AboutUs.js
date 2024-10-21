// src/components/AboutUs.js
import React from 'react';
import { Container, Grid, Typography, Box, Fade } from '@mui/material';
import AboutUsImg from '../assest/about-us.jpg'

const AboutUs = () => {
  return (
    <Container sx={{ padding: '4rem 0' , backgroundColor: 'red' }}>
      <Grid container spacing={4} alignItems="center">
        <Fade in timeout={1000}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" paragraph>
                We are a company dedicated to providing top-notch solutions for our clients. 
                Our team of experts ensures the highest quality service and customer satisfaction.
              </Typography>
              <Typography variant="body1">
                Our mission is to innovate and deliver exceptional solutions that help businesses grow and succeed.
              </Typography>
            </Box>
          </Grid>
        </Fade>
        <Fade in timeout={1500}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={AboutUsImg} // Replace with your image path
              alt="About Us"
              sx={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
        </Fade>
      </Grid>
    </Container>
  );
};

export default AboutUs;

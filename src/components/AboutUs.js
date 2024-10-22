// src/components/AboutUs.js
import React from 'react';
import { Container, Grid, Typography, Box, Fade, Button } from '@mui/material';
import AboutUsImg from '../assest/about-us.jpg';

const AboutUs = () => {
  return (
    <Box sx={{ background: '#F0F8FF', padding: '4rem 0' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Fade in timeout={1000}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Who We Are
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#555', fontSize: '1.1rem' }}>
                  We are a leading software solutions company committed to driving business success through 
                  innovation and technology. Our team of experienced professionals is dedicated to delivering 
                  cutting-edge services tailored to our clients' needs.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black', fontSize: '1.1rem' }}>
                  With a strong focus on client satisfaction, we provide comprehensive solutions for a wide 
                  range of industries. We strive to enhance operational efficiency, improve customer engagement, 
                  and deliver outstanding business outcomes.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#555' }}>
                  Our mission is to provide innovative, reliable, and scalable solutions that empower businesses 
                  to achieve their goals.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Core Values
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#555' }}>
                  Integrity, Innovation, Customer-Centricity, and Excellence are at the heart of everything we do.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ marginTop: '2rem', textTransform: 'none', borderRadius: '8px' }}
                >
                  Learn More About Us
                </Button>
              </Box>
            </Grid>
          </Fade>

          <Fade in timeout={1500}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={AboutUsImg}
                alt="About Us"
                sx={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              />
            </Grid>
          </Fade>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;

// src/pages/SoftwareDevelopment.js
import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Softimg from '../assest/software-development.jpg'

const SoftwareDevelopment = () => {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#f4f6f8', padding: '7rem 0' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '2rem' }}
          >
            Software Development
          </Typography>

          <Grid container spacing={4}>
            {/* Left Text Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ marginBottom: '1.5rem' }}>
                Custom Software Solutions Tailored to Your Business
              </Typography>
              <Typography variant="body1" paragraph>
                At Deeva Payon, we specialize in delivering bespoke software solutions designed to address your unique business challenges. Whether you need a robust enterprise system, a custom mobile application, or a cloud-based solution, we have the expertise to make your vision a reality.
              </Typography>
              <Typography variant="body1" paragraph>
                Our team follows an agile development process to ensure that your software is built efficiently, with continuous feedback and iterations, ensuring a product that exceeds your expectations.
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ marginTop: '1.5rem' }}>
                Get Started
              </Button>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6}>
              <img 
                src={Softimg} 
                alt="Software Development" 
                style={{ width: '100%', borderRadius: '8px' }} 
              />
            </Grid>
          </Grid>

          {/* Our Services Section */}
          <Box sx={{ marginTop: '4rem' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Our Software Development Services
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We offer a wide range of custom software development services to suit your needs.
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Custom Software Development
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Building tailor-made software applications that solve your specific business challenges and enhance operational efficiency.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Mobile Application Development
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Develop mobile applications that align with your business goals, providing seamless user experiences across all platforms.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Cloud Solutions
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Leverage the power of the cloud to scale your business and improve agility with secure and reliable cloud-based software solutions.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Why Choose Us Section */}
          <Box sx={{ marginTop: '4rem' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Why Choose Deeva Payon?
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Our software development services are designed to drive innovation, increase efficiency, and ensure long-term success.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              With our experienced team of developers and a deep understanding of the latest technologies, we ensure that your software is not only functional but also scalable, secure, and future-proof.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;

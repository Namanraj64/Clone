// src/pages/FintechSoftwareDevelopment.js
import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FintechSoftwareDevelopment = () => {
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
            Fintech Software Development
          </Typography>

          <Grid container spacing={4}>
            {/* Left Text Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ marginBottom: '1.5rem' }}>
                Secure, Scalable, and Innovative Fintech Solutions
              </Typography>
              <Typography variant="body1" paragraph>
                Deeva Payon delivers cutting-edge fintech software solutions to address the rapidly evolving needs of the financial industry. From secure payment gateways to blockchain solutions, we provide end-to-end services to ensure compliance, security, and innovation in every project.
              </Typography>
              <Typography variant="body1" paragraph>
                Our expert team specializes in building fintech platforms that meet both customer expectations and industry regulations, empowering businesses to succeed in the financial technology space.
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ marginTop: '1.5rem' }}>
                Get Started
              </Button>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6}>
              <img 
                src="/path-to-fintech-image.jpg" 
                alt="Fintech Software Development" 
                style={{ width: '100%', borderRadius: '8px' }} 
              />
            </Grid>
          </Grid>

          {/* Our Services Section */}
          <Box sx={{ marginTop: '4rem' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Our Fintech Services
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We offer a wide range of financial technology services tailored to your needs.
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Custom Fintech Applications
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Tailored fintech applications designed to drive growth and meet the specific needs of your business.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Payment Gateway Integration
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Secure, efficient, and reliable payment gateway solutions to streamline online transactions.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Digital Wallet Solutions
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Enable digital wallet solutions for your customers with easy integration and secure transactions.
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
              Our fintech solutions are secure, scalable, and designed to ensure your success.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              With a team of experienced fintech developers, we prioritize security, compliance, and customer-centric innovation in every solution we create.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default FintechSoftwareDevelopment;

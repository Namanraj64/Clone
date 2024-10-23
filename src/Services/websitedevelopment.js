// src/Services/WebsiteDevelopment.js
import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { Devices, Code, Web, Security } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import webDevelopmentImage from '../assest/websitedevelopment.png'

const WebsiteDevelopment = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          padding: '7rem 0',
        }}
      >
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
              marginBottom: '3rem',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: 2 }}>
                Website Development
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Deeva Payon delivers custom-built websites designed to elevate your online presence. Our solutions are crafted for speed, security, and scalability, helping businesses of all sizes thrive in the digital age.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ marginTop: 3 }}
                href="/contact"
              >
                Get Started
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src={webDevelopmentImage}
                alt="Website Development"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Box>
          </Box>

          {/* Services Offered */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginBottom: '2rem' }}
          >
            Our Website Development Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Devices fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Responsive Design
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    We build websites that adapt seamlessly to any device, ensuring an optimal experience for all users, whether they’re browsing on mobile, tablet, or desktop.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Code fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Custom Development
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Our websites are built from the ground up, tailored to meet the unique needs of your business, ensuring that your brand stands out with a customized online presence.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Web fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      CMS Integration
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    We provide seamless integration with popular Content Management Systems (CMS) like WordPress and custom-built CMS solutions for easy website management.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Security fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Security & Performance
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Your website is built with speed and security in mind, ensuring fast load times and robust protection against threats to keep your data and users safe.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Why Choose Us */}
          <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Why Choose Deeva Payon for Website Development?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
              At Deeva Payon, we’re not just building websites—we’re creating digital experiences. From the latest web technologies to responsive and secure designs, we ensure that your business shines online. Let us take care of everything from design to deployment, so you can focus on growing your business.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
            >
              Start Your Project Today
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default WebsiteDevelopment;

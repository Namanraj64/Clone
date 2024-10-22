// src/Services/AndroidAppDevelopment.js
import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { Android, Code, MobileFriendly, Security } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import appDevelopmentImage from '../assest/AndroidAppDevelopment.png'; 

const AndroidAppDevelopment = () => {
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
                Android Application Development
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                At Deeva Payon, we specialize in creating powerful and intuitive Android applications tailored to your business needs. Our solutions are designed to offer an excellent user experience, backed by cutting-edge technology, to help you engage your audience more effectively.
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
                src={appDevelopmentImage}
                alt="Android Application Development"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Box>
          </Box>

          {/* Services Offered */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginBottom: '2rem' }}
          >
            What We Offer
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
                    <Android fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Native Android Development
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Our team builds high-performance native Android apps using the latest technologies, ensuring optimal functionality, speed, and a seamless user experience.
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
                      Cross-Platform Development
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    We develop apps that work seamlessly across multiple platforms, including Android and iOS, leveraging frameworks like React Native to deliver consistent experiences across devices.
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
                    <MobileFriendly fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      User-Centric Design
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Our apps are built with the user in mind. We focus on creating intuitive interfaces and smooth user journeys to ensure engagement and satisfaction.
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
                      Security and Compliance
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    We prioritize the security of your application, ensuring it meets industry standards and compliance requirements to protect your data and users.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Why Choose Us */}
          <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Why Choose Deeva Payon for Android Development?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
              Our expertise in Android development is backed by years of experience and a commitment to quality.
              We provide scalable solutions that grow with your business, ensuring that your app remains relevant in the ever-evolving mobile ecosystem.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
            >
              Let's Build Your App Together
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AndroidAppDevelopment;

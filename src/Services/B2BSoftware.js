// src/Services/B2BSoftware.js
import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { Business, Build, Computer, Engineering, AccountTree } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import b2bSoftwareImage from '../assest/B2B Software Solutions.png'; // Image you'll provide

const B2BSoftware = () => {
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
                B2B Software Solutions
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                At Deeva Payon, we provide advanced B2B software solutions that enhance business operations, improve customer relationships, and streamline processes. Our scalable and secure software solutions help businesses achieve their goals with efficiency.
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
                src={b2bSoftwareImage}
                alt="B2B Software Solutions"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Box>
          </Box>

          {/* Services Offered */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginBottom: '2rem' }}
          >
            Our B2B Software Solutions
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
                    <Build fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Custom Enterprise Software
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Tailored software solutions designed to meet the specific needs of your business, enhancing productivity and growth.
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
                    <Computer fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      CRM & ERP Solutions
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Comprehensive Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) software to manage your operations seamlessly.
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
                    <Engineering fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Automation Solutions
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Implementing automation solutions to optimize workflows and reduce manual processes, resulting in cost savings and efficiency gains.
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
                    <AccountTree fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Supply Chain Management
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Our software solutions help businesses manage their supply chain efficiently, ensuring better coordination and inventory management.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Why Choose Us */}
          <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Why Deeva Payon for B2B Software Solutions?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
              Deeva Payon offers cutting-edge B2B software solutions that are tailored to meet the unique challenges of businesses across industries. Our team is dedicated to delivering secure, scalable, and high-performance software that enhances business efficiency and fosters growth.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
            >
              Let’s Build Your Business Software
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default B2BSoftware;

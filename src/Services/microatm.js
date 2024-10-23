// src/pages/MicroATM.js
import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { Payment, Security, Speed, LocalAtm } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import microATMImage from '../assest/AndroidAppDevelopment.png'; // Image you'll provide

const MicroATM = () => {
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
                Micro ATM Services
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Deeva Payon offers state-of-the-art Micro ATM solutions that bring banking services closer to your customers. Our Micro ATMs allow for cash withdrawals, deposits, balance inquiries, and much more, revolutionizing financial inclusion in rural and urban areas alike.
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
                src={microATMImage}
                alt="Micro ATM Services"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Box>
          </Box>

          {/* Services Offered */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginBottom: '2rem' }}
          >
            Our Micro ATM Services
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
                    <Payment fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Cash Withdrawal & Deposit
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Our Micro ATMs allow users to withdraw or deposit cash quickly and securely, enhancing financial accessibility in underserved regions.
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
                      Secure Transactions
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Our solutions ensure that every transaction is processed with the highest security standards to protect both users and operators.
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
                    <Speed fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Fast Processing
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Our Micro ATM systems process transactions in real time, ensuring customers get immediate access to their funds without delays.
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
                    <LocalAtm fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Financial Inclusion
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Bringing financial services to remote areas, our Micro ATM solutions promote financial inclusion by offering banking services in previously unreachable locations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Why Choose Us Section */}
          <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Why Choose Deeva Payon for Micro ATM Solutions?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
              Our Micro ATM solutions are designed to be reliable, secure, and user-friendly. With our cutting-edge technology, you can extend banking services to those who need them most, enhancing customer satisfaction and business opportunities in rural and underserved areas.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
            >
              Start Your Micro ATM Journey
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default MicroATM;

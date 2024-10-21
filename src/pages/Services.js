// src/pages/Services.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
  { title: 'Web Development', description: 'Building robust websites tailored for your business.' },
  { title: 'Mobile App Development', description: 'Creating intuitive and engaging mobile applications.' },
  { title: 'Cloud Solutions', description: 'Offering scalable cloud services for modern businesses.' },
  { title: 'Digital Marketing', description: 'Comprehensive marketing strategies for your brand.' },
];

const Services = () => {
  return (
    <>
      <Header />
      <Container sx={{ padding: '7rem 0' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Services;

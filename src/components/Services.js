// src/components/Services.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { HomeRepairService, Security, Business } from '@mui/icons-material';

const services = [
  {
    icon: <HomeRepairService fontSize="large" />,
    title: 'Service 1',
    description: 'High-quality repair services to keep your business running smoothly.',
  },
  {
    icon: <Security fontSize="large" />,
    title: 'Service 2',
    description: 'State-of-the-art security solutions for your business needs.',
  },
  {
    icon: <Business fontSize="large" />,
    title: 'Service 3',
    description: 'Professional consulting services to grow your business effectively.',
  },
];

const Services = () => {
  return (
    <Container id="services-section" sx={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          // Update the Grid layout in src/components/Services.js
<Grid item xs={12} sm={6} md={4} key={index}>
  <Card
    sx={{
      transition: '0.3s',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
      padding: { xs: '1rem', md: '2rem' },
    }}
  >
    <CardContent sx={{ textAlign: 'center' }}>
      <Box sx={{ mb: 2 }}>{service.icon}</Box>
      <Typography variant="h6" sx={{ margin: '1rem 0' }}>
        {service.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {service.description}
      </Typography>
    </CardContent>
  </Card>
</Grid>

        ))}
      </Grid>
    </Container>
  );
};

export default Services;

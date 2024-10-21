// src/components/Features.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const features = [
  { title: 'High Performance', description: 'Our services are optimized for speed and efficiency.' },
  { title: 'Secure', description: 'We ensure your business data is safe and secure.' },
  { title: 'User-Friendly', description: 'Our solutions are easy to use and customizable.' },
];

const Features = () => {
  return (
    <Container sx={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Why Choose Us
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'center', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
              <Typography variant="h6">{feature.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;

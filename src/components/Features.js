// src/components/Features.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Speed, Lock, Build, TrendingUp, HeadsetMic, Lightbulb } from '@mui/icons-material'; // Additional icons

const features = [
  {
    title: 'High Performance',
    description: 'Our services are optimized for speed and efficiency, ensuring a seamless experience.',
    icon: <Speed fontSize="large" />,
  },
  {
    title: 'Secure',
    description: 'We ensure your business data is safe with industry-leading security protocols.',
    icon: <Lock fontSize="large" />,
  },
  {
    title: 'User-Friendly',
    description: 'Our solutions are intuitive, customizable, and easy to use for all user levels.',
    icon: <Build fontSize="large" />,
  },
  {
    title: 'Scalable Solutions',
    description: 'Our services are designed to grow with your business, adapting to increasing demands.',
    icon: <TrendingUp fontSize="large" />,
  },
  {
    title: '24/7 Customer Support',
    description: 'We offer round-the-clock support to ensure your business runs smoothly.',
    icon: <HeadsetMic fontSize="large" />,
  },
  {
    title: 'Innovative Technologies',
    description: 'We leverage cutting-edge technology to deliver state-of-the-art solutions.',
    icon: <Lightbulb fontSize="large" />,
  },
];

const Features = () => {
  return (
    <Container sx={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Why Choose Us
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        Explore the key features that make our services stand out in the industry.
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                padding: '2rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1976d2 30%, #64b5f6 100%)',
                color: 'white',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{feature.icon}</Box> {/* Display the relevant icon */}
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
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

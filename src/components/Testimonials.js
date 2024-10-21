// src/components/Testimonials.js
import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Ecuzen has transformed our business with its innovative solutions.',
    name: 'John Doe',
    position: 'CEO, Example Corp',
  },
  {
    quote: 'Their service is exceptional, and they truly care about customer satisfaction.',
    name: 'Jane Smith',
    position: 'Marketing Head, ABC Ltd',
  },
  {
    quote: 'Reliable, professional, and highly recommended.',
    name: 'Robert Williams',
    position: 'CTO, Tech Solutions',
  },
];

const Testimonials = () => {
  return (
    <Container sx={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Our Clients Say
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Paper
            key={index}
            sx={{
              padding: '2rem',
              maxWidth: 400,
              margin: '0 auto',
              textAlign: 'center',
            }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <Typography variant="body1" paragraph>
              "{testimonial.quote}"
            </Typography>
            <Typography variant="h6">{testimonial.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {testimonial.position}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Testimonials;

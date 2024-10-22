// src/components/Testimonials.js
import React from 'react';
import { Box, Typography, Container, Paper, Grid, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'DeevaPayon has transformed our business with its innovative solutions. They truly understand our needs and offer timely, professional solutions.',
    name: 'Naman Raj',
    position: 'Web Developer, DeevaPayon',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHArq1dtZUoYw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712225941368?e=1735171200&v=beta&t=M36QHl9xdWOyF2smQFqIY0ZFsYrb5QUTOovrHwtJjvA', // Placeholder image
    rating: 5,
  },
  {
    quote: 'Their service is exceptional, and they truly care about customer satisfaction. We’ve seen great results in our workflow efficiency.',
    name: 'Ankit Rai',
    position: 'Project Head, DeevaPayon',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQGsCQJHKDWYxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729147988112?e=1735171200&v=beta&t=iVXve1mJGvOP05VXFEmUuSlfQM1qC-4q8o2tR1MEfBo', // Placeholder image
    rating: 4,
  },
  {
    quote: 'Reliable, professional, and highly recommended. Their team is always ready to help and goes the extra mile for us.',
    name: 'Ritu Raj Singh',
    position: 'Web Developer, DeevaPayon',
    image: 'https://media.licdn.com/dms/image/v2/D5635AQF0oB6Zs8eLyQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726997150297?e=1730178000&v=beta&t=efrZDulI_2vqIK9YN8hxjVpE5nBN2WuVY3BvRD8gJ6g', // Placeholder image
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: '#f3f4f7', padding: '4rem 0' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          What Our Clients Say
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Hear from our satisfied clients and partners.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  padding: '2rem',
                  textAlign: 'center',
                  borderRadius: '10px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{ width: 80, height: 80, margin: '0 auto 1rem' }}
                />
                <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', color: '#555' }}>
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {testimonial.position}
                </Typography>
                <Rating
                  value={testimonial.rating}
                  readOnly
                  precision={0.5}
                  sx={{ color: '#FFD700', marginTop: '0.5rem' }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;

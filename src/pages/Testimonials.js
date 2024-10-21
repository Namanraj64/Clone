// src/pages/Testimonials.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

const testimonials = [
  { name: 'John Doe', feedback: 'Deeva Payon transformed our business with their expertise.' },
  { name: 'Jane Smith', feedback: 'Professional and reliable service, highly recommended!' },
  { name: 'Alex Johnson', feedback: 'Exceptional quality and support throughout the project.' },
];

const Testimonials = () => {
  return (
    <>
    <Header/>
    <Container sx={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  "{testimonial.feedback}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer/>
    </>
  );
};

export default Testimonials;

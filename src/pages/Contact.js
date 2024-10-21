// src/pages/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <Container sx={{ padding: '4rem 0' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
        >
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" type="email" variant="outlined" fullWidth />
          <TextField label="Message" multiline rows={4} variant="outlined" fullWidth />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;

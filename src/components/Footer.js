// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', padding: '2rem 0', marginTop: 'auto' ,  }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: contact@ecuzen-clone.com
            </Typography>
            <Typography variant="body2">
              Phone: +123-456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#90caf9' } }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#90caf9' } }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#90caf9' } }}>
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', padding: '2rem 0', marginTop: 'auto' }}>
      <Container>
        <Grid container spacing={4}>
          {/* Company Info Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are one of the best B2B, B2C, and white label software provider companies in India.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              About Us
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Career
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Blogs
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Contact Us
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              FAQ
            </Link>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Typography variant="body2" component="ul" sx={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>B2B Solutions</li>
              <li>Application Development</li>
              <li>Website Development</li>
              <li>Software Development</li>
              <li>CRM Solutions</li>
              <li>Cloud Solutions</li>
              <li>Graphic Design</li>
            </Typography>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2">
              Jaipur-302017, Rajasthan, India
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
              Phone: 9785909785
            </Typography>
            <Typography variant="body2">
              Email: info@deevapayon.com
            </Typography>
          </Grid>
        </Grid>

        {/* Social Links */}
        <Box mt={4} display="flex" justifyContent="center">
          <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#90caf9' } }}>
            <Facebook />
          </IconButton>
          <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#90caf9' } }}>
            <Twitter />
          </IconButton>
          <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#90caf9' } }}>
            <Instagram />
          </IconButton>
        </Box>

        {/* Copyright Section */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; 2024 Deevapayon. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>

          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0d47a1',
        color: '#fff',
        padding: '4rem 0 2rem',
        borderTop: '4px solid #42a5f5',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                position: 'relative',
                paddingBottom: '0.5rem',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '50%',
                  height: '2px',
                  backgroundColor: 'red',
                },
              }}
            >
              Deeva Payon
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              Deeva Payon is a leading provider of B2B, B2C, and white-label software solutions across India. Our expertise in software development and cloud solutions helps businesses thrive.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#ffff',
                position: 'relative',
                paddingBottom: '0.5rem',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '50%',
                  height: '2px',
                  backgroundColor: 'red',
                },
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <Link href="/about" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  Career
                </Link>
              </li>
              <li>
                <Link href="/blog" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" color="inherit" underline="hover" sx={{ display: 'block' }}>
                  FAQ
                </Link>
              </li>
            </Box>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#ffff',
                position: 'relative',
                paddingBottom: '0.5rem',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '50%',
                  height: '2px',
                  backgroundColor: 'red',
                },
              }}
            >
              Our Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
  <li>
    <Link href="/services/b2bsoftware" underline="none" color="inherit">
      <Typography variant="body2">B2B Solutions</Typography>
    </Link>
  </li>
  <li>
    <Link href="/services/andriodapp" underline="none" color="inherit">
      <Typography variant="body2">Application Development</Typography>
    </Link>
  </li>
  <li>
    <Link href="/services/websitedevelopment" underline="none" color="inherit">
      <Typography variant="body2">Website Development</Typography>
    </Link>
  </li>
  <li>
    <Link href="/services/softwaredevelopment" underline="none" color="inherit">
      <Typography variant="body2">Software Development</Typography>
    </Link>
  </li>
  <li>
    <Link href="/services/b2bsoftware" underline="none" color="inherit">
      <Typography variant="body2">B2B Softwere</Typography>
    </Link>
  </li>
  <li>
    <Link href="/services/graphic-design" underline="none" color="inherit">
      <Typography variant="body2">Graphic Design</Typography>
    </Link>
  </li>
  <li>
    <Link href="/services/micro-atm" underline="none" color="inherit">
      <Typography variant="body2">Micro ATM</Typography>
    </Link>
  </li>
</Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#ffff',
                position: 'relative',
                paddingBottom: '0.5rem',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '50%',
                  height: '2px',
                  backgroundColor: 'red',
                },
              }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 2 }}>
              Jaipur-302020, Rajasthan, India
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
              Phone: <Link href="tel:+919785909785" color="inherit">9785909785</Link>
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              Email: <Link href="mailto:info@deevapayon.com" color="inherit">info@deevapayon.com</Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ margin: '2rem 0', backgroundColor: '#42a5f5' }} />

        {/* Social Links and Copyright */}
        <Box textAlign="center" mt={4}>
        <Box>
  <IconButton 
    href="https://www.facebook.com/people/Deeva-Payon-Global-Pvt-Ltd/61565814323246/" 
    sx={{ color: '#fff', '&:hover': { color: '#42a5f5' } }} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Facebook fontSize="large" />
  </IconButton>
  
  <IconButton 
    href="https://x.com/deevapayon" 
    sx={{ color: '#fff', '&:hover': { color: '#42a5f5' } }} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Twitter fontSize="large" />
  </IconButton>
  
  <IconButton 
    href="https://www.instagram.com/deevapayon/" 
    sx={{ color: '#fff', '&:hover': { color: '#42a5f5' } }} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Instagram fontSize="large" />
  </IconButton>
  
  <IconButton 
    href="https://www.linkedin.com/company/deevapayon-private-limited" 
    sx={{ color: '#fff', '&:hover': { color: '#42a5f5' } }} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <LinkedIn fontSize="large" />
  </IconButton>
</Box>

          <Typography variant="body2" sx={{ marginTop: '1rem', fontWeight: 'bold' }}>
            &copy; 2024 Deeva Payon. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

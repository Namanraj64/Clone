// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, useScrollTrigger, Slide } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assest/cropped-DEEVA-LOGO-2.jpg'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#1976d2',
        boxShadow: isScrolled ? '0px 2px 4px rgba(0,0,0,0.2)' : 'none',
        transition: '0.3s',
        height:"5rem",
        
        
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{gap:2}}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="Logo" style={{ height: '50px' , paddingTop:"1rem"}} />
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{'&:hover': {backgroundColor: 'red',}}}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about"  sx={{'&:hover': {backgroundColor: 'red',}}}>
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/services" sx={{'&:hover': {backgroundColor: 'red',}}}>
            Services
          </Button>
          <Button color="inherit" component={Link} to="/portfolio" sx={{'&:hover': {backgroundColor: 'red',}}}>
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/testimonials" sx={{'&:hover': {backgroundColor: 'red',}}}>
            Testimonials
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{'&:hover': {backgroundColor: 'red',}}}>
            Contact
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginLeft: 2 }}
          >
            Get Started
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

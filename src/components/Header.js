// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, useScrollTrigger, Slide } from '@mui/material';
import About from '../pages/About';
import { Link } from 'react-router-dom';

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
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Ecuzen Clone
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/services">
            Services
          </Button>
          <Button color="inherit" component={Link} to="/portfolio">
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/testimonials">
            Testimonials
          </Button>
          <Button color="inherit" component={Link} to="/contact">
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

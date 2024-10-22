// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Logo from '../assest/cropped-DEEVA-LOGO-2.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <IconButton onClick={handleDrawerToggle} sx={{ marginLeft: 'auto' }}>
        <CloseIcon />
      </IconButton>
      <List>
        {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((text) => (
          <ListItem button component={Link} to={`/${text.replace(/\s+/g, '').toLowerCase()}`} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem button component={Link} to="/get-started">
          <Button variant="contained" color="secondary" fullWidth>
            Get Started
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#1976d2',
          boxShadow: isScrolled ? '0px 2px 4px rgba(0,0,0,0.2)' : 'none',
          transition: '0.3s',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: '#fff' }}>
              <img src={Logo} alt="Logo" style={{ height: '50px', paddingTop: '1rem' }} />
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button color="inherit" component={Link} to="/" sx={{ '&:hover': { backgroundColor: 'red' } }}>
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about" sx={{ '&:hover': { backgroundColor: 'red' } }}>
                About Us
              </Button>
              <Button color="inherit" component={Link} to="/services" sx={{ '&:hover': { backgroundColor: 'red' } }}>
                Services
              </Button>
              <Button color="inherit" component={Link} to="/portfolio" sx={{ '&:hover': { backgroundColor: 'red' } }}>
                Portfolio
              </Button>
              <Button color="inherit" component={Link} to="/testimonials" sx={{ '&:hover': { backgroundColor: 'red' } }}>
                Testimonials
              </Button>
              <Button color="inherit" component={Link} to="/contact" sx={{ '&:hover': { backgroundColor: 'red' } }}>
                Contact
              </Button>
              <Button variant="contained" color="secondary" sx={{ marginLeft: 2 }}>
                Get Started
              </Button>
            </Box>

            {/* Mobile Menu */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;

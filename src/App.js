// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import B2BSoftwareSolutions from './Services/B2BSoftware';
import B2BSoftware from './Services/B2BSoftware';
import AndroidAppDevelopment from './Services/androidapplicationdevelopment';
// import WhatsApp from './WhatsApp/WhatsApp';
// import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/b2bsoftware" element={<B2BSoftware/>} />
          <Route path="/andriodapp" element={<AndroidAppDevelopment/>} />
        </Routes>
        {/* <WhatsApp/>
        <ScrollToTop/> */}
      </Box>
    </Router>
  );
}

export default App;
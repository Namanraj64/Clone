// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Blog';
import Testimonials from './pages/Career';
import Contact from './pages/Contact';
import B2BSoftware from './Services/B2BSoftware';
import AndroidAppDevelopment from './Services/androidapplicationdevelopment';
import WebsiteDevelopment from './Services/websitedevelopment';
import GraphicDesign from './Services/graphicdesign';
import ScrollToTop from './components/ScroolToTop';
import FintechSoftwareDevelopment from './Services/fintechsoftwaredevelopment';
import SoftwareDevelopment from './Services/softwaredevelopment';
import MicroATM from './Services/microatm';
import Blog from './pages/Blog';
import Carrer from './pages/Career';
import Careers from './pages/Career';

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/b2bsoftware" element={<B2BSoftware/>} />
          <Route path="/services/andriodapp" element={<AndroidAppDevelopment/>} />
          <Route path="/services/websitedevelopment" element={<WebsiteDevelopment/>} />
          <Route path="/services/graphic-design" element={<GraphicDesign/>} />
          <Route path="/services/fintechsoftweredevelopment" element={<FintechSoftwareDevelopment/>}/>
          <Route path="/services/micro-atm" element={<MicroATM />} />
          <Route path="/services/softwaredevelopment" element={<SoftwareDevelopment/>} />

        </Routes>
        {/* <WhatsApp/>
        <ScrollToTop/> */}
        <ScrollToTop/>
      </Box>
    </Router>
  );
}

export default App;
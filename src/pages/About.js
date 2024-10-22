// src/pages/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutUs from '../components/About/AnoutUs/AboutUs';
import CompanyStory from '../components/About/CompanyStory/CompanyStory';
import CoFounder from '../components/About/CoFounder/CoFounder';
import Direct from '../components/About/Directer/Direct';
import OurMission from '../components/About/OurMission/OurMission';
import HowWeWork from '../components/About/HowWeWork/HowWeWork';
import SelectDeeva from '../components/About/SelectDeeva/SelectDeeva';
import Software from '../components/About/Software/Software';
import OurBanking from '../components/About/OurBanking/OurBanking';
import Services from '../components/Services';


const About = () => {
  return (
    <>
    <Header/>
    <AboutUs/>
    <CompanyStory/>
    <CoFounder/>
    <Direct/>
    <OurMission/>
    <HowWeWork/>
    <Software/>
    <SelectDeeva/>
    <Services/>
    <OurBanking/>
    <Footer/>
    </>
  );
};

export default About;
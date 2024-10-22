// src/components/Services.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { HomeRepairService, Security, Business, Cloud, PhoneAndroid, Devices, ShoppingCart, DesignServices, AccountBalance, Payment, Storage, Code } from '@mui/icons-material';

const services = [
  {
    icon: <Business fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'B2B Software Solutions',
    description: 'Robust software solutions to enhance your business processes.',
  },
  {
    icon: <PhoneAndroid fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'Android Application Development',
    description: 'Custom Android apps to meet your business and customer needs.',
  },
  {
    icon: <Devices fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'Website Development',
    description: 'Stunning websites built with the latest technologies for optimal performance.',
  },
  {
    icon: <DesignServices fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'Graphic Design',
    description: 'Creative designs to captivate your audience and boost engagement.',
  },
  {
    icon: <AccountBalance fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'Fintech Software Development',
    description: 'Innovative financial technology solutions for the modern enterprise.',
  },
  {
    icon: <Payment fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'Micro ATM',
    description: 'Empowering financial services with convenient and secure Micro ATM solutions.',
  },
  {
    icon: <Cloud fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud computing services for your business needs.',
  },
  {
    icon: <Storage fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'CRM Solutions',
    description: 'Customer Relationship Management systems to streamline your operations.',
  },
  {
    icon: <ShoppingCart fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'E-Commerce Services',
    description: 'Complete e-commerce solutions to take your online store to the next level.',
  },
  {
    icon: <Code fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'Salesforce Services',
    description: 'Tailored Salesforce development to optimize your customer interactions.',
  },
  {
    icon: <Code fontSize="large" sx={{ color: '#1976d2' }} />,
    title: 'Software Development',
    description: 'End-to-end software development services for businesses of all sizes.',
  },
];

const Services = () => {
  return (
    <Box id="services-section" sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5', width: '100%' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Our Services
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" paragraph>
        We offer a wide range of innovative services to meet all your business needs.
      </Typography>
      <Box sx={{ width: '90%', margin: '0 auto' }}>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  },
                  padding: '1.5rem',
                  background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                  borderRadius: '12px',
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h6" sx={{ margin: '1rem 0', fontWeight: 'bold', color: '#333' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;

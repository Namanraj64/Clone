// src/pages/Portfolio.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

const projects = [
  { name: 'Project A', description: 'A comprehensive e-commerce solution for retail businesses.' },
  { name: 'Project B', description: 'A mobile app designed for healthcare professionals.' },
  { name: 'Project C', description: 'A cloud-based platform for remote collaboration.' },
];

const Portfolio = () => {
  return (
    <>
    <Header/>
    <Container sx={{ padding: '7rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer/>
    </>
  );
};

export default Portfolio;

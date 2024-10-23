// src/Services/GraphicDesign.js
import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { DesignServices, Palette, PhotoCamera, FormatPaint } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import graphicDesignImage from '../assest/graphic-design.png'; // Image you'll provide

const GraphicDesign = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          padding: '7rem 0',
        }}
      >
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
              marginBottom: '3rem',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: 2 }}>
                Graphic Design Services
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Deeva Payon offers expert graphic design solutions to help your brand visually communicate its message. From branding to marketing materials, we ensure that your visuals are impactful and aligned with your business goals.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ marginTop: 3 }}
                href="/contact"
              >
                Get Started
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src={graphicDesignImage}
                alt="Graphic Design Services"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Box>
          </Box>

          {/* Services Offered */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginBottom: '2rem' }}
          >
            Our Graphic Design Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <DesignServices fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Branding & Identity
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    We create cohesive brand identities that communicate your brand values and differentiate you from the competition.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Palette fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Marketing Materials
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    Our team designs eye-catching brochures, flyers, banners, and other marketing materials that drive customer engagement.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhotoCamera fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Social Media Graphics
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    We provide visually appealing designs for your social media platforms that resonate with your audience and boost engagement.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FormatPaint fontSize="large" sx={{ color: '#1976d2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Custom Illustrations
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    We create stunning custom illustrations tailored to your brand’s messaging and design needs, making your content truly unique.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Why Choose Us */}
          <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Why Choose Deeva Payon for Graphic Design?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
              At Deeva Payon, our talented graphic designers ensure that your brand stands out visually in a crowded market. We bring your vision to life with creativity, precision, and strategy, providing designs that not only look great but also drive results.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
            >
              Let’s Design Your Vision
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default GraphicDesign;

// src/pages/Blog.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { CalendarToday, ArrowForward } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogPost1 from '../assest/blogimg1.jpg'; // Image for blog post 1
import blogPost2 from '../assest/blogimg2.jpg'; // Image for blog post 2
import blogPost3 from '../assest/blogimg3.webp'; // Image for blog post 3

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Fintech in 2025',
      date: 'October 20, 2024',
      image: blogPost1,
      excerpt:
        'Explore the trends shaping the fintech landscape in 2025 and beyond. Learn how businesses can harness emerging technologies to stay ahead of the competition...',
      link: '/blog/the-future-of-fintech',
    },
    {
      id: 2,
      title: 'How Micro ATMs are Transforming Rural Economies',
      date: 'September 15, 2024',
      image: blogPost2,
      excerpt:
        'Discover how Micro ATMs are providing essential financial services to underserved communities and revolutionizing rural economies...',
      link: '/blog/micro-atms-transforming-rural-economies',
    },
    {
      id: 3,
      title: 'Top 5 Software Development Practices for 2024',
      date: 'August 30, 2024',
      image: blogPost3,
      excerpt:
        'Stay up-to-date with the best practices in software development for 2024. This blog highlights key strategies for optimizing development workflows...',
      link: '/blog/top-5-software-development-practices-2024',
    },
  ];

  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#f9f9f9', padding: '7rem 0' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: 4, textAlign: 'center' }}
          >
            Our Latest Blog Posts
          </Typography>

          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid item xs={12} md={4} key={post.id}>
                <Card
                  sx={{
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' },
                    transition: 'all 0.3s',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                      <CalendarToday sx={{ fontSize: 16, color: '#999', marginRight: 1 }} />
                      <Typography variant="body2" color="textSecondary">
                        {post.date}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'bold', marginBottom: 1 }}
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {post.excerpt}
                    </Typography>
                    <Button
                      variant="text"
                      color="primary"
                      endIcon={<ArrowForward />}
                      href={post.link}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Blog;

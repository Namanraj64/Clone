// src/pages/Careers.js
import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Full Stack Developer',
      location: 'Remote or On-Site',
      type: 'Full-Time',
      description: 'We are looking for a skilled Full Stack Developer with expertise in React and Node.js to join our dynamic team. Experience with MUI and cloud technologies is a plus.',
      responsibilities: [
        'Develop front-end and back-end solutions using React and Node.js',
        'Collaborate with cross-functional teams to define and implement new features',
        'Maintain and enhance existing web applications',
        'Ensure the scalability and reliability of web applications',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or related field',
        '2+ years of experience in full-stack development',
        'Proficiency in JavaScript, React, Node.js, and REST APIs',
        'Familiarity with cloud services (AWS, GCP, or Azure)',
      ],
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      location: 'Remote or On-Site',
      type: 'Part-Time',
      description: 'We are seeking a talented UI/UX Designer with a passion for creating intuitive and user-friendly interfaces. Experience in Figma or Adobe XD is required.',
      responsibilities: [
        'Design user-centric web and mobile interfaces',
        'Create wireframes, prototypes, and user flows',
        'Work closely with developers to implement designs',
        'Conduct user research and testing to inform design decisions',
      ],
      qualifications: [
        'Bachelor’s degree in Design, Human-Computer Interaction, or related field',
        '3+ years of experience in UI/UX design',
        'Proficiency in Figma or Adobe XD',
        'Strong understanding of web and mobile design principles',
      ],
    },
    {
      id: 3,
      title: 'Business Development Manager',
      location: 'On-Site',
      type: 'Full-Time',
      description: 'Join our team as a Business Development Manager to help us expand our presence in the software solutions market. Ideal candidates will have a proven track record in B2B sales and relationship building.',
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain relationships with corporate clients',
        'Develop and execute sales strategies',
        'Achieve sales targets and drive company growth',
      ],
      qualifications: [
        'Bachelor’s degree in Business, Marketing, or related field',
        '5+ years of experience in business development or sales',
        'Strong communication and negotiation skills',
        'Experience in the software or technology sector is a plus',
      ],
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
            Join Our Team at Deeva Payon
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: '2rem', textAlign: 'center' }}
          >
            At Deeva Payon, we’re always looking for passionate and talented individuals to help us push the boundaries of innovation. If you are eager to make an impact, explore our current job openings below.
          </Typography>

          {/* Job Openings Section */}
          <Grid container spacing={4}>
            {jobOpenings.map((job) => (
              <Grid item xs={12} md={4} key={job.id}>
                <Card
                  sx={{
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' },
                    transition: 'all 0.3s',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                      {job.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {job.location} | {job.type}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {job.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={`/careers/${job.id}`} // Link to job details page
                      sx={{ marginTop: 2 }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Why Join Us Section */}
          <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Why Work at Deeva Payon?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
              Deeva Payon is a growing software development company that thrives on collaboration, creativity, and innovation. We foster an inclusive work environment where every team member’s voice is heard, and professional growth is encouraged.
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Flexible Work Environment
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Enjoy the flexibility of working remotely or on-site, based on your role and preferences.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Growth Opportunities
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      We believe in nurturing talent and offering ample opportunities for career development and leadership.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Collaborative Culture
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Join a team that values open communication, teamwork, and creativity, working on cutting-edge projects.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Call to Action */}
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
              sx={{ marginTop: '3rem' }}
            >
              Apply Now
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Careers;

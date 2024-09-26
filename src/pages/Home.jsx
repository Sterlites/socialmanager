import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const HeroContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));

const HeroButtons = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

function Home() {
  return (
    <HeroContent>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Social Media Scheduler
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Plan, schedule, and automate your social media posts across multiple platforms. Save time and boost your online presence with our easy-to-use tool.
        </Typography>
        <HeroButtons>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/register">
                Get Started
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" component={Link} to="/pricing">
                View Pricing
              </Button>
            </Grid>
          </Grid>
        </HeroButtons>
      </Container>
    </HeroContent>
  );
}

export default Home;
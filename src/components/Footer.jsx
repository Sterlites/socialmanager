import React from 'react';
import { Typography, Container, Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://yourdomain.com/">
            Social Media Scheduler
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
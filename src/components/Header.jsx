import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useAuth } from '../contexts/AuthContext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const LinkButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  marginLeft: theme.spacing(2),
}));

function Header() {
  const { currentUser, logout } = useAuth();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
          Social Media Scheduler
        </Typography>
        <div>
          <LinkButton component={Link} to="/">
            Home
          </LinkButton>
          <LinkButton component={Link} to="/pricing">
            Pricing
          </LinkButton>
          {currentUser ? (
            <>
              <LinkButton component={Link} to="/dashboard">
                Dashboard
              </LinkButton>
              <LinkButton onClick={logout}>
                Logout
              </LinkButton>
            </>
          ) : (
            <>
              <LinkButton component={Link} to="/login">
                Login
              </LinkButton>
              <LinkButton component={Link} to="/register">
                Register
              </LinkButton>
            </>
          )}
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
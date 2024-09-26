import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const PricingSection = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  marginBottom: theme.spacing(2),
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['5 posts per month', '1 social media account', 'Basic analytics'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      'Unlimited posts',
      '5 social media accounts',
      'Advanced analytics',
      'Priority support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      'Unlimited posts',
      'Unlimited social media accounts',
      'Advanced analytics',
      '24/7 support',
      'Custom integrations',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

function Pricing() {
  return (
    <StyledContainer maxWidth="md">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Pricing
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Choose the plan that fits your needs. Upgrade or downgrade at any time.
      </Typography>
      <Grid container spacing={4} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid item key={tier.title} xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
              />
              <StyledCardContent>
                <PricingSection>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    ${tier.price}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    /mo
                  </Typography>
                </PricingSection>
                {tier.description.map((line) => (
                  <Typography variant="subtitle1" align="center" key={line}>
                    {line}
                  </Typography>
                ))}
              </StyledCardContent>
              <CardActions>
                <Button
                  component={Link}
                  to="/register"
                  fullWidth
                  variant={tier.buttonVariant}
                  color="primary"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

export default Pricing;
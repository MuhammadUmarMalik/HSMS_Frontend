import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Root, MainContent } from './HomeStyles';
import Header from '../../../components/headers/customer-header/Header';

const HomePage = () => {
  return (
    <Root>
      <Header />
      <MainContent>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              Unlock Your Ultimate Look
            </Typography>
            <Typography variant="h6" gutterBottom>
              Style Alerts Delivered! Elevate Your Look with Exclusive Recommendations!
            </Typography>
          </Grid>
        </Grid>
      </MainContent>
    </Root>
  );
};

export default HomePage;

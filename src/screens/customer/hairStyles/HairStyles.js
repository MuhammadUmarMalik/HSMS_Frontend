// src/screens/hairstyles/HairStylesPage.js
import React from 'react';
import { Container, Typography, Grid, CardContent, CardMedia, IconButton } from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
import { observer } from 'mobx-react';
import { hairStylesData } from './hairStylesData.js';
import { StyledCard } from './HairStylesStyle.js';
import { hairStylesStore } from '../../../stores/hairStyles/HairStylesStore.js';

const HairStyles = observer(() => {
  const { savedStyles, toggleSaveStyle } = hairStylesStore;

  const handleSave = (id) => {
    toggleSaveStyle(id);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Hair Styles
      </Typography>
      <Grid container spacing={2}>
        {hairStylesData.map((style) => (
          <Grid item xs={12} sm={6} md={4} key={style.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="140"
                image={style.imageUrl}
                alt={style.name}
              />
              <CardContent>
                <Typography variant="h6">{style.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {style.description}
                </Typography>
                <IconButton
                  onClick={() => handleSave(style.id)}
                  color={savedStyles.includes(style.id) ? 'primary' : 'default'}
                >
                  <SaveIcon />
                </IconButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default HairStyles;

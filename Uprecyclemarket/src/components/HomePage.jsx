import React from 'react';
import { Button, Typography, Box, Container, Grid } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        minHeight: 'calc(100vh - 64px)', // Subtract AppBar height
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              A Marketplace In Your Pocket
            </Typography>
            <Typography variant="h5" paragraph>
              End-to-end transparent transactions and door-step delivery at BEST PRICES for quality material
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Wonder how? &gt;
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/placeholder.svg?height=600&width=600"
              alt="Person using smartphone"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '600px',
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
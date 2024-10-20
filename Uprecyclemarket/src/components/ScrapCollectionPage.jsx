import React from 'react';
import { Typography, Button, Box, Container, Grid } from '@mui/material';

export default function ScrapCollectionPage() {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Got scrap?<br />Sell it to us.
            </Typography>
            <Typography variant="h5" paragraph>
              Sell us your recyclable wastes and help contribute to the circular economy.
            </Typography>
            <Box sx={{ '& > :not(style)': { mr: 2 } }}>
              <Button variant="contained" color="primary" size="large">
                Download the app
              </Button>
              <Button variant="outlined" color="primary" size="large">
                For Business
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/placeholder.svg?height=400&width=600"
              alt="Scrap collection truck"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
import React from 'react';
import { Typography, Button, Card, CardContent, CardActions, Grid, Container } from '@mui/material';

export default function MarketplacePage() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Marketplace
      </Typography>
      <Typography variant="h4" gutterBottom>
        Transact with 500+ Buyers & Sellers of Recyclable Materials
      </Typography>
      <Typography variant="h6" paragraph>
        10,000 MT transacted daily across 30+ States and UTs via RecycleMarketplace mobile app
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                PET bottle baled scrap - Clear
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Location: Maharashtra
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Seller ID: S1010 (Frequently purchased)
              </Typography>
              <Typography variant="h4" component="div">
                ₹45.50/kg
              </Typography>
              <Typography variant="body2">
                15000 MT available
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Buy
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Add more product cards here */}
      </Grid>
    </Container>
  );
}
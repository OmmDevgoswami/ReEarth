import React from 'react';
import { Typography, Button, Card, CardContent, CardActions, Grid, Container, TextField, Select, MenuItem, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MarketplacePage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        RecycleMarket
      </Typography>
      
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search recyclable materials..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Select fullWidth defaultValue="" displayEmpty>
            <MenuItem value="" disabled>Category</MenuItem>
            <MenuItem value="plastic">Plastic</MenuItem>
            <MenuItem value="paper">Paper</MenuItem>
            <MenuItem value="metal">Metal</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={2}>
          <Select fullWidth defaultValue="" displayEmpty>
            <MenuItem value="" disabled>Condition</MenuItem>
            <MenuItem value="new">New</MenuItem>
            <MenuItem value="used">Used</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant="contained" startIcon={<FilterListIcon />} fullWidth>
            More Filters
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Results: 310 Listings
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {item === 1 ? 'Two small black r...' : 'Large brown/dark...'}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  <LocationOnIcon fontSize="small" /> {item === 1 ? 'xyz' : 'Location'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uploaded: 31 Oct 2024
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                <Button size="small" variant="contained" color="primary">
                  Contact Seller
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

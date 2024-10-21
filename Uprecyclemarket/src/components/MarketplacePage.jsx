import React, { useState } from 'react';
import { Typography, Button, Card, CardContent, CardActions, Grid, Container, TextField, Select, MenuItem, InputAdornment, Box, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/system';

const ZoomCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const items = [
  { title: 'Two small black recycling bins', location: 'New York, NY', date: '31 Oct 2024', image: 'https://example.com/image1.jpg' },
  { title: 'Large brown/dark cardboard boxes', location: 'Los Angeles, CA', date: '30 Oct 2024', image: 'https://example.com/image2.jpg' },
  { title: 'Plastic water bottles (100 pcs)', location: 'Chicago, IL', date: '29 Oct 2024', image: 'https://example.com/image3.jpg' },
  { title: 'Metal cans for recycling', location: 'Houston, TX', date: '28 Oct 2024', image: 'https://example.com/image4.jpg' },
  { title: 'Glass jars and bottles', location: 'Phoenix, AZ', date: '27 Oct 2024', image: 'https://example.com/image5.jpg' },
  { title: 'Used paper for crafting', location: 'Philadelphia, PA', date: '26 Oct 2024', image: 'https://example.com/image6.jpg' },
  { title: 'Aluminum foil rolls', location: 'San Antonio, TX', date: '25 Oct 2024', image: 'https://example.com/image7.jpg' },
  { title: 'Recyclable plastic containers', location: 'San Diego, CA', date: '24 Oct 2024', image: 'https://example.com/image8.jpg' },
];

export default function MarketplacePage() {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
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
            <MenuItem value="glass">Glass</MenuItem>
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

      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Results: {items.length} Listings
      </Typography>

      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ZoomCard>
              <Box sx={{ height: 200, backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }} color="white">
                  {item.title}
                </Typography>
                <Typography gutterBottom color="yellow">
                  <LocationOnIcon fontSize="small" /> {item.location}
                </Typography>
                <Typography variant="body2" color="white">
                  Uploaded: {item.date}
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
            </ZoomCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination count={10} page={page} onChange={handleChangePage} color="primary" />
      </Box>

     </Container>
  );
}

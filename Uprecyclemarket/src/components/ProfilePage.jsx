import React from 'react';
import { Typography, Box, Container, Grid, Avatar, Button, List, ListItem, ListItemText, Divider, CircularProgress, Chip, IconButton } from '@mui/material';
import { Edit, ShoppingCart, LocalOffer, Storefront, EmojiEvents, AccountBox, Settings, Notifications, Help } from '@mui/icons-material';

export default function ProfilePage() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #e3f2fd 30%, #bbdefb 90%)',
        color: 'text.primary',
        minHeight: 'calc(100vh - 64px)',
        py: 4,
      }}
    >
      <Container>
        <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4, color: '#1976d2' }}>
          My Eco-Profile
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                alt="User Name"
                src="/placeholder.svg?height=150&width=150"
                sx={{ width: 150, height: 150, mx: 'auto', mb: 2, border: '4px solid #4caf50' }}
              />
              <Typography variant="h5" gutterBottom>John Doe</Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>john.doe@example.com</Typography>
              <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ mt: 2 }}>
                Edit Profile
              </Button>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
                <IconButton color="primary" aria-label="account">
                  <AccountBox />
                </IconButton>
                <IconButton color="primary" aria-label="settings">
                  <Settings />
                </IconButton>
                <IconButton color="primary" aria-label="notifications">
                  <Notifications />
                </IconButton>
                <IconButton color="primary" aria-label="help">
                  <Help />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>Account Information</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Member Since" secondary="January 1, 2023" />
                  <Chip icon={<EmojiEvents />} label="Gold Recycler" color="primary" variant="outlined" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Total Recycled" secondary="1,250 kg" />
                  <CircularProgress variant="determinate" value={75} color="success" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Carbon Offset" secondary="500 kg CO2" />
                </ListItem>
              </List>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>Recycling Goals</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Monthly Goal" secondary="100 kg / 250 kg" />
                  <CircularProgress variant="determinate" value={40} color="info" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Annual Goal" secondary="750 kg / 1,500 kg" />
                  <CircularProgress variant="determinate" value={50} color="warning" />
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>Business Center</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button variant="contained" startIcon={<ShoppingCart />} fullWidth>
                    Buy Recycled Goods
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" startIcon={<LocalOffer />} fullWidth>
                    Sell Recyclables
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" startIcon={<Storefront />} fullWidth>
                    My Eco-Store
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

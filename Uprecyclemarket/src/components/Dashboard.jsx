import React from 'react';
import { Typography, Box, Container, Grid, Paper, List, ListItem, ListItemText, ListItemIcon, Button, Chip } from '@mui/material';
import { Inventory, LocalShipping, AttachMoney, Refresh, TrendingUp, ShowChart, Assessment, MoreVert } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

export default function Dashboard() {
  return (
    <Box
      sx={{
        bgcolor: '#121212',
        color: 'white',
        minHeight: 'calc(100vh - 64px)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Dashboard
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={6} sx={{ p: 3, bgcolor: '#1E1E1E', color: 'white', borderRadius: 2, mb: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="bold">Recent Transactions</Typography>
              <List>
                {[
                  { icon: Inventory, primary: 'Sold 50kg of paper', secondary: '2 hours ago', amount: '+$25.00', color: '#4CAF50' },
                  { icon: LocalShipping, primary: 'Pickup scheduled', secondary: 'Tomorrow, 10:00 AM', amount: '-$10.00', color: '#F44336' },
                  { icon: AttachMoney, primary: 'Received payment', secondary: '1 day ago', amount: '+$75.00', color: '#4CAF50' },
                  { icon: Refresh, primary: 'Recycled 30kg of plastic', secondary: '3 days ago', amount: '+$15.00', color: '#4CAF50' },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)', py: 2 }}>
                    <ListItemIcon sx={{ color: 'secondary.main' }}>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                    <Typography variant="subtitle1" sx={{ color: item.color, fontWeight: 'bold' }}>{item.amount}</Typography>
                  </ListItem>
                ))}
              </List>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>View All Transactions</Button>
            </Paper>
            <Paper elevation={6} sx={{ p: 3, bgcolor: '#1E1E1E', color: 'white', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom fontWeight="bold">Monthly Revenue</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ p: 3, bgcolor: '#1E1E1E', color: 'white', borderRadius: 2, mb: 4 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" gutterBottom>Total Earnings</Typography>
                <TrendingUp color="secondary" />
              </Box>
              <Typography variant="h3" color="secondary" fontWeight="bold">$1,250.00</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>+15% from last month</Typography>
            </Paper>
            <Paper elevation={6} sx={{ p: 3, bgcolor: '#1E1E1E', color: 'white', borderRadius: 2, mb: 4 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" gutterBottom>Recycled This Month</Typography>
                <ShowChart color="secondary" />
              </Box>
              <Typography variant="h3" color="secondary" fontWeight="bold">250 kg</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>+5% from last month</Typography>
            </Paper>
            <Paper elevation={6} sx={{ p: 3, bgcolor: '#1E1E1E', color: 'white', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">Quick Actions</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button variant="outlined" color="white" fullWidth startIcon={<Assessment />}>
                    Reports
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" color="secondary" fullWidth startIcon={<MoreVert />}>
                    More
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

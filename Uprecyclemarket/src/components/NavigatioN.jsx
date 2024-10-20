import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RecycleMarketplace
        </Typography>
        <Button color="inherit" component={RouterLink} to="/" sx={{ marginRight: 2 }}>
          <img src="Uprecycle-Market/Uprecyclemarket/src/assets/home.png" alt="Logo" style={{ width: 24, height: 24}} />
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/marketplace" sx={{ marginRight: 2 }}>
          <img src="Uprecycle-Market/Uprecyclemarket/src/assets/market.png" alt="Market" style={{ width: 24, height: 24}} />
          Marketplace
        </Button>
        <Button color="inherit" component={RouterLink} to="/scrap-collection">
          <img src="Uprecycle-Market/Uprecyclemarket/src/ssets/recycle.png" alt="Sell" style={{ width: 24, height: 24}} />
          Sell Scrap
        </Button>
      </Toolbar>
    </AppBar>
  );
}
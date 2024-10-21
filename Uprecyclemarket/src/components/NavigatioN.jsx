import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info'

export default function Navigation() {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <img src="./src/assets/planet-earth.png" alt="Sell" style={{ width: 24, height: 24, marginRight: 8 }} />
          ReEarth
        </Typography>
        <Button color="inherit" component={RouterLink} to="/" sx={{ marginRight: 2 }}>
          <img src="./src/assets/home.png" alt="Home" style={{ width: 24, height: 24, marginRight: 8 }} />
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/marketplace" sx={{ marginRight: 2 }}>
          <img src="./src/assets/market.png" alt="Market" style={{ width: 24, height: 24, marginRight: 8 }} />
          Marketplace
        </Button>
        <Button color="inherit" component={RouterLink} to="/scrap-collection" sx={{ marginRight: 2 }}>
          <img src="./src/assets/recycle.png" alt="Sell" style={{ width: 24, height: 24, marginRight: 8 }} />
          Sell Scrap
        </Button>
        <Button color="inherit" component={RouterLink} to="/dashboard" sx={{ marginRight: 2 }}>
          <img src="./src/assets/dashboard.png" alt="Dashboard" style={{ width: 24, height: 24, marginRight: 8 }} />
          Dashboard
        </Button>
        
        <Button color="inherit" component={RouterLink} to="/profile" sx={{ marginRight: 2 }}>
          <img src="./src/assets/login.png" alt="Profile" style={{ width: 24, height: 24, marginRight: 8 }} />
          Profile
        </Button>
        {user ? (
        <>
          <Button color="inherit" onClick={handleLogout}>
          <img src="./src/assets/logout.png" alt="Profile" style={{ width: 24, height: 24, marginRight: 8 }} />
            Logout
          </Button>
        </>):(
           <Button color="inherit" component={RouterLink} to="/login">
            <img src="./src/assets/login_1.png" alt="Profile" style={{ width: 24, height: 24, marginRight: 8 }} />
           Login
         </Button>
        )
        }
        <Button color="inherit" component={RouterLink} to="/contact">
        <img src="./src/assets/contact.png" alt="Countact" style={{ width: 24, height: 24, marginRight: 8 }} />
          Contact
        </Button>
         <Button color="inherit" component={RouterLink} to="/about" sx={{ marginRight: 2 }}>
          <img src="./src/assets/about.png" alt="About" style={{ width: 24, height: 24, marginRight: 8 }} />
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}

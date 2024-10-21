import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import MarketplacePage from './components/MarketplacePage';
import ScrapCollectionPage from './components/ScrapCollectionPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import ContactPage from './components/ContactPage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#2196f3',
    },
    background: {
      default: '#ffffff',
      paper: '#212121',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navigation />
          <Box component="main" flexGrow={1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/scrap-collection" element={<ScrapCollectionPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Box component="footer" bgcolor="primary.main" color="white" p={2} textAlign="center">
            <Typography variant="body2">
              © 2024 RecycleMarketplace. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
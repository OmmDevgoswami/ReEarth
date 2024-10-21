import React from 'react';
import { 
  Typography, 
  Box, 
  Container, 
  Grid, 
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaRecycle, FaUsers, FaLeaf } from 'react-icons/fa';

const FeatureBox = ({ title, description, icon }) => {
  const theme = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Paper 
        elevation={6} 
        sx={{ 
          p: 4, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          bgcolor: '#dcedc8',
          borderRadius: 4,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            bgcolor: '#c5e1a5',
            boxShadow: theme.shadows[10],
            transform: 'translateY(-5px)',
          },
        }}
      >
        <Box sx={{ fontSize: 48, color: 'primary.main', mb: 2 }}>
          {icon}
        </Box>
        <Typography variant="h5" component="h3" gutterBottom color="primary" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <Box sx={{ 
      bgcolor: 'background.default', 
      minHeight: '100vh', 
      py: 12,
      background: 'linear-gradient(45deg, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary" fontWeight="bold">
            About ReEarth
          </Typography>

          <Typography variant="h5" paragraph align="center" color="text.secondary" sx={{ mb: 8 }}>
            Turning Trash into Positive Impact
          </Typography>
        </motion.div>

        <Grid container spacing={6} justifyContent="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={4}>
            <FeatureBox
              title="Smart Waste Management"
              description="Utilize cutting-edge technology to efficiently manage and reduce waste."
              icon={<FaRecycle />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureBox
              title="Community Engagement"
              description="Connect with your community to trade, sell, and upcycle second-hand goods."
              icon={<FaUsers />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureBox
              title="Environmental Impact"
              description="Contribute to a circular economy and reduce landfill waste significantly."
              icon={<FaLeaf />}
            />
          </Grid>
        </Grid>

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h3" gutterBottom color="primary" fontWeight="bold">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph fontSize="1.1rem" lineHeight={1.8}>
                At ReEarth, we're on a mission to revolutionize waste management and promote sustainable living. 
                By providing an innovative platform for buying, selling, and trading second-hand goods, 
                we aim to reduce waste, foster community connections, and create a positive environmental impact.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                 src="/public/logo.png?height=400&width=400"
                  alt="ReEarth Mission"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

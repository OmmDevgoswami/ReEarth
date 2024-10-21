import React from 'react';
import { Typography, Button, Box, Container, Grid, Card, CardContent } from '@mui/material';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const ImageCarousel = () => {
  const images = ['/Scrap collection process.jpeg', '/scap colletcion process 1.jpg', '/scrap collection process 2.jpg'];
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: '100%', height: '300px', overflow: 'hidden' }}>
      <img
        src={images[currentImage]}
        alt="Carousel"
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }}
      />
    </Box>
  );
};

export default function ScrapCollectionPage() {
  const steps = [
    { icon: <RecyclingOutlinedIcon fontSize="large" />, title: 'Collect', description: 'Gather your recyclable materials' },
    { icon: <LocalShippingOutlinedIcon fontSize="large" />, title: 'Schedule', description: 'Book a pickup at your convenience' },
    { icon: <AttachMoneyOutlinedIcon fontSize="large" />, title: 'Earn', description: 'Get paid for your recyclables' },
  ];

  return (
    <Box sx={{ bgcolor: '#e8f5e9', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
              Turn Your Trash <br />Into Cash!
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4 }}>
              Join the green revolution. Sell your recyclable waste and make a positive impact on the environment.
            </Typography>
            <Box sx={{ '& > :not(style)': { mr: 2, mb: 2 } }}>
              <Button variant="contained" color="primary" size="large" startIcon={<RecyclingOutlinedIcon />}>
                Start Recycling Now
              </Button>
              <Button variant="outlined" color="primary" size="large">
                Business Solutions
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/scrap-collection.jpg"
              alt="Scrap collection process"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 4,
                boxShadow: 5,
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {step.icon}
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center" color="white">
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="white" align="center">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

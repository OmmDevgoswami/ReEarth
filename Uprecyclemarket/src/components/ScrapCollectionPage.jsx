import React from 'react';
import { Typography, Button, Box, Container, Grid, Card, CardContent } from '@mui/material';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { useNavigate } from 'react-router-dom';

const ImageCarousel = () => {
  const images = ['/scrap1.jpeg', '/scrap2.jpg', '/scrap3.jpg'];
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
  const navigate = useNavigate();

  const steps = [
    { 
      icon: <RecyclingOutlinedIcon fontSize="large" />, 
      title: 'Collect', 
      description: 'Gather your recyclable materials',
      image: './public/gathering.jpg' // Add the image path here
    },
    { 
      icon: <LocalShippingOutlinedIcon fontSize="large" />, 
      title: 'Schedule', 
      description: 'Book a pickup at your convenience',
      image: './public/garbagetruck.jpg' // Add the image path here
    },
    { 
      icon: <AttachMoneyOutlinedIcon fontSize="large" />, 
      title: 'Earn', 
      description: 'Get paid for your recyclables',
      image: './public/paid1.jpg' // Add the image path here
    },
  ];

  const handleStartRecycling = () => {
    navigate('/add-scrap-images');
  };

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
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                startIcon={<RecyclingOutlinedIcon />}
                onClick={handleStartRecycling}
              >
                Start Recycling Now
              </Button>
              <Button variant="outlined" color="primary" size="large">
                Business Solutions
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <ImageCarousel />
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    p: 2,
                    bgcolor: '#dcedc8', // Light green background color
                    '&:hover': { 
                      bgcolor: '#c5e1a5', // Darker green on hover
                    },
                  }}>
                  {/* Image box */}
                  <Box 
                    component="img"
                    src={step.image} // Add image source here
                    alt={step.title}
                    sx={{
                      width: '100%',
                      height: '150px', // Adjust height as needed
                      objectFit: 'cover',
                      mb: 2,
                      borderRadius: '8px', // Optional: adds rounded corners
                    }}
                  />
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {step.icon}
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center" color="black">
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="black" align="center">
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

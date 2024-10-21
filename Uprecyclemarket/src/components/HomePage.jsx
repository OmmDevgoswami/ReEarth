import React, { useEffect, useRef, useState } from 'react';
import { Button, Typography, Box, Container, Grid, Paper } from '@mui/material';
import RecycleIcon from '@mui/icons-material/Recycling';
import NatureIcon from '@mui/icons-material/Nature';
import SavingsIcon from '@mui/icons-material/Savings';
import * as THREE from 'three';

const FeatureCard = ({ icon, title, description }) => (
  <Paper elevation={3} sx={{ p: 2, height: '100%', bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      {icon}
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  </Paper>
);

const ImageCarousel = () => {
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg','/image4.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: '100%', height: '300px', overflow: 'hidden' }}>
      <img
        src={images[currentImage]}
        alt="Eco-friendly"
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }}
      />
    </Box>
  );
};

export default function HomePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(5, 40, 40);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', minHeight: 'calc(100vh - 64px)' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ py: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
              Eco-friendly Solutions for a Sustainable Future
            </Typography>
            <Typography variant="h6" paragraph sx={{ fontWeight: 'bold', color: 'black', marginTop: '-30px', marginBottom: '40',}}>
            -Powered by technology
            </Typography>
            <Typography variant="h5" paragraph sx={{ fontWeight: 'bold', color: 'black', marginTop: '60px'}}>
            Contribution Today to Make the Future looks Clean and Green
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              startIcon={<RecycleIcon />}
              sx={{ bgcolor: '#ffd54f', color: 'black', '&:hover': { bgcolor: '#ffecb3' } }}
           
            >
              <a href="/scrap-collection"
              style={{
                color: 'inherit',      
                textDecoration: 'none', 
                cursor: 'default',    
              }}> Start Recycling Now</a>
              
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageCarousel />
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
  {/* <Grid item xs={12} sm={4}>
    <FeatureCard 
      icon={<RecycleIcon sx={{ fontSize: 40, mb: 2, color: '#4caf50' }} />}
      title="Easy Recycling"
      description="Schedule pickups for recyclables right from your smartphone"
      sx={{
        bgcolor: '#333',
        color: 'white',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { 
          bgcolor: '#444',
          transform: 'scale(0.95)'
        }
      }}
    />
  </Grid> */}
  {/* <Grid item xs={12} sm={4}>
    <FeatureCard 
      icon={<NatureIcon sx={{ fontSize: 40, mb: 2, color: '#4caf50' }} />}
      title="Environmental Impact"
      description="Track your contribution to reducing carbon footprint"
      sx={{
        bgcolor: '#333',
        color: 'white',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { 
          bgcolor: '#444',
          transform: 'scale(0.95)'
        }
      }}
    />
  </Grid> */}
  {/* <Grid item xs={12} sm={4}>
    <FeatureCard 
      icon={<SavingsIcon sx={{ fontSize: 40, mb: 2, color: '#4caf50' }} />}
      title="Rewards Program"
      description="Earn points and redeem eco-friendly products"
      sx={{
        bgcolor: '#333',
        color: 'white',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { 
          bgcolor: '#444',
          transform: 'scale(0.95)'
        }
      }}
    />
  </Grid> */}
</Grid>

      </Container>
    </Box>
  );
}

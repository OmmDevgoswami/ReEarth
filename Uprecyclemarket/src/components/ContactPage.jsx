import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Container, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  IconButton,
  Snackbar,
  Avatar,
  Fade
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const developers = [
  {
    name: "Abid Khan",
    role: "Full Stack Developer",
    photo: "/placeholder.svg?height=150&width=150",
    linkedin: "https://www.linkedin.com/in/abid-khan-bb65ab332",
    github: "https://github.com/larythelord",
    email: "llawlietbagsum@gmail.com"
  },
  {
    name: "Wahid Patel",
    role: "Begineer Developer",
    photo: "/placeholder.svg?height=150&width=150",
    linkedin: "https://www.linkedin.com/in/xyz",
    github: "https://github.com/Patwa974",
    email: "wahpat974@gmail.com"
  },
  {
    name: "xyz",
    role: "Full Stack Developer",
    photo: "/placeholder.svg?height=150&width=150",
    linkedin: "https://www.linkedin.com/in/xyz",
    github: "https://github.com/xyz",
    email: "xyz@example.com"
  },
  {
    name: "xyz",
    role: "Full Stack Developer",
    photo: "/placeholder.svg?height=150&width=150",
    linkedin: "https://www.linkedin.com/in/xyz",
    github: "https://github.com/xyz",
    email: "xyz@example.com"
  },
];

const DeveloperCard = ({ developer }) => (
  <Paper elevation={3} sx={{ p: 3, height: '100%', bgcolor: 'white', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
      <Avatar
        alt={developer.name}
        src={developer.photo}
        sx={{ width: 100, height: 100, mb: 2 }}
      />
      <Typography variant="h6" component="h3" gutterBottom>
        {developer.name}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {developer.role}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <IconButton href={developer.linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon sx={{ fontSize: 24, color: '#0077b5' }} />
      </IconButton>
      <IconButton href={developer.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon sx={{ fontSize: 24, color: '#333' }} />
      </IconButton>
      <IconButton href={`mailto:${developer.email}`}>
        <EmailIcon sx={{ fontSize: 24, color: '#ea4335' }} />
      </IconButton>
    </Box>
  </Paper>
);

export default function ContactPage() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!subject) newErrors.subject = 'Subject is required';
    if (!feedback) newErrors.feedback = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Feedback submitted:', { name, email, subject, feedback });
    setFeedback('');
    setEmail('');
    setName('');
    setSubject('');
    setErrors({});
    setSnackbarOpen(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ 
      bgcolor: darkMode ? '#121212' : '#f0f8ff', 
      minHeight: '100vh',
      backgroundImage: darkMode ? 'none' : 'url("/path/to/background-pattern.png")',
      transition: 'background-color 0.3s, background-image 0.3s'
    }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>

        <Fade in={true} timeout={1000}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: darkMode ? '#fff' : '#1a237e', 
            textAlign: 'center', 
            mb: 6 
          }}>
            Get in Touch
          </Typography>
        </Fade>
        
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {developers.map((developer, index) => (
            <Fade in={true} timeout={(index + 1) * 500} key={index}>
              <Grid item xs={12} sm={6} md={3}>
                <DeveloperCard developer={developer} />
              </Grid>
            </Fade>
          ))}
        </Grid>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1500}>
              <Paper elevation={3} sx={{ 
                p: 4, 
                bgcolor: darkMode ? '#1e1e1e' : 'white', 
                borderRadius: 2,
                color: darkMode ? '#fff' : 'inherit'
              }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: darkMode ? '#fff' : '#1a237e' }}>
                  Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 2 }}
                    required
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    sx={{ mb: 2 }}
                    required
                    error={!!errors.subject}
                    helperText={errors.subject}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Your message"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    multiline
                    rows={4}
                    sx={{ mb: 2 }}
                    required
                    error={!!errors.feedback}
                    helperText={errors.feedback}
                  />
                  <Button 
                    type="submit" 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    sx={{ 
                      bgcolor: darkMode ? '#bb86fc' : '#1a237e', 
                      color: 'white', 
                      '&:hover': { bgcolor: darkMode ? '#9969da' : '#3f51b5' } 
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={2000}>
              <Paper elevation={3} sx={{ 
                p: 4, 
                bgcolor: darkMode ? '#1e1e1e' : 'white', 
                borderRadius: 2, 
                height: '100%',
                color: darkMode ? '#fff' : 'inherit'
              }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: darkMode ? '#fff' : '#1a237e' }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 1, color: darkMode ? '#bb86fc' : '#1a237e' }} />
                  <Typography>123 xyz Street, xyz City, 12345</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 1, color: darkMode ? '#bb86fc' : '#1a237e' }} />
                  <Typography>+123-4567890</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 1, color: darkMode ? '#bb86fc' : '#1a237e' }} />
                  <Typography>contact@webdevteam.com</Typography>
                </Box>
                <Box sx={{ mt: 4, height: 300, width: '100%' }}>
                  <MapContainer center={[20.8510617,72.8696192]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[20.9,72.8696192]}>
                      <Popup>Our Office Location</Popup>
                    </Marker>
                  </MapContainer>
                </Box>
              </Paper>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Message sent successfully!"
      />
    </Box>
  );
}

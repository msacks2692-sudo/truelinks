import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Container 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';

const Home = () => {
  return (
    <Box sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'white', 
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Find Your True Match
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)', 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            AI-powered dating that learns your preferences and matches you based on activities, not just looks
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            component={RouterLink} 
            to="/register"
            sx={{ 
              backgroundColor: '#ff6b6b',
              fontSize: '1.2rem',
              px: 4,
              py: 1.5,
              '&:hover': { 
                backgroundColor: '#ff5252' 
              }
            }}
          >
            Start Your Journey
          </Button>
        </Box>
      </motion.div>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card sx={{ 
                height: '100%', 
                background: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <PsychologyIcon sx={{ fontSize: 60, color: '#ff6b6b', mb: 2 }} />
                  <Typography variant="h5" component="h2" sx={{ color: 'white', mb: 2 }}>
                    AI Learning
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Our AI learns your preferences from your activities, conversations, and interactions
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card sx={{ 
                height: '100%', 
                background: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <FavoriteIcon sx={{ fontSize: 60, color: '#ff6b6b', mb: 2 }} />
                  <Typography variant="h5" component="h2" sx={{ color: 'white', mb: 2 }}>
                    Smart Matching
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Get matched with people who share your interests and lifestyle, not just appearance
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card sx={{ 
                height: '100%', 
                background: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <SecurityIcon sx={{ fontSize: 60, color: '#ff6b6b', mb: 2 }} />
                  <Typography variant="h5" component="h2" sx={{ color: 'white', mb: 2 }}>
                    Safe & Secure
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Your privacy and security are our top priorities with advanced protection measures
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
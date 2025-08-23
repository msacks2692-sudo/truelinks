import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Chip,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Dashboard = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  
  // Mock data for demonstration
  const profiles = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      bio: "Adventure seeker and coffee enthusiast. Love hiking, photography, and trying new restaurants.",
      interests: ["Hiking", "Photography", "Coffee", "Travel"],
      compatibility: 92,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 31,
      bio: "Software engineer by day, musician by night. Passionate about technology and jazz music.",
      interests: ["Technology", "Music", "Cooking", "Reading"],
      compatibility: 88,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      id: 3,
      name: "Emma Davis",
      age: 26,
      bio: "Art teacher who loves painting, yoga, and exploring new cultures through food.",
      interests: ["Art", "Yoga", "Cooking", "Travel"],
      compatibility: 85,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ];

  const handleLike = () => {
    console.log('Liked profile:', profiles[currentProfile]);
    setCurrentProfile((prev) => (prev + 1) % profiles.length);
  };

  const handlePass = () => {
    console.log('Passed profile:', profiles[currentProfile]);
    setCurrentProfile((prev) => (prev + 1) % profiles.length);
  };

  if (currentProfile >= profiles.length) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
          No more profiles to show!
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          Check back later for new matches.
        </Typography>
      </Box>
    );
  }

  const profile = profiles[currentProfile];

  return (
    <Box sx={{ minHeight: '70vh' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={3}>
          {/* Profile Card */}
          <Grid item xs={12} md={8}>
            <Card sx={{ 
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              height: '100%'
            }}>
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ position: 'relative' }}>
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    style={{ 
                      width: '100%', 
                      height: '400px', 
                      objectFit: 'cover',
                      borderTopLeftRadius: '4px',
                      borderTopRightRadius: '4px'
                    }}
                  />
                  <Box sx={{ 
                    position: 'absolute', 
                    top: 16, 
                    right: 16,
                    background: 'rgba(0,0,0,0.7)',
                    borderRadius: '20px',
                    px: 2,
                    py: 1
                  }}>
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                      {profile.compatibility}% Match
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ p: 3 }}>
                  <Typography variant="h4" sx={{ color: 'white', mb: 1 }}>
                    {profile.name}, {profile.age}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                    {profile.bio}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                      Interests
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {profile.interests.map((interest, index) => (
                        <Chip 
                          key={index}
                          label={interest}
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.3)',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <IconButton 
                      onClick={handlePass}
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.3)',
                        }
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    
                    <IconButton 
                      onClick={handleLike}
                      sx={{ 
                        backgroundColor: '#ff6b6b',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#ff5252',
                        }
                      }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* AI Insights Panel */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              height: 'fit-content'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PsychologyIcon sx={{ color: '#ff6b6b', mr: 1 }} />
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    AI Insights
                  </Typography>
                </Box>
                
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                  Based on your preferences, we think you might enjoy:
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                    Shared Interests: 3/4
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    You both love travel and trying new experiences
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                    Communication Style: Compatible
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Both prefer meaningful conversations over small talk
                  </Typography>
                </Box>
                
                <Box>
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                    Lifestyle Match: High
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Similar daily routines and weekend activities
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Dashboard;
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <FavoriteIcon sx={{ mr: 1, color: '#ff6b6b' }} />
          <Typography variant="h6" component={RouterLink} to="/" sx={{ 
            textDecoration: 'none', 
            color: 'inherit',
            fontWeight: 'bold'
          }}>
            TrueLinks
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/login"
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(255, 255, 255, 0.1)' 
              } 
            }}
          >
            Login
          </Button>
          <Button 
            variant="contained" 
            component={RouterLink} 
            to="/register"
            sx={{ 
              backgroundColor: '#ff6b6b',
              '&:hover': { 
                backgroundColor: '#ff5252' 
              } 
            }}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
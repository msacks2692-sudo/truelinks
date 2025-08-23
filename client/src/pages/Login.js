import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Link 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '70vh' 
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card sx={{ 
          maxWidth: 400, 
          width: '100%',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" sx={{ 
              textAlign: 'center', 
              color: 'white', 
              mb: 3,
              fontWeight: 'bold'
            }}>
              Welcome Back
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff6b6b',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              />
              
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff6b6b',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#ff6b6b',
                  '&:hover': {
                    backgroundColor: '#ff5252',
                  },
                  py: 1.5,
                }}
              >
                Sign In
              </Button>
            </form>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Don't have an account?{' '}
                <Link 
                  component={RouterLink} 
                  to="/register" 
                  sx={{ 
                    color: '#ff6b6b',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    }
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Login;
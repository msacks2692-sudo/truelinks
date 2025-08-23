import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Link,
  Grid 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    bio: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
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
          maxWidth: 600, 
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
              Join TrueLinks
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    name="bio"
                    multiline
                    rows={3}
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself..."
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
                </Grid>
              </Grid>
              
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
                Create Account
              </Button>
            </form>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Already have an account?{' '}
                <Link 
                  component={RouterLink} 
                  to="/login" 
                  sx={{ 
                    color: '#ff6b6b',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    }
                  }}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Register;
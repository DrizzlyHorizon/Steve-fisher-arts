// src/LoginPage.tsx
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Typography, Box, Paper } from '@mui/material';

// Define your valid credentials
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'password123';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Validate credentials
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      login(); // Update authentication state
      navigate('/admin'); // Redirect to admin page after login
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: '10vh' }}>
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Admin Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />
          {error && (
            <Typography color="error" align="center" sx={{ margin: '10px 0' }}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
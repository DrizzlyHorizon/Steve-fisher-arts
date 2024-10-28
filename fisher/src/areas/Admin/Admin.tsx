// src/AdminPage.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

const AdminPage: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Typography>Welcome to the admin dashboard!</Typography>
    </Box>
  );
};

export default AdminPage;
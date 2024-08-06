import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useThemeContext } from './theme/ThemeContextProvider';
import { CssBaseline } from '@mui/material';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>  
);
}

export default App;

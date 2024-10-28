import React from 'react';
import './App.css';
import Navbar from './Components/Header';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useThemeContext } from './theme/ThemeContextProvider';
import Home from './areas/Home/Home';
import Paintings from './areas/Paintings/Paintings';
import Monotypes from './areas/Monotypes/Monotypes';
import Drawings from './areas/Drawings/Drawings';
import Contact from './areas/Contact/Contact';
import Admin from './areas/Admin/Admin';
import Footer from './Components/Footer';
import CategoryPage from './Components/CategoryPage'; 
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './Login/AuthContext';
import LoginPage from './Login/LoginPage';



function App() {
  const { theme } = useThemeContext();

  return (
    <AuthProvider> 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Paintings' element={<Paintings />} />
            <Route path='Monotypes' element={<Monotypes />} />
            <Route path='Drawings' element={<Drawings/>} />
            <Route path='Contact' element={<Contact />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
            />
            <Route path="/horsesmouth" element={<LoginPage />} />

          </Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

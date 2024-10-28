import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageList, ImageListItem, Box, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CategoryArtDisplay.css';

interface CategoryArtDisplayProps {
  categories: string[];
  artTypes: any[];
  quote: string; // New prop for the quote
}

const CategoryArtDisplay: React.FC<CategoryArtDisplayProps> = ({ categories, artTypes, quote }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  // Check if the screen size is mobile (e.g., max-width of 600px)
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    setDrawerOpen(false); // Close drawer after selecting a category
  };

  const handleImageClick = (category: string) => {
    navigate(`/category/${category}`);
  };

  // Function to get a slice of items from the selected category
  const getCurrentArtworks = () => {
    const startIndex = 0;
    const endIndex = isMobile ? 1 : 2; // Show only one image on mobile, otherwise show two images
    return artTypes[selectedTab].default.slice(startIndex, endIndex);
  };

  // Truncate quote if it's longer than 200 characters
  const truncatedQuote = quote.length > 200 ? `${quote.slice(0, 200)}...` : quote;

  return (
    <Box display="flex" height="80vh">
      {isMobile ? (
        <>
          {/* Mobile View: Show a Drawer for Categories */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              position: 'fixed',
              top: '64px',
              left: '16px',
              zIndex: 1300,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            {/* Close Button Inside Drawer */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              onClick={() => setDrawerOpen(false)}
              sx={{ justifyContent: 'left' }}
            >
              <CloseIcon />
            </IconButton>

            {/* List of Categories */}
            <List> 
              {categories.map((category, index) => (
                <ListItem key={index} onClick={() => handleTabChange(index)}>
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Mobile View: Text Above Image */}
          <Box 
            onClick={() => handleImageClick(categories[selectedTab])}
            sx={{ 
              width: '100%', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontStyle: 'italic', 
              maxWidth: '500px', 
              marginLeft: '10px',
              textAlign: 'center',
            }}
          >
            {truncatedQuote}
          </Box>
          
          <ImageList sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '10px' }} rowHeight={'auto'}>
            {getCurrentArtworks().map((art: { img: React.Key | null | undefined; title: string | undefined; }) => (
              <ImageListItem key={art.img} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={`${art.img}?w=300&fit=crop&auto=format`}
                  srcSet={`${art.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                  alt={art.title}
                  loading="lazy"
                  style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                  onClick={() => handleImageClick(categories[selectedTab])} // Make images clickable
                />
                <ExpandMoreIcon 
                        sx={{
                          position: 'absolute',
                          bottom: '15vh',
                          right: '10px',
                          color: 'gray', // Icon color
                          fontSize: '45px', // Adjust icon size
                          zIndex: 10, // Ensure it's on top
                          opacity: 0.8, // Slightly transparent
                        }}            
                        onClick={() => handleImageClick(categories[selectedTab])}
                      />
                </ImageListItem>
            ))} 
          </ImageList>
        </>
      ) : (
        <>
          {/* Desktop View: Categories in a Horizontal List */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '80vh',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
              {categories.map((category, index) => (
                <li
                  key={index}
                  style={{
                    listStyleType: index === selectedTab ? 'disc' : 'none',
                    cursor: 'pointer',
                    margin: '5px 0',
                  }}
                  onClick={() => handleTabChange(index)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </Box>

          {/* Desktop View: Image and Quote Side by Side */}
          <Box 
            className="box-hover"
            sx={{ 
              width: '90%', 
              height: '80vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              flexDirection: 'row',
              marginTop: '3vh',
            }} 
          >
            <ImageList sx={{ width: '33%', height: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '10px' }} rowHeight={'auto'}>
              <ImageListItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() =>  handleImageClick(categories[selectedTab])}>
                <Box sx={{ textAlign: 'center', fontStyle: 'italic', padding: '10px' }}>
                  {quote}
                </Box>
              </ImageListItem>
            </ImageList>
            
            <ImageList sx={{ width: '67%', height: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '10px' }} rowHeight={'auto'}>
              {getCurrentArtworks().map((art: { img: React.Key | null | undefined; title: string | undefined; }) => (
                <ImageListItem key={art.img} sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={`${art.img}?w=300&fit=crop&auto=format`}
                    srcSet={`${art.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                    alt={art.title}
                    loading="lazy"
                    style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    onClick={() => handleImageClick(categories[selectedTab])} // Make images clickable
                  />
                </ImageListItem>
              ))} 
            </ImageList>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CategoryArtDisplay;
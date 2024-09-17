import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageList, ImageListItem, Box } from '@mui/material';
import './CategoryArtDisplay.css';

interface CategoryArtDisplayProps {
  categories: string[];
  artTypes: any[];
  quote: string; // New prop for the quote
}

const CategoryArtDisplay: React.FC<CategoryArtDisplayProps> = ({ categories, artTypes, quote }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const handleImageClick = (category: string) => {
    navigate(`/category/${category}`);
  };

  // Function to get a slice of 3 items from the selected category
  const getCurrentArtworks = () => {
    const startIndex = 0; // Pagination can be implemented by updating startIndex
    const endIndex = startIndex + 2; // Get only the first two artworks
    return artTypes[selectedTab].default.slice(startIndex, endIndex);
  };

  return (
    <Box display="flex" height="80vh">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            style={{
              listStyleType: index === selectedTab ? 'disc' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleTabChange(index)}
          >
            {category}
          </li>
        ))}
      </ul>

      <Box sx={{ width: '100%', height: '80vh', overflowX: 'auto' }} onClick={() => handleImageClick(categories[selectedTab])}>
        <ImageList sx={{ width: '100%', height: 'auto', display: 'flex', flexWrap: 'nowrap', paddingBottom: '10px' }} rowHeight={'auto'}>
        <ImageListItem sx={{ width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ textAlign: 'center', fontStyle: 'italic', padding: '10px' }}>
              {quote}
            </Box>
          </ImageListItem>
          
          {getCurrentArtworks().map((art: { img: React.Key | null | undefined; title: string | undefined; }) => (
            <ImageListItem key={art.img} sx={{ width: '33%' }}>
              <img
                src={`${art.img}?w=300&fit=crop&auto=format`}
                srcSet={`${art.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                alt={art.title}
                loading="lazy"
                style={{ objectFit: 'contain', height: '100%', width: '100%' }}
              />
            </ImageListItem>
          ))} 
        </ImageList>
      </Box>
    </Box>
  );
};

export default CategoryArtDisplay;
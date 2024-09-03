import React from 'react';
import { useParams } from 'react-router-dom';
import { ImageList, ImageListItem, Box } from '@mui/material';

// Import your category data
import * as paintings from '../Categories/PaintingsList';
import * as sculptures from '../Categories/SculpturesList';
import * as photography from '../Categories/PhotographyList';

const categoriesMap: Record<string, any> = {
  Paintings: paintings,
  Sculptures: sculptures,
  Photography: photography,
};

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  // Ensure categoryName is not undefined and is a valid key in categoriesMap
  const artworks = categoryName && categoriesMap[categoryName] ? categoriesMap[categoryName].default : [];

  return (
    <Box sx={{ width: '100%', height: '100vh', overflowY: 'auto' }}>
      <ImageList cols={1}>
        {artworks.map((art: { img: React.Key | null | undefined; title: string | undefined; }) => (
          <ImageListItem key={art.img}>
            <img
              src={`${art.img}?w=600&fit=crop&auto=format`}
              srcSet={`${art.img}?w=600&fit=crop&auto=format&dpr=2 2x`}
              alt={art.title}
              loading="lazy"
              style={{ objectFit: 'contain', width: '100%' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default CategoryPage;
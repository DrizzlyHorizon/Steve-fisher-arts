import * as React from 'react';
import { Box } from '@mui/material';

export default function Drawings() {
  const paintings = [
    {
      img: 'https://uploads5.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg',
      title: 'Mona Lisa - Leonardo da Vinci',
    },
    {
      img: 'https://uploads1.wikiart.org/images/claude-monet/water-lilies-1919.jpg',
      title: 'Water Lilies - Claude Monet',
    },
    {
      img: 'https://uploads6.wikiart.org/images/johannes-vermeer/the-girl-with-a-pearl-earring.jpg',
      title: 'Girl with a Pearl Earring - Johannes Vermeer',
    }
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)', // Single column layout
        gap: '40px', // Gap between rows
        width: '100%',
        padding: '16px', // Optional: padding around the grid
      }}
    >
      {paintings.map((painting) => (
        <Box
          key={painting.img}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '800px', // Fixed height for each item
            backgroundColor: '#fff', // Background color for better visibility
          }}
        >
          <img
            src={painting.img}
            alt={painting.title}
            style={{
              height: '100%', // Fill the height of the container
              width: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the image fits within the container
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
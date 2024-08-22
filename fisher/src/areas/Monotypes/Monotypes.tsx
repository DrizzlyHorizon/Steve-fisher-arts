import React, { useState } from 'react';
import { ImageList, ImageListItem, Box, Tabs, Tab } from '@mui/material';

export default function Monotypes() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: any, newValue: React.SetStateAction<number>) => {
    setSelectedTab(newValue);
  };

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
    },
    {
      img: 'https://uploads1.wikiart.org/images/claude-monet/water-lilies-1919.jpg',
      title: 'Water Lilies - Claude Monet',
    },
    {
      img: 'https://uploads1.wikiart.org/images/claude-monet/water-lilies-1919.jpg',
      title: 'Water Lilies - Claude Monet',
    },
  ];

  const sculptures = [
    {
      img: 'https://example.com/sculpture1.jpg',
      title: 'Sculpture 1',
    },
    {
      img: 'https://example.com/sculpture2.jpg',
      title: 'Sculpture 2',
    },
  ];

  const photography = [
    {
      img: 'https://example.com/photo1.jpg',
      title: 'Photo 1',
    },
    {
      img: 'https://example.com/photo2.jpg',
      title: 'Photo 2',
    },
  ];

  const categories = ['Paintings', 'Sculptures', 'Photography'];
  const artTypes = [paintings, sculptures, photography];

  return (
    <Box display="flex" height="80vh">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Art Categories"
        sx={{ borderRight: 2, borderColor: 'divider' }}
        centered
      >
        {categories.map((category, index) => (
          <Tab key={category} label={category} />
        ))}
      </Tabs>

      <Box sx={{ width: '100%', height: '80vh', overflowX: 'auto' }}>
        <ImageList sx={{ width: '100%', height: 'auto', display: 'flex', flexWrap: 'nowrap', scrollBehavior: 'smooth',  }} rowHeight={'auto'}>
          {artTypes[selectedTab].map((art) => (
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
}

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Paintings() {
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
    <div>
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight={'auto'}>
      {paintings.map((painting) => (
        <ImageListItem key={painting.img}>
          <img
            src={`${painting.img}?w=300&fit=crop&auto=format`}
            srcSet={`${painting.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
            alt={painting.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

import React from 'react';
import landingPage from '../../Images/Backsplash.jpg';
import artwork1 from '../../Images/Artwork1.jpg'; // Add image paths for the artworks
import artwork2 from '../../Images/Artwork2.jpg';
import artwork3 from '../../Images/Artwork3.jpg';
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';

const itemData = [
  {
    img: artwork1,
    title: 'Artwork 1',
  },
  {
    img: artwork2,
    title: 'Artwork 2',
  },
  {
    img: artwork3,
    title: 'Artwork 3',
  },
];

const Home = () => {
  return (
    <div className='Main'>
      <Box
        height="70%"
        width="100%"
        marginTop={'1%'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <img
          src={landingPage}
          alt="Landing Page Top"
          style={{
            width: '99%',
            height: '50%',
            borderRadius: '4px',
          }}
        />
      </Box>
      <Typography variant="h2" align="center" gutterBottom margin={'2%'}>
        Welcome to Steve Fisher Arts
      </Typography>
      <Typography variant="body1" align="center" paragraph margin={'2%'}>
        Explore a curated collection of unique and inspiring artworks by Steve Fisher. Each piece captures the essence of creativity and expression, 
        bringing vibrant colors and compelling stories to life on canvas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia porttitor 
        blandit. Quisque suscipit vel est eget bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam 
        accumsan dolor sit amet nisl pretium venenatis. Donec ante est, volutpat at semper at, tempus et leo. Aenean a nisi eget nisl facilisis facilisis. 
        Vivamus auctor libero vel cursus laoreet. Donec a cursus urna. Nam viverra tincidunt blandit. Orci varius natoque penatibus et magnis dis parturient 
        montes, nascetur ridiculus mus. Maecenas lacus dui, consectetur quis cursus lobortis, mollis quis dui. Sed pharetra arcu ac diam pharetra condimentum. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
        <br></br>
        Vestibulum a scelerisque ipsum, sit amet gravida turpis. Aenean velit massa, faucibus convallis lectus id, viverra tincidunt libero. 
        Praesent id nisl ac ipsum bibendum sollicitudin eget non magna. Nulla sollicitudin mauris ac leo auctor iaculis. Cras sed felis nec felis suscipit
        gravida sed id orci. Maecenas felis ante, pharetra et luctus ac, rhoncus sit amet lacus. Sed sit amet fermentum lacus. Integer condimentum cursus 
        luctus.
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Artworks
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8} rowHeight={600}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: '8px',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
    </div>
  );
}

export default Home;

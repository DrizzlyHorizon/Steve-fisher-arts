import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageList, ImageListItem, Box, Fab, Modal, TextField, Button, Stack } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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

  // State to control the modal visibility
  const [open, setOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState<{ title: string | undefined } | null>(null);

  const handleClick = (art: { title: string | undefined }) => {
    setSelectedArt(art); // Set the selected artwork
    setOpen(true); // Open the modal
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
    setSelectedArt(null); // Clear the selected artwork
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission logic (e.g., send data to server or API)
    console.log('Form submitted for:', selectedArt?.title);
    handleClose(); // Close the modal after form submission
  };

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <ImageList cols={1} sx={{ paddingBottom: '15px' }}>
        {artworks.map((art: { img: React.Key | null | undefined; title: string | undefined; forSale?: boolean }) => (
          <ImageListItem key={art.img}>
            <img
              src={`${art.img}?w=600&fit=crop&auto=format`}
              srcSet={`${art.img}?w=600&fit=crop&auto=format&dpr=2 2x`}
              alt={art.title}
              loading="lazy"
              style={{ objectFit: 'contain', width: '100%', maxHeight: '100vh' }}
            />
            {/* Conditionally render a 'For Sale' button or label if the artwork is for sale */}
            {art.forSale && (
              <Box sx={{ textAlign: 'center', margin: '15px' }}>
                <Fab color='default' variant="extended" onClick={() => handleClick(art)}>
                  <AttachMoneyIcon sx={{ mr: 1 }} />
                  For Sale
                </Fab>
              </Box>
            )}
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal for displaying the form */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: '400px',
            textAlign: 'center',
          }}
        >
          <h2 id="modal-title">Inquire About {selectedArt?.title}</h2>
          <p id="modal-description">Please fill out the form to inquire about this artwork.</p>
          <TextField
            label="Your Name"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Your Email"
            type="email"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
          />
          <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default CategoryPage;
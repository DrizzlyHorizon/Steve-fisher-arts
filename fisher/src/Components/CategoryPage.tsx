import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageList, ImageListItem, Box, Fab, Modal, TextField, Button, Stack } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import emailjs from 'emailjs-com';

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

  // State to control the modal visibility and form input
  const [open, setOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState<{ title: string | undefined } | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

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

    const templateParams = {
      name,
      email,
      message,
      artworkTitle: selectedArt?.title,
    };

    // Send email using EmailJS
    emailjs
      .send('service_slkbh7l', 'template_4xn3t66', templateParams, 'F7Up33vnoC4ECkJVq')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setEmailStatus('Email sent successfully');
        },
        (error) => {
          console.error('FAILED...', error);
          setEmailStatus('Failed to send email');
        }
      );

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
          {emailStatus && <p>{emailStatus}</p>}
        </Box>
      </Modal>
    </Box>
  );
};

export default CategoryPage;
import React from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

interface ContactFormProps {
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="formBox">
      <div className="divStyle">
        <h5 className="h4">Get In Touch With Me</h5>
        <p className="p">* Required field</p>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          rows={6}
          fullWidth
          margin="normal"
        />
        <Stack direction="row" spacing={4} marginTop={1}>
          <Button
            variant="contained"
            endIcon={<CloseIcon />}
            color="error"
            onClick={onClose}
            className="button"
          >
            Close
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            color="success"
            type="submit"
            className="button"
          >
            Submit
          </Button>
        </Stack>
      </div>
    </Box>
  );
};

export default ContactForm;

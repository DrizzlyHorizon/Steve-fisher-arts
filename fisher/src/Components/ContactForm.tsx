import React from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [emailStatus, setEmailStatus] = React.useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Define template parameters for EmailJS
    const templateParams = {
      name,        // User's name from the form
      email,       // User's email from the form
      message,     // User's message from the form
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_slkbh7l',    // Replace with your EmailJS service ID
        'template_mdvalo8',   // Replace with your EmailJS template ID
        templateParams, 
        'F7Up33vnoC4ECkJVq'        // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setEmailStatus('Email sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          setEmailStatus('Failed to send email.');
        }
      );

    // Clear form fields
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
        {/* Status message for email send success/failure */}
        {emailStatus && <p>{emailStatus}</p>}
      </div>
    </Box>
  );
};

export default ContactForm;
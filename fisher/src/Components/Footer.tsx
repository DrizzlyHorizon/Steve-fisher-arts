import * as React from 'react';
import { AppBar, Button, IconButton, Snackbar, Toolbar, Tooltip, Typography, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from './ContactForm'; // Import the ContactForm component
import './Footer.css';

export default function Footer() {
    const [open, setOpen] = React.useState(false); // For opening the modal
    const [snackbarOpen, setSnackbarOpen] = React.useState(false); // For snackbar message

    // Open the contact form modal
    const handleOpen = () => setOpen(true);

    // Close the contact form modal
    const handleClose = () => {
        setOpen(false);
    };

    // Open snackbar (for success message)
    const handleSnackbarOpen = () => setSnackbarOpen(true);

    // Close snackbar
    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    // Handle form submission, show snackbar, and close the modal
    const handleSubmit = (data: { name: string; email: string; message: string }) => {
        console.log('Form Submitted:', data); // You can log or process the form data here
        handleSnackbarOpen(); // Show snackbar
        handleClose(); // Close the modal
    };

    return (
        <>
            {/* Footer Bar */}
            <ElevationScroll>
                <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0, backgroundColor: 'white' }}>
                    <Toolbar>
                        <Button>
                            <Link className="social" to="/">©2024 Steve Fisher Arts</Link>
                        </Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                        
                        {/* Contact Us Button */}
                        <Button className="social" color={'inherit'} onClick={handleOpen}>
                            Contact Us
                        </Button>

                        {/* Facebook Icon */}
                        <Tooltip title="Facebook">
                            <IconButton
                                component="a"
                                href="https://www.facebook.com/steve.fisher.7374480"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: 'black' }}
                            >
                                <FacebookIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Email Icon */}
                        <Tooltip title="Email">
                            <IconButton
                                component="a"
                                href="mailto:your.email@example.com"
                                sx={{ color: 'black' }}
                            >
                                <EmailIcon />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            {/* Contact Form Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal"
            >
                <ContactForm onClose={handleClose} />
            </Modal>

            {/* Snackbar for form submission confirmation */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Thank you for your message!"
                action={
                    <Button color="secondary" size="small" onClick={handleSnackbarClose}>
                        Close
                    </Button>
                }
            />
        </>
    );
}

// Helper component for elevation scroll effect (sticky footer)
interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
import * as React from 'react';
import { AppBar, Button, IconButton, Snackbar, Toolbar, Tooltip, Typography, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from './ContactForm'; // Import the new ContactForm component
import './Footer.css';

export default function Footer() {
    const [open, setOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSnackbarOpen = () => setSnackbarOpen(true);

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSubmit = (data: { name: string; email: string; message: string }) => {
        handleSnackbarOpen();
        handleClose();
    };

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0, backgroundColor: 'white' }}>
                    <Toolbar>
                        <Button>
                            <Link className="social" to="/">©2024 Steve Fisher Arts</Link>
                        </Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                        <Button className="social" color={'inherit'} onClick={handleOpen}>Contact Us</Button>
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal"
            >
                <ContactForm onClose={handleClose} onSubmit={handleSubmit} />
            </Modal>

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
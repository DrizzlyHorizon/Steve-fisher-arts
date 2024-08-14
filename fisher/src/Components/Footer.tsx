import * as React from 'react';
import { AppBar, Button, IconButton, Snackbar, Stack, Toolbar, Tooltip, Typography, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import FormBox from "@mui/material/Box";
import './Footer.css';

export default function Footer() {
    const [open, setOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleOpen = () => setOpen(true);
    
    const handleClose = () => {
        setOpen(false);
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSnackbarOpen = () => setSnackbarOpen(true);
    
    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleSnackbarOpen();
        setName('');
        setEmail('');
        setMessage('');
        handleClose();
    };

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" color='transparent' sx={{ top: 'auto', bottom: 0, backgroundColor:'white' }}>
                    <Toolbar>
                        <Button><Link className='social' to='/'>©2024 Steve Fisher Arts</Link></Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                        <Button className='social' color={'inherit'} onClick={handleOpen}>Contact Us</Button>
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
                className='modal'
            >
                <FormBox
                    component="form"
                    onSubmit={handleSubmit}
                    className='formBox'
                >
                    <div className='divStyle'>
                        <h5 className='h4'>Get In Touch With Me</h5>
                        <p className='p'>* Required field</p>
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
                                variant="contained" endIcon={<CloseIcon />}
                                color='error'
                                onClick={handleClose}
                                className='button'
                            >
                                Close
                            </Button>
                            <Button
                                variant="contained" endIcon={<SendIcon />}
                                color='success'
                                type='submit'
                                className='button'
                            >
                                Submit
                            </Button>
                        </Stack>
                    </div>
                </FormBox>
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
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
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
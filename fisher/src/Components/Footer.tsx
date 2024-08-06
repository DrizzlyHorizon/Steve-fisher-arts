import * as React from 'react';
import { AppBar, Button, Snackbar, Stack, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormBox from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

export default function Footer() {
    const [open, setOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSnackbarOpen = () => setSnackbarOpen(true);
    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" color='transparent' sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <Button><Link className='social' to='/'>© Steve Fisher Arts</Link></Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>
                        <Button className='social' onClick={handleOpen}>Contact Us</Button>
                        {/* <Button><Link className='social' to='/contactus/Contact'>Contact Us</Link></Button> */}
                        <Button><Link className='social' to='/code-of-conduct'>Code of Conduct</Link></Button>
                        <Button><Link className='social' to='/privacy-terms'>Privacy and Terms</Link></Button>
                        {/* <Button><Link className='social' to='/community-guidelines'>Community Guidelines</Link></Button> */}
                        {/* <Button> <Link className='social' to='/faq'>FAQ</Link></Button> */}
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
                    className='formBox'
                >
                    <div className='divStyle'>
                        <h5 className='h5'>GET IN TOUCH WITH US</h5>
                        <h4 className='h4'>CONTACT US</h4>
                        <div className='flex-container'>
                            <TextField id="name-input" label="Your Name" name="Name" className='textfield' size="small" fullWidth variant="outlined"
                                required
                            />

                            <TextField id="email-input" label="Your Email" name="EmailAddress" fullWidth className='textfield' size="small" variant="outlined"
                                required
                            />

                            <TextField id="role-input" label="Your Role" name="Role" className='textfieldRole' defaultValue="" size="small"
                                variant="outlined"
                            />

                            <TextField id="organization-input" label="Your Organization" name="Organization" className='textfieldOrganization' defaultValue="" size="small" variant="outlined"
                            />

                            <TextField id="message-input" multiline rows={4} maxRows={6} name="Message" className='textfield'
                            /></div>


                        <p className='p'>* Required field</p>
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
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
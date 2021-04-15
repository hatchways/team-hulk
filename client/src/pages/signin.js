import React from 'react';
import { Button, TextField, Paper, FormControl } from '@material-ui/core';
import laptopPhoto from '../images/blue-shirt-at-laptop.png'
import { Link } from 'react-router-dom';
import './signin.css';

export default class Signin extends React.Component {
    render() {
        return (
            <div className="main">
                <Paper className="image-container" variant="outlined">
                    <img className="laptop-image" src={laptopPhoto} alt="" />
                </Paper>
                <div className="right-screen">
                    <div className="to-sign-up">
                        <p>Don't have an account?</p>
                        <Link to="/"><Button variant="outlined">Sign Up</Button></Link>
                    </div>
                    <div className="signin">
                        <h1>Sign In</h1>
                        <form className="signin-form" action="/signin" method="POST" onSubmit={(e) => { e.preventDefault() }}>
                        <FormControl className="form-control">
                            <TextField
                                required
                                id="first-name"
                                label="First Name"
                                variant="outlined"
                            />
                            </FormControl>
                            <FormControl className="form-control">
                            <TextField
                                required
                                id="outlined-email-input"
                                label="Email Address"
                                variant="outlined"
                            />
                            </FormControl>
                            <FormControl className="form-control">
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                variant="outlined"
                            />
                            </FormControl>
                            <Button className="submit-button" id="form-submit" variant="contained" color="primary">
                                Continue
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

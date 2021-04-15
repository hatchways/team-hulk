import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Paper, FormControl } from '@material-ui/core';
import { Link } from "react-router-dom";
import laptopPhoto from '../images/blue-shirt-at-laptop.png'
import './signup.css'

export default function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            axios.post('/signup', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
                .then(window.location = "/")
        } else {
            alert("Passwords do not match")
        }
    }

    return (
        <div className="main">
            <Paper className="image-container" variant="outlined">
                <img className="laptop-image" src={laptopPhoto} alt="" />
            </Paper>
            <div className="right-screen">
                <div className="to-sign-in">
                    <p>Already have an account?</p>
                    <Link to="/signin"><Button variant="outlined">Sign In</Button></Link>
                </div>
                <div className="get-started">
                    <h1>Get started!</h1>
                    <form
                        onSubmit={handleSubmit}
                        className="signup-form"
                        action="/signup"
                        method="POST"
                    >
                        <FormControl className="form-control" >
                            <TextField required
                                variant="outlined"
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                inputProps={{}}
                                onChange={e => { setFirstName(e.target.value) }}
                            />
                        </FormControl>
                        <FormControl className="form-control">
                            <TextField required
                                variant="outlined"
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                inputProps={{}}
                                onChange={e => { setLastName(e.target.value) }}
                            />
                        </FormControl>
                        <FormControl className="form-control">
                            <TextField required
                                variant="outlined"
                                id="email"
                                name="email"
                                label="Email address"
                                inputProps={{ type: "email" }}
                                onChange={e => { setEmail(e.target.value) }}
                            />
                        </FormControl>
                        <FormControl className="form-control">
                            <TextField required
                                variant="outlined"
                                id="password"
                                name="password"
                                label="Password"
                                inputProps={{ minLength: 6 }}
                                onChange={e => { setPassword(e.target.value) }}
                            />
                        </FormControl>
                        <FormControl className="form-control">
                            <TextField required
                                variant="outlined"
                                id="confirm-password"
                                label="Confirm Password"
                                onChange={e => { setConfirmPassword(e.target.value) }}
                            // error={text === ""}
                            // helperText={text === "" ? 'Empty!' : ' '}
                            />
                        </FormControl>
                        <Button
                            className="submit-button"
                            type="submit"
                            id="form-submit"
                            variant="contained"
                            color="primary"
                        >
                            Continue
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
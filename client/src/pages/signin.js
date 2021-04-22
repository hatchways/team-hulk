import React, { useState } from 'react';
import { Button, TextField, Paper, FormControl, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import laptopPhoto from '../images/blue-shirt-at-laptop.png'
import { Link, Redirect } from 'react-router-dom';

const useStyles = makeStyles({
    imageContainer: {
        width: '500px',
        height: 'auto',
        overflow: 'hidden',
    },
    laptopImage: {
        height: 'auto',
        width: '100rem',
        transform: 'scaleX(-1)',
        marginLeft: "-300px",
        marginTop: "-100px"
    },
    signIn: {
        paddingTop: "10vw",
        paddingLeft: "10vw",
        display: "flex",
        flexDirection: "column",
    },
    signinForm: {
        display: "flex",
        flexDirection: "column",
        width: "20rem",
        maxWidth: "40vw"
    },
    formControl: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
    },
    toSignUp: {
        display: "flex",
        alignSelf: "flex-end",
        alignItems: "center",
        marginTop: "10px",
        marginRight: "1rem",
        "& Button": {
            marginLeft: "10px",
            padding: ".1rem",
            borderRadius: "50px",
            width: "100px",
            height: "25px"
        }
    },
    rightScreen: {
        display: "flex",
        flexDirection: "column",
        width: "700px"
    },
    submitButton: {
        marginTop: "1rem",
        padding: ".5rem",
        borderRadius: "50px",
        width: "35%"
    }
})

export default function Signin() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState([]);
    const [redirect, setRedirect] = useState(false);

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/signin', {
            email: email,
            password: password
        }, {
            withCredentials:true,
            credentials:'include'
        })
            .then((response) => {
                setRedirect(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    if (redirect) {
        return <Redirect to='/dashboard' />
    } else {
        return (
            <Grid style={{ display: "flex", flexDirection: "row" }}>
                <Paper className={classes.imageContainer} variant="outlined">
                    <img className={classes.laptopImage} src={laptopPhoto} alt="" />
                </Paper>
                <Grid className={classes.rightScreen}>
                    <Grid className={classes.toSignUp}>
                        <Typography>Don't have an account?</Typography>
                        <Link to="/signup"><Button variant="outlined">Sign Up</Button></Link>
                    </Grid>
                    <Grid className={classes.signIn}>
                        <Typography variant="h3" style={{ paddingBottom: "1rem" }}>Sign In</Typography>
                        <form
                            className={classes.signinForm}
                            noValidate
                            onSubmit={handleSubmit}
                        >
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="outlined-email-input"
                                    label="Email Address"
                                    variant="outlined"
                                    error={errors.email}
                                    onChange={e => {
                                        setEmail(e.target.value)
                                        if (!e.target.value) {
                                            setErrors(errors => ({
                                                ...errors,
                                                email: true
                                            }));
                                        } else {
                                            setErrors(errors => ({
                                                ...errors,
                                                email: false
                                            }));
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    error={errors.password}
                                    onChange={e => {
                                        setPassword(e.target.value)
                                        if (!e.target.value) {
                                            setErrors(errors => ({
                                                ...errors,
                                                password: true
                                            }));
                                        } else {
                                            setErrors(errors => ({
                                                ...errors,
                                                password: false
                                            }));
                                        }
                                    }}
                                />
                            </FormControl>
                            <Button
                                className={classes.submitButton}
                                type="submit"
                                id="form-submit"
                                variant="contained"
                                color="primary"
                            >
                                Continue
                        </Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
};

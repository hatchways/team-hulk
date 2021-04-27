import React, { useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, FormLabel, RadioGroup, Radio, FormControlLabel, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    radioGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    radioButton: {
        // padding: "3vw"
    },
    feedbackContent: {
        alignSelf: "center"
    },
    radioLabel: {
        width: "150px",
        padding: "25px"
    }

})

export default function FeedbackForm(props) {

    const classes = useStyles();

    const [candidateRating, setCandidateRating] = useState("5");

    const [rating2, setRating2] = useState()

    const handleCandidateChange = (event) => {
        setCandidateRating(event.target.value);
    };

    switch (props.step) {
        case 1:
            return (
                <Grid>
                    <DialogTitle>Question 1 / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Overall, how did this person do in the interview?
                    </DialogContentText>
                        <RadioGroup className={classes.radioGroup} aria-label="interviewee-review" name="interviewee-review" value={candidateRating} onChange={handleCandidateChange}>
                            <FormLabel component="label">Terrible</FormLabel>
                            <FormControlLabel labelPlacement="top" value="1" control={<Radio color="primary" />} label={1} />
                            <FormControlLabel labelPlacement="top" value="2" control={<Radio color="primary" />} label={2} />
                            <FormControlLabel labelPlacement="top" value="3" control={<Radio color="primary" />} label={3} />
                            <FormControlLabel labelPlacement="top" value="4" control={<Radio color="primary" />} label={4} />
                            <FormControlLabel labelPlacement="top" value="5" control={<Radio color="primary" />} label={5} />
                            <FormControlLabel labelPlacement="top" value="6" control={<Radio color="primary" />} label={6} />
                            <FormControlLabel labelPlacement="top" value="7" control={<Radio color="primary" />} label={7} />
                            <FormControlLabel labelPlacement="top" value="8" control={<Radio color="primary" />} label={8} />
                            <FormControlLabel labelPlacement="top" value="9" control={<Radio color="primary" />} label={9} />
                            <FormControlLabel labelPlacement="top" value="10" control={<Radio color="primary" />} label={10} />
                            <FormLabel component="label">Perfect</FormLabel>
                        </RadioGroup>
                    </DialogContent>
                </Grid>
            )
        case 2:
            return (
                <Grid>
                    <DialogTitle>Question 2 / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Submit a review of the candidate in the following categories:
                        </DialogContentText>

                        <RadioGroup className={classes.radioGroup} aria-label="interviewee-review" name="interviewee-review" value={rating2}>
                            <FormLabel component="label" className={classes.radioLabel} >Communication skills</FormLabel>
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="needs-improvement" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="satisfactory" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="good" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="great" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="excellent" control={<Radio color="primary" />} />
                        </RadioGroup>
                        <RadioGroup className={classes.radioGroup}>
                            <FormLabel component="label" className={classes.radioLabel}>Code efficiency</FormLabel>
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="needs-improvement" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="satisfactory" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="good" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="great" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="excellent" control={<Radio color="primary" />} />
                        </RadioGroup>
                        <RadioGroup className={classes.radioGroup}>
                            <FormLabel component="label" className={classes.radioLabel}>Code organization</FormLabel>
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="needs-improvement" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="satisfactory" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="good" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="great" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="excellent" control={<Radio color="primary" />} />
                        </RadioGroup>
                        <RadioGroup className={classes.radioGroup}>
                            <FormLabel component="label" className={classes.radioLabel}>Speed</FormLabel>
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="needs-improvement" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="satisfactory" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="good" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="great" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="excellent" control={<Radio color="primary" />} />
                        </RadioGroup>
                        <RadioGroup className={classes.radioGroup}>
                            <FormLabel component="label" className={classes.radioLabel}>Debugging skills</FormLabel>
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="needs-improvement" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="satisfactory" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="good" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="great" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="excellent" control={<Radio color="primary" />} />
                        </RadioGroup>
                        <RadioGroup className={classes.radioGroup}>
                            <FormLabel component="label" className={classes.radioLabel}>Problem solving skills</FormLabel>
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="needs-improvement" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="satisfactory" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="good" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="great" control={<Radio color="primary" />} />
                            <FormControlLabel className={classes.radioButton} labelPlacement="top" value="excellent" control={<Radio color="primary" />} />
                        </RadioGroup>
                    </DialogContent>
                </Grid >
            );
        case 3:
            return (
                <Grid>
                    <DialogTitle>Question 3 / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            What are some things this candidate did well? (The more specific the better)
                        </DialogContentText>
                        <TextField
                            autoFocus
                            multiline
                            rows={4}
                            variant="outlined"
                            margin="dense"
                            id="candidate-did-well"
                            label="Your answer..."
                            fullWidth
                        />
                    </DialogContent>

                </Grid>
            );
        case 4:
            return (
                <Grid>
                    <DialogTitle>Question 4 / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            What are some things this candidate can improve on? (The more specific the better)
                        </DialogContentText>
                        <TextField
                            autoFocus
                            multiline
                            rows={4}
                            variant="outlined"
                            margin="dense"
                            id="candidate-improvement"
                            label="Your answer..."
                            fullWidth
                        />
                    </DialogContent>

                </Grid>
            );
        case 5:
            return (
                <Grid>
                    <DialogTitle>Question 5 / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Any recommendations on resources that can help this candidate improve?
                        </DialogContentText>
                        <TextField
                            autoFocus
                            multiline
                            rows={4}
                            variant="outlined"
                            margin="dense"
                            id="candidate-recommendations"
                            label="Your answer..."
                            fullWidth
                        />
                    </DialogContent>

                </Grid>
            );
        case 6:
            return (
                <Grid>
                    <DialogTitle>Question 6 / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Anything else?
                        </DialogContentText>
                        <TextField
                            autoFocus
                            multiline
                            rows={4}
                            variant="outlined"
                            margin="dense"
                            id="anything-else"
                            label="Your answer..."
                            fullWidth
                        />
                    </DialogContent>

                </Grid>
            );
        default:
    }
}

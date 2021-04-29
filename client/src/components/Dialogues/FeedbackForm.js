import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, FormLabel, RadioGroup, Radio, FormControlLabel, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    feedbackRadioContainer: {
        display: "flex",
    },
    overallScoreRadioGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%"
    },
    feedbackRadioGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%"
    },
    feedbackRadioButton: {
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: ".5rem"
    },
    feedbackRadioLabel: {
        alignSelf: "center",
        width: "20%",
        fontSize: "1rem",
    },
    feedbackScoreTitleContainer: {
        marginLeft: "20%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    feedbackScoreTitle: {
        textAlign: "center",
        width: "100px",
        color: theme.palette.primary.main
    },
    feedbackQuestionTitle: {
        fontSize: "1rem",
        fontWeight: 700,
        marginBottom: "4rem"
    }
}))

export default function FeedbackForm(props) {

    const classes = useStyles();

    switch (props.step) {
        case 1:
            return (
                <Grid>
                    <DialogTitle><Typography variant="DialogTitle" display="inline" color="primary">Question 1</Typography> / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.feedbackQuestionTitle}>
                            Overall, how did this person do in the interview?
                        </DialogContentText>
                        <RadioGroup
                            className={classes.overallScoreRadioGroup}
                            aria-label="overallScore"
                            name="overallScore"
                            value={props.scores.overallScore}
                            onChange={e => {
                                props.setScores(scores => ({ ...scores, overallScore: e.target.value }))
                            }}>
                            <FormLabel component="label"> Terrible</FormLabel>
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
                </Grid >
            )
        case 2:
            return (
                <Grid>
                    <DialogTitle><Typography variant="DialogTitle" display="inline" color="primary">Question 2</Typography> / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.feedbackQuestionTitle}>
                            Submit a review of the candidate in the following categories:
                        </DialogContentText>
                        <Grid className={classes.feedbackScoreTitleContainer}>
                            <Typography className={classes.feedbackScoreTitle}>Needs Improvement</Typography>
                            <Typography className={classes.feedbackScoreTitle}>Satisfactory</Typography>
                            <Typography className={classes.feedbackScoreTitle}>Good</Typography>
                            <Typography className={classes.feedbackScoreTitle}>Great</Typography>
                            <Typography className={classes.feedbackScoreTitle}>Excellent</Typography>
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel} >Communication skills</FormLabel>
                            <RadioGroup
                                value={props.scores.communication}
                                className={classes.feedbackRadioGroup}
                                aria-label="interviewee-review"
                                name="interviewee-review"
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, communication: e.target.value }))
                                }}>
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="1" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="2" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="3" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="4" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="5" control={<Radio color="primary" />} />
                            </RadioGroup>
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Code efficiency</FormLabel>
                            <RadioGroup
                                value={props.scores.codeEfficiency}
                                className={classes.feedbackRadioGroup}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, codeEfficiency: e.target.value }))
                                }}>
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="1" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="2" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="3" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="4" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="5" control={<Radio color="primary" />} />
                            </RadioGroup>
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Code organization</FormLabel>
                            <RadioGroup
                                value={props.scores.codeOrganization}
                                className={classes.feedbackRadioGroup}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, codeOrganization: e.target.value }))
                                }}>
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="1" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="2" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="3" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="4" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="5" control={<Radio color="primary" />} />
                            </RadioGroup>
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Speed</FormLabel>
                            <RadioGroup
                                value={props.scores.speed}
                                className={classes.feedbackRadioGroup}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, speed: e.target.value }))
                                }}>
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="1" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="2" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="3" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="4" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="5" control={<Radio color="primary" />} />
                            </RadioGroup>
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Debugging skills</FormLabel>
                            <RadioGroup
                                value={props.scores.debugging}
                                className={classes.feedbackRadioGroup}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, debugging: e.target.value }))
                                }}>
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="1" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="2" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="3" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="4" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="5" control={<Radio color="primary" />} />
                            </RadioGroup>
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Problem solving skills</FormLabel>
                            <RadioGroup
                                value={props.scores.problemSolving}
                                className={classes.feedbackRadioGroup}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, problemSolving: e.target.value }))
                                }}>
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="1" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="2" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="3" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="4" control={<Radio color="primary" />} />
                                <FormControlLabel className={classes.feedbackRadioButton} labelPlacement="top" value="5" control={<Radio color="primary" />} />
                            </RadioGroup>
                        </Grid>
                    </DialogContent>
                </Grid >
            );
        case 3:
            return (
                <Grid>
                    <DialogTitle><Typography variant="DialogTitle" display="inline" color="primary">Question 3</Typography> / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.feedbackQuestionTitle}>
                            What are some things this candidate did well? (The more specific the better)
                        </DialogContentText>
                        <TextField
                            onChange={e => {
                                props.setScores(scores => ({ ...scores, didWell: e.target.value }))
                            }}
                            value={props.scores.didWell}
                            autoFocus
                            multiline
                            rows={5}
                            variant="outlined"
                            margin="dense"
                            id="didWell"
                            label="Your answer..."
                            fullWidth
                        />
                    </DialogContent>

                </Grid>
            );
        case 4:
            return (
                <Grid>
                    <DialogTitle><Typography variant="DialogTitle" display="inline" color="primary">Question 4</Typography> / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.feedbackQuestionTitle}>
                            What are some things this candidate can improve on? (The more specific the better)
                        </DialogContentText>
                        <TextField
                            onChange={e => {
                                props.setScores(scores => ({ ...scores, canImprove: e.target.value }))
                            }}
                            value={props.scores.canImprove}
                            autoFocus
                            multiline
                            rows={5}
                            variant="outlined"
                            margin="dense"
                            id="canImprove"
                            label="Your answer..."
                            fullWidth
                        />
                    </DialogContent>

                </Grid>
            );
        case 5:
            return (
                <Grid>
                    <DialogTitle><Typography variant="DialogTitle" display="inline" color="primary">Question 5</Typography> / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.feedbackQuestionTitle}>
                            Any recommendations on resources that can help this candidate improve?
                        </DialogContentText>
                        <TextField
                            onChange={e => {
                                props.setScores(scores => ({ ...scores, recommendedResources: e.target.value }))
                            }}
                            value={props.scores.recommendedResources}
                            autoFocus
                            multiline
                            rows={5}
                            variant="outlined"
                            margin="dense"
                            id="recommendedResources"
                            label="Your answer..."
                            fullWidth
                        />
                    </DialogContent>

                </Grid>
            );
        case 6:
            return (
                <Grid>
                    <DialogTitle><Typography variant="DialogTitle" display="inline" color="primary">Question 6</Typography> / 6</DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.feedbackQuestionTitle}>
                            Anything else?
                        </DialogContentText>
                        <TextField
                            onChange={e => {
                                props.setScores(scores => ({ ...scores, additionalFeedback: e.target.value }))
                            }}
                            value={props.scores.additionalFeedback}
                            autoFocus
                            multiline
                            rows={5}
                            variant="outlined"
                            margin="dense"
                            id="additionalFeedback"
                            label="Your answer..."
                            fullWidth
                        />
                    </DialogContent>
                </Grid>
            );
        default:
    }
}
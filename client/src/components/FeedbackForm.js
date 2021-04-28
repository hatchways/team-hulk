import React from 'react';
import { Grid, FormLabel, TextField, Typography, DialogTitle, DialogContentText, DialogContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import RubricBubble from './RubricBubble'

const useStyles = makeStyles((theme) => ({
    feedbackRadioContainer: {
        display: "flex",
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
        marginLeft: "22.5%",
        width:"71.5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    feedbackScoreTitle: {
        textAlign: "center",
        width:"100px",
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
                        <RubricBubble
                            name="overallScore"
                            numColumns={10}
                            columnLabelToggle={true}
                            leftLabel="Terrible"
                            rightLabel="Perfect"
                            score={props.scores.overallScore}
                            setScores={props.setScores}
                            onChange={e => {
                                props.setScores(scores => ({ ...scores, overallScore: e.target.value }))
                            }} />
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
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Communication skills</FormLabel>
                            <RubricBubble
                                name="interviewee-review"
                                numColumns={5}
                                score={props.scores.communication}
                                setScores={props.setScores}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, communication: e.target.value }))
                                }} />
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Code efficiency</FormLabel>
                            <RubricBubble
                                name="interviewee-review"
                                numColumns={5}
                                score={props.scores.codeEfficiency}
                                setScores={props.setScores}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, codeEfficiency: e.target.value }))
                                }} />
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Code organization</FormLabel>
                            <RubricBubble
                                name="interviewee-review"
                                numColumns={5}
                                score={props.scores.codeOrganization}
                                setScores={props.setScores}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, codeOrganization: e.target.value }))
                                }} />
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Speed</FormLabel>
                            <RubricBubble
                                name="interviewee-review"
                                numColumns={5}
                                score={props.scores.speed}
                                setScores={props.setScores}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, speed: e.target.value }))
                                }} />
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Debugging skills</FormLabel>
                            <RubricBubble
                                name="interviewee-review"
                                numColumns={5}
                                score={props.scores.debugging}
                                setScores={props.setScores}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, debugging: e.target.value }))
                                }} />
                        </Grid>
                        <Grid className={classes.feedbackRadioContainer}>
                            <FormLabel component="label" className={classes.feedbackRadioLabel}>Problem solving skills</FormLabel>
                            <RubricBubble
                                name="interviewee-review"
                                numColumns={5}
                                score={props.scores.problemSolving}
                                setScores={props.setScores}
                                onChange={e => {
                                    props.setScores(scores => ({ ...scores, problemSolving: e.target.value }))
                                }} />
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

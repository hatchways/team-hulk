import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography, CircularProgress } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const feedback = {
    overallScore: "5",
    codeEfficiency: "1",
    communication: "2",
    debugging: "5",
    problemSolving: "4",
    speed: "3",
    didWell: "Great job with x - y - z",
    canImprove: "You could do better with a - b - c",
    recommendedResources: "Have you heard of this thing called \"The Docs\"?",
    additionalFeedback: "Keep at it!"
}


const useStyles = makeStyles((theme) => ({
    feedbackExit: {
        marginTop: ".5rem",
        borderRadius: "50px",
        width: "10px",
        alignSelf: "flex-end"
    },
    feedbackTitle: {
        alignSelf: "center",
        color: theme.palette.primary.main,
        padding: "1rem",
        marginTop: "1rem"
    },
    feedbackContent: {
        alignSelf: "center"
    },
    feedbackActions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    feedbackButton: {
        marginTop: "1rem",
        padding: ".5rem",
        borderRadius: "50px",
        width: "20%",
        marginBottom: "2rem"
    }
})
)

export default function FeedbackHistoryDialog(props) {
    const classes = useStyles();

    const open = props.open

    const getPercent = (ratingNumber) => {
        const float = parseFloat(ratingNumber)
        const percent = float / 5 * 100
        return percent
    }

    return (
        <Dialog
            className={classes.feedbackMain}
            maxWidth="md"
            fullWidth="true"
            open={open}
            onClose={props.handleClose}
            aria-labelledby="feedback-form"
        >
            <Button className={classes.feedbackExit} onClick={props.handleClose}>X</Button>
            <Typography variant='h4' className={classes.feedbackTitle} id="feedback-form">Your Feedback</Typography>
            <DialogContentText variant='subtitle1' style={{ alignSelf: "center" }}>
                From your interview on {props.date}
            </DialogContentText>
            <DialogContentText variant='subtitle1' style={{ alignSelf: "center" }}>
                Ratings with a label are ranked on a scale from Needs Improvement to Excellent
            </DialogContentText>
            <DialogContent >
                <Typography>Overall score: {feedback.overallScore} / 10</Typography><CircularProgress variant="determinate" value={parseFloat(feedback.overallScore) * 10}/>
                <Typography>Code efficiency: {feedback.codeEfficiency} / 5</Typography><CircularProgress variant="determinate" value={getPercent(feedback.codeEfficiency)}/>
                <Typography>Communication: {feedback.communication} / 5</Typography><CircularProgress variant="determinate" value={getPercent(feedback.communication)}/>
                <Typography>Debugging: {feedback.debugging} / 5</Typography><CircularProgress variant="determinate" value={getPercent(feedback.debugging)}/>
                <Typography>Problem Solving: {feedback.problemSolving} / 5</Typography><CircularProgress variant="determinate" value={getPercent(feedback.problemSolving)}/>
                <Typography>Speed: {feedback.speed} / 5</Typography><CircularProgress variant="determinate" value={getPercent(feedback.speed)}/>

                <DialogActions className={classes.feedbackActions}>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}


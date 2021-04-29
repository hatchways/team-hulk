import React, { useEffect, useState } from 'react';
import { Divider, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography, CircularProgress } from '@material-ui/core/';
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
    feedbackMain: {
        display: "flex",
        flexDirection: "column"
    },
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
    },
    pointsDisplayHeader: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    },
    pointsDisplayItem: {
        padding: "1rem",
        height: "50px",
        width: "150px",
    },
    bottomProgCircle: {
        color: "#CCCCCC"
    },
    topProgCircle: {
        color: theme.palette.primary.light
    },
    feedbackDisplayItem: {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
    }
})
)

function PointsDisplay(props) {

    const classes = useStyles();

    const getPercent = (ratingNumber, total) => {
        const float = parseFloat(ratingNumber)
        const percent = float / total * 100
        return percent
    }

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const value = getPercent(props.score, props.outOf)
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= value ? value : prevProgress + 5));
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Grid style={{ display: "flex", justifyContent: "center" }}>
            <Typography className={classes.pointsDisplayItem}>
                <Typography className={classes.pointsDisplayHeader} >
                    {props.scoreTitle}
                </Typography>
                <Typography>
                    {props.score} / {props.outOf}
                </Typography>
            </Typography>
            <Grid className={classes.pointsDisplayItem}>
                <CircularProgress
                    className={classes.bottomProgCircle}
                    variant="determinate"
                    color="secondary"
                    thickness={4}
                    value={100}
                    style={{ position: "absolute" }}
                />
                <CircularProgress
                    className={classes.topProgCircle}
                    variant="determinate"
                    thickness={4}
                    value={progress}
                    style={{ position: "absolute" }}
                />
            </Grid>
        </Grid>
    )
}

function FeedbackDisplay(props) {

    const classes = useStyles();

    return (
        <Grid style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" className={classes.feedbackDisplayItem}>
                {props.questionNum}. {props.questionTitle}
            </Typography>
            <Typography className={classes.feedbackDisplayItem}>
                "{props.feedback}"
            </Typography>
            <Divider style={{ marginTop: "1rem" }} />
        </Grid>
    )
}

export default function FeedbackHistoryDialog(props) {
    const classes = useStyles();

    const open = props.open

    return (
        <Dialog
            maxWidth="md"
            fullWidth="true"
            open={open}
            onClose={props.handleClose}
        >
            <DialogContent className={classes.feedbackMain}>
                <Button className={classes.feedbackExit} onClick={props.handleClose}>X</Button>
                <Typography variant='h4' className={classes.feedbackTitle} id="feedback-form">Your Feedback</Typography>
                <DialogContentText variant='subtitle1' style={{ alignSelf: "center" }}>
                    From your interview on {props.date}
                </DialogContentText>
                <Grid style={{ display: "flex" }}>
                    <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <PointsDisplay open={props.animate} score={feedback.overallScore} scoreTitle="Overall Score" outOf={10} />
                        <PointsDisplay open={props.animate} score={feedback.codeEfficiency} scoreTitle="Code Efficiency" outOf={5} />
                        <PointsDisplay open={props.animate} score={feedback.communication} scoreTitle="Communication" outOf={5} />
                        <PointsDisplay open={props.animate} score={feedback.debugging} scoreTitle="Debugging" outOf={5} />
                        <PointsDisplay open={props.animate} score={feedback.problemSolving} scoreTitle="Problem Solving" outOf={5} />
                        <PointsDisplay open={props.animate} score={feedback.speed} scoreTitle="Speed" outOf={5} />
                    </Grid>
                    <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Divider />
                        <FeedbackDisplay questionNum={1} questionTitle={"What are some things this candidate did well?"} feedback={feedback.didWell} />
                        <FeedbackDisplay questionNum={2} questionTitle={"What are some things this candidate can improve on?"} feedback={feedback.canImprove} />
                        <FeedbackDisplay questionNum={3} questionTitle={"Any recommendations on resources that can help this candidate improve?"} feedback={feedback.recommendedResources} />
                        <FeedbackDisplay questionNum={4} questionTitle={"Anything else?"} feedback={feedback.additionalFeedback} />
                    </Grid>
                </Grid>
                <DialogActions className={classes.feedbackActions}>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}


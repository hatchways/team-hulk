import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import FeedbackForm from './FeedbackForm';

const useStyles = makeStyles((theme) => ({
  feedbackExit: {
    marginTop: ".5rem",
    borderRadius: "50px",
    width: "10px",
    alignSelf:"flex-end"
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
}))

export default function FeedbackDialog(props) {
  const classes = useStyles();

  const [scores, setScores] = useState({ overallScore: "5", didWell: "", canImprove: "", recommendedResources: "", additionalFeedback: "" })
  const [step, setStep] = useState(1)
  const open = props.open

  const incrementStep = () => {
    setStep(step + 1)
  }

  const decrementStep = () => {
    setStep(step - 1)
  }

  const handleClose = () => {
    props.handleClose();
  };

  const handleSubmit = () => {
    // Save to database here
    setScores({ overallScore: "5", didWell: "", canImprove: "", recommendedResources: "", additionalFeedback: "" })
    setStep(1)
    props.handleClose();
  }

  let continueButton;

  if (step === 6) {
    continueButton =
      <Button
        className={classes.feedbackButton}
        type="submit"
        id="form-submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
  } else {
    continueButton =
      <Button
        className={classes.feedbackButton}
        id="form-continue"
        variant="contained"
        color="primary"
        onClick={incrementStep}
      >
        Next Question
        </Button>
  }

  return (
    <Dialog
      className={classes.feedbackMain}
      maxWidth="md"
      fullWidth="true"
      open={open}
      onClose={handleClose}
      aria-labelledby="feedback-form"
    >
      <Button className={classes.feedbackExit} onClick={handleClose}>X</Button>
      <Typography variant='h4' className={classes.feedbackTitle} id="feedback-form">Give Us Your Feedback</Typography>
      <DialogContentText variant='subtitle1' style={{ alignSelf: "center", fontVariant: "italics" }}>
        Please leave your comments here:
        </DialogContentText>
      <DialogContent >
        <FeedbackForm step={step} scores={scores} setScores={setScores} />
        <DialogActions className={classes.feedbackActions}>
          {step > 1 &&
            <Button
              className={classes.feedbackButton}
              id="form-backwards"
              variant="outlined"
              onClick={decrementStep}
            >
              Previous Question</Button>
          }
          {continueButton}
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}


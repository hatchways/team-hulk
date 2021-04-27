import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import FeedbackForm from './FeedbackForm';

const useStyles = makeStyles({
  feedbackTitle: {
    alignSelf: "center"
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
    width: "20%"
  }
})


export default function FeedbackDialog(props) {

  const classes = useStyles();

  const open = props.open

  const [step, addStep] = useState(1)

  const incrementStep = () => {
    addStep(step + 1)
  }

  const decrementStep = () => {
    addStep(step - 1)
  }

  const handleClose = () => {
    props.handleClose();
  };

  const handleSubmit = () => {
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
      maxWidth="lg"
      fullWidth="true"
      display="flex"
      open={open}
      onClose={handleClose}
      aria-labelledby="feedback-form"
    >
      <DialogTitle className={classes.feedbackTitle} color="primary" id="feedback-form">Give Us Your Feedback</DialogTitle>
      <DialogContentText className={classes.feedbackTitle}>
        Please leave your comments here:
        </DialogContentText>
      <DialogContent >
        <FeedbackForm step={step} />
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


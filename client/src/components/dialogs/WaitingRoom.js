import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Avatar, Card, CardHeader } from "@material-ui/core";
import facePhotoBoy from "../../images/face-pic-boy.png";
import facePhotoGirl from "../../images/face-pic-girl.png";
import { UserContext } from "../../context/UserContext";
import copy from "copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  dialogWidth: {
    minWidth: "700px",
    paddingLeft: "4rem",
    paddingTop: "1.8rem",
  },
  particpantsContent: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: "2px",
    marginLeft: "0.5rem",
    width: "80%",
  },
  avatarPhoto: {
    paddingBottom: 0,
    marginLeft: "1.5rem",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogTitle: {
    marginTop: "2rem",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography className={classes.dialogTitle} variant="h5">
          {children}
        </Typography>
      </MuiDialogTitle>
    </>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: 0,
    "& .MuiFormControl-root": {
      marginTop: "0.5rem",
    },
    "& .MuiFormHelperText-root": {
      fontWeight: "bold",
      fontSize: "0.8rem",
    },
    "& .MuiInputBase-input": {
      color: theme.palette.grey[600],
    },
    "& .MuiButton-root": {
      margin: "2rem 0 0 0.5rem",
      borderRadius: "30px",
      padding: "1rem 3rem",
    },
    "& .MuiTypography-root": {
      fontWeight: "bold",
    },
    "& .MuiCardHeader-title": {
      color: theme.palette.grey[600],
    },
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    marginLeft: "0.5rem",
    padding: theme.spacing(1),
    justifyContent: "flex-start",
    "& .MuiButton-root": {
      borderRadius: "30px",
      padding: "1rem 3rem",
    },
    marginBottom: "4rem",
  },
}))(MuiDialogActions);

export default function WaitingRoom({ open, setOpen }) {
  const classes = useStyles();
  const { user, newlyCreatedInterview } = useContext(UserContext);
  const history = useHistory();
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const goToInterview = () => {
    history.push(`/interview/${newlyCreatedInterview._id}`);
    setOpen(false);
  };

  const copyLinkToClipboard = (e) => {
    copy(`http://localhost:3000/interview/${newlyCreatedInterview._id}`);
    setShowCopyNotification(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeCopyNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowCopyNotification(false);
  };

  return (
    <div>
      <Dialog
        classes={{ paper: classes.dialogWidth }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Waiting Room
        </DialogTitle>
        <DialogContent>
          <Grid container item direction="column" spacing={2}>
            <Grid container item direction="row">
              <Grid container item md={6}>
                <FormHelperText>Share link</FormHelperText>
                <TextField
                  fullWidth
                  inputProps={{ readOnly: true }}
                  id="outlined-helperText"
                  variant="outlined"
                  value={
                    newlyCreatedInterview
                      ? `http://localhost:3000/interview/${newlyCreatedInterview._id}`
                      : null
                  }
                />
              </Grid>
              <Grid container item md={4}>
                <Button
                  onClick={copyLinkToClipboard}
                  autoFocus
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  copy
                </Button>
              </Grid>
            </Grid>
            <Grid container item direction="column" spacing={2}>
              <Grid container item>
                <Typography variant="h6" color="primary">
                  Participants
                </Typography>
              </Grid>
              <Grid container item className={classes.particpantsContent}>
                <Card elevation={0} style={{ paddingBottom: "1rem" }}>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe" src={facePhotoBoy} />}
                    title={user.name}
                    className={classes.avatarPhoto}
                  />
                  <CardHeader
                    avatar={<Avatar aria-label="recipe" src={facePhotoGirl} />}
                    title="Alexandra"
                    className={classes.avatarPhoto}
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={goToInterview}
            size="large"
            variant="contained"
            color="primary"
          >
            start
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        className={classes.snackbarColor}
        open={showCopyNotification}
        autoHideDuration={6000}
        onClose={closeCopyNotification}
        message="link copied!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={closeCopyNotification}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

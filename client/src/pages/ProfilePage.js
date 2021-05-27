import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  FormControl,
  OutlinedInput,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { PointsDisplay } from "../components/dialogues/FeedbackHistoryDialog";
import avatar from "../images/face-pic-boy.png";

const useStyles = makeStyles((theme) => ({
  profileMain: {
    width: "750px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  avatar: {
    height: "10rem",
    width: "10rem",
    margin: "1rem",
    marginTop: "2rem",
  },
  name: {
    paddingBottom: "2rem",
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "3rem",
  },
  header: {
    width: "150px",
    paddingRight: "2rem",
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "1.15rem",
  },
  pointsDisplayContainer: {
    display: "flex",
    position: "relative",
  },
  overlay: {
    display: "flex",
    color: "transparent",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
    borderRadius: "5px",
    "&:hover": {
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "rgba(0,0,0,.75)",
      cursor: "pointer",
    },
  },
  overlayText: {
    fontSize: "1rem",
  },
  textBox: {
    width: "500px",
    fontSize: "1.15rem",
  },
  infoContainer: {
    display: "flex",
    padding: "1rem",
  },
  infoContainerColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  xpContainer: {
    display: "flex",
  },
  btn: {
    marginTop: "1rem",
    borderRadius: "30px",
    padding: "1rem 3rem",
  },
}));

const ChangePoints = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography component="legend">Edit value</Typography>
      <Rating
        name={props.name}
        value={props.defaultScore}
        onChange={(event, newValue) => {
          props.changeScore(newValue);
        }}
      />
    </Box>
  );
};

const Profile = () => {
  const classes = useStyles();

  const [profileAvatar, setProfileAvatar] = useState(avatar);
  const [proXp, setProXp] = useState(3);
  const [jobIntXp, setJobIntXp] = useState(2);
  const [FELanguages, setFELanguages] = useState("JavaScript, TypeScript");
  const [BELanguages, setBELanguages] = useState("Node.js, PHP, Python");
  const [Bio, setBio] = useState(
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
  );
  const [showProXpEdit, setShowProXpEdit] = useState(false);
  const [showIntXpEdit, setShowIntXpEdit] = useState(false);

  const handleEditXp = (type) => {
    if (type === "pro") {
      setShowProXpEdit((prevValue) => !prevValue);
    } else if (type === "int") {
      setShowIntXpEdit((prevValue) => !prevValue);
    }
  };

  const handleChangeScore = (scoreToChange, newScore) => {
    scoreToChange(newScore);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // API call goes here
  };

  return (
    <Grid className={classes.profileContainer}>
      <Grid className={classes.profileMain}>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Avatar src={profileAvatar} className={classes.avatar} />
          <Typography className={classes.name}>Joel</Typography>
        </Grid>
        <Grid className={classes.xpContainer}>
          <Grid className={classes.infoContainerColumn}>
            <Grid className={classes.pointsDisplayContainer}>
              <Grid
                className={classes.overlay}
                onClick={() => handleEditXp("pro")}
              >
                <Typography className={classes.overlayText}>Edit</Typography>
              </Grid>
              <PointsDisplay
                score={proXp}
                scoreTitle="Professional Xp"
                outOf={5}
              />
            </Grid>
            <Grid style={{ display: showProXpEdit ? "block" : "none" }}>
              <ChangePoints
                name="proXp"
                defaultScore={proXp}
                changeScore={(newScore) => {
                  handleChangeScore(setProXp, newScore);
                }}
              />
            </Grid>
          </Grid>
          <Grid className={classes.infoContainerColumn}>
            <Grid className={classes.pointsDisplayContainer}>
              <Grid
                className={classes.overlay}
                onClick={() => handleEditXp("int")}
              >
                <Typography className={classes.overlayText}>Edit</Typography>
              </Grid>
              <PointsDisplay
                score={jobIntXp}
                scoreTitle="Interview Xp"
                outOf={5}
              />
            </Grid>
            <Grid style={{ display: showIntXpEdit ? "block" : "none" }}>
              <ChangePoints
                name="jobIntXp"
                defaultScore={jobIntXp}
                changeScore={(newScore) => {
                  handleChangeScore(setJobIntXp, newScore);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.infoContainer}>
          <Typography className={classes.header}>
            Front-end Languages:
          </Typography>
          <FormControl variant="outlined">
            <OutlinedInput
              className={classes.textBox}
              multiline={true}
              defaultValue={FELanguages}
              onChange={(e) => {
                setFELanguages(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid className={classes.infoContainer}>
          <Typography className={classes.header}>
            Back-end Languages:
          </Typography>
          <FormControl variant="outlined">
            <OutlinedInput
              className={classes.textBox}
              multiline={true}
              defaultValue={BELanguages}
              onChange={(e) => {
                setBELanguages(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid className={classes.infoContainer}>
          <Typography className={classes.header}>Bio:</Typography>
          <FormControl variant="outlined">
            <OutlinedInput
              className={classes.textBox}
              multiline={true}
              defaultValue={Bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Button
          className={classes.btn}
          size="large"
          variant="contained"
          color="primary"
          type="submit"
          id="form-submit"
          onClick={handleSave}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Profile;

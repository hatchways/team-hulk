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
}));

const ChangePoints = (props) => {
  const classes = useStyles();

  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">Edit value</Typography>
      <Rating
        name="simple-controlled"
        value={props.defaultScore}
        onChange={(event, newValue) => {
          props.setScore(newValue);
        }}
      />
    </Box>
  );
};

const Profile = () => {
  const classes = useStyles();

  const [experienceLevel, setExperienceLevel] = useState("");
  const [rating, setRating] = useState(2);
  const [bio, setBio] = useState("Bio bio bio");
  const [proXp, setProXp] = useState(3);
  const [jobIntXp, setJobIntXp] = useState(2);
  const [showProXpEdit, setShowProXpEdit] = useState(false);
  const [showIntXpEdit, setShowIntXpEdit] = useState(false);

  const handleEditXp = (type) => {
    if (type === "pro") {
      setShowProXpEdit((prevValue) => !prevValue);
    } else if (type === "int") {
      setShowIntXpEdit((prevValue) => !prevValue);
    }
  };

  const handleSetScore = (xpTitle, newScore) => {
    xpTitle(newScore);
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
          <Avatar src={avatar} className={classes.avatar} />
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
                defaultScore={proXp}
                setScore={(newScore) => {
                  handleSetScore(setProXp, newScore);
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
              <ChangePoints defaultScore={jobIntXp} />
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
              defaultValue="JavaScript, TypeScript"
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
              defaultValue="Node.js, PHP, Python"
            />
          </FormControl>
        </Grid>
        <Grid className={classes.infoContainer}>
          <Typography className={classes.header}>Bio:</Typography>
          <FormControl variant="outlined">
            <OutlinedInput
              className={classes.textBox}
              multiline={true}
              defaultValue="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem."
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;

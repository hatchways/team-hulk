import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  MenuItem,
  Card,
  Avatar,
} from "@material-ui/core";
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
  header: {
    width: "150px",
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "1.15rem",
  },
  name: {
    paddingBottom: "2rem",
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "3rem",
  },
  text: {
    width: "500px",
    fontSize: "1.15rem",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    padding: "3rem",
  },
  infoContainer: {
    display: "flex",
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
  avatar: {
    height: "10rem",
    width: "10rem",
    margin: "1rem",
  },
}));

const Profile = () => {
  const classes = useStyles();

  const [experienceLevel, setExperienceLevel] = useState("");
  const [rating, setRating] = useState(2);
  const [bio, setBio] = useState("Bio bio bio");
  const [proXp, setProXp] = useState("Professional");
  const [jobIntXp, setJobIntXp] = useState("JobIntXp");

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
          <Grid className={classes.infoContainer}>
            <PointsDisplay score={3} scoreTitle="Professional Exp" outOf={5} />
          </Grid>
          <Grid className={classes.infoContainer}>
            <PointsDisplay score={2} scoreTitle="Interview Exp" outOf={5} />
          </Grid>
        </Grid>
        <Grid className={classes.infoContainer}>
          <Typography className={classes.header}>
            Front-end Languages:
          </Typography>
          <Typography className={classes.text}>
            JavaScript, TypeScript
          </Typography>
        </Grid>
        <Grid className={classes.infoContainer}>
          <Typography className={classes.header}>
            Back-end Languages:
          </Typography>
          <Typography className={classes.text}>Node.js, PHP, Python</Typography>
        </Grid>
        <Grid className={classes.infoContainer}>
          <Typography className={classes.header}>Bio:</Typography>
          <Typography className={classes.text}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;

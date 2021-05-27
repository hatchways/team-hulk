import React, { useState, useContext, useEffect } from "react";
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
import { UserContext } from "../context/UserContext";
import avatar from "../images/face-pic-boy.png";
import axios from "axios";

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

  const { user } = useContext(UserContext);

  const [profileAvatar, setProfileAvatar] = useState(avatar);

  const [profileInfo, setProfileInfo] = useState(user.profileInfo);

  useEffect(() => {
    setProfileInfo(user.profileInfo);
  }, [user]);

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
    setProfileInfo((profileInfo) => ({
      ...profileInfo,
      [scoreToChange]: newScore,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .put(`/api/user/${user._id}`, {
        profileInfo: profileInfo,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditPhoto = () => {};

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
          <Grid className={classes.pointsDisplayContainer}>
            <Grid className={classes.overlay} onClick={handleEditPhoto}>
              <Typography className={classes.overlayText}>Edit</Typography>
            </Grid>
            <Avatar src={profileAvatar} className={classes.avatar} />
          </Grid>
          <Typography className={classes.name}>
            {user.firstName} {user.lastName}
          </Typography>
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
                score={profileInfo ? profileInfo.proXp : null}
                scoreTitle="Professional Xp"
                outOf={5}
              />
            </Grid>
            <Grid style={{ display: showProXpEdit ? "block" : "none" }}>
              <ChangePoints
                name="proXp"
                defaultScore={profileInfo ? profileInfo.proXp : null}
                changeScore={(newScore) => {
                  handleChangeScore("proXp", newScore);
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
                score={profileInfo ? profileInfo.intXp : null}
                scoreTitle="Interview Xp"
                outOf={5}
              />
            </Grid>
            <Grid style={{ display: showIntXpEdit ? "block" : "none" }}>
              <ChangePoints
                name="intXp"
                defaultScore={profileInfo ? profileInfo.intXp : null}
                changeScore={(newScore) => {
                  handleChangeScore("intXp", newScore);
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
              defaultValue={profileInfo ? profileInfo.FELanguages : null}
              onChange={(e) => {
                setProfileInfo((profileInfo) => ({
                  ...profileInfo,
                  FELanguages: e.target.value,
                }));
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
              defaultValue={profileInfo ? profileInfo.BELanguages : null}
              onChange={(e) => {
                setProfileInfo((profileInfo) => ({
                  ...profileInfo,
                  BELanguages: e.target.value,
                }));
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
              defaultValue={profileInfo ? profileInfo.bio : null}
              onChange={(e) => {
                setProfileInfo((profileInfo) => ({
                  ...profileInfo,
                  bio: e.target.value,
                }));
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

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        padding: `${theme.spacing(4)}px ${theme.spacing(6)}px`
    },
    questionBody: {
        width:'100%',
        minHeight: '500px'
    }
}));

const Question = (props) => {

  const classes = useStyles();  
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Grid 
        className={classes.container}
        direction="column"
        justify="center"
        alignItems="center"
    >
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Question" />
        <Tab label="Answer" />
      </Tabs>
      <Paper className={classes.questionBody}>
        <h1>{tab === 0 ? 'Question':'Answer'}</h1>
      </Paper>
    </Grid>
  );
}

export default Question;
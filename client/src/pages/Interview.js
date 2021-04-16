import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CodeEditor from '../components/layout/CodeEditor';
import Question from '../components/layout/Question';

const sampleCode = `import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import LandingPage from "./pages/Landing";
import Home from "./pages/TempHome";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;`



const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Interview = (props) => {

  const[code, setCode] = useState(sampleCode);

  const toolBar = useRef();

  const classes = useStyles();

  const handleClose = () => {
      props.history.push("/dashboard")
  };

  return (
      <Dialog fullScreen  open={true} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar ref={toolBar}>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {`Interview ${props.match.params.id}`}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container>
          <Grid container item xs={12} sm={4} style={{minHeight: `calc(100vh - ${toolBar.current ? toolBar.current.clientHeight : 0}px)`}}>
              <Question/>
          </Grid>
          <Grid container item xs={12} sm={8} style={{minHeight: `calc(100vh - ${toolBar.current ? toolBar.current.clientHeight : 0}px)`}}>
              <CodeEditor 
                  language='javascript'
                  value={code}
                  onChange={setCode}
              />
          </Grid>
      </Grid>
    </Dialog>
  )
}


export default Interview;
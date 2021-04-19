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

const sampleQuestion = {
  title: 'Diagonal Difference',
  body: `Given a square matrix, calculate the absolute difference between the sums of its diagonals.
  For example, the square matrix **arr** is shown below:\n
  ~~~js
  1 2 3
  4 5 6
  9 8 9
  ~~~
  The left-to-right diagonal = **1 + 5 + 9 = 15**. The right to left diagonal = **3 + 5 + 9 = 17**. Their absolute difference is  **[ 15 - 17 ] = 2**.

  ### Function description\n
  Complete the  function in the **diagonalDifference** editor below. It must return an integer representing the absolute diagonal difference.
  diagonalDifference takes the following parameter:\n
  arr: an array of integers.
  `,
  answer: `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `,
  preLoadCode: `import React from "react";
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
}


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

  const[code, setCode] = useState(sampleQuestion.preLoadCode);

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
              <Question question={sampleQuestion}/>
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
import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

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
    stretch: { height: "100%" },
    item: { display: "flex", flexDirection: "column" }
  }));

const Interview = (props) => {
  const[code, setCode] = useState(sampleQuestion.preLoadCode);
  const [barHeight, setBarHeight] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    barRef.current && setBarHeight(barRef.current.clientHeight);
  },[barRef])

  const classes = useStyles();

  const handleClose = () => {
      props.history.push("/dashboard")
  };

  return (
    <React.Fragment>
      <AppBar ref={barRef} className={classes.appBar}>
        <Toolbar>
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
      
      <Grid container alignItems='stretch' style={{minHeight: `calc(100vh - ${props.navHeight ? props.navHeight : 0}px - ${barHeight}px)`}}>
          <Grid container item alignItems='flex-start' xs={12} sm={4}>
              <Question question={sampleQuestion}/>
          </Grid>
          <Grid item xs={12} sm={8}>
              <CodeEditor 
                  language='javascript'
                  value={code}
                  onChange={setCode}
              />
          </Grid>
      </Grid>
    </React.Fragment>
  )
}


export default Interview;
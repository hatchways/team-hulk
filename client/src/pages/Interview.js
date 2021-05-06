import React, { useState, useRef, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import Grid from "@material-ui/core/Grid";

import CodeEditor from "../components/layout/CodeEditor";
import Question from "../components/layout/Question";
import Console from "../components/layout/Console";
import { SocketContext } from "../context/SocketContext";
import { UserContext } from "../context/UserContext";
import FeedbackDialog from "../components/FeedbackDialog";
import axios from "axios";

const sampleQuestion = {
  title: "Diagonal Difference",
  body: `Given a string *s*, return&nbsp;*the longest palindromic substring* in *s*.


  &nbsp;
  
  **Example 1:**
  
  
  ~~~js
  Input: s = "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.
  ~~~
  
  **Example 2:**
  
  
  ~~~js
  Input: s = "cbbd"
  Output: "bb"
  ~~~
  
  **Example 3:**
  
  
  ~~~js
  Input: s = "a"
  Output: "a"
  ~~~
  
  **Example 4:**
  
  
  ~~~js
  Input: s = "ac"
  Output: "a"
  ~~~
  
  &nbsp;
  
  **Constraints:**
  
  
  
  - *1 &lt;= s.length &lt;= 1000*
  - *s* consist of only digits and English letters (lower-case and/or upper-case),
  `,
  answer: `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
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
  
  export default App;`,
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  btn: {
    borderRadius: "30px",
  },
  codeContainer: {
    overflowY: "scroll",
    backgroundColor: "#263238",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const Interview = (props) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [code, setCode] = useState(sampleQuestion.preLoadCode);
  const [results, setResults] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [barHeight, setBarHeight] = useState(0);
  const [question, setQuestion] = useState({});
  const barRef = useRef(null);
  const history = useHistory();

  const interviewId = props.match.params.id;

  const { socket } = useContext(SocketContext);
  const { difficulty } = useContext(UserContext);

  useEffect(() => {
    barRef.current && setBarHeight(barRef.current.clientHeight);
  }, [barRef]);

  useEffect(() => {
    const getQuestion = async () => {
      const res = await fetch("/api/question", {
        method: "post",
        body: JSON.stringify({ difficulty }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const question = await res.json();
      setQuestion(question);
    };

    getQuestion();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("joinInterviewRoom", { interviewId });
    } else {
      history.push({
        pathname: "/signin",
        state: interviewId,
      });
    }

    return () => {
      if (socket) {
        socket.emit("leaveInterviewRoom", { interviewId });
      }
    };
  }, [history, interviewId, socket]);

  const classes = useStyles();

  const handleFeedbackOpenClose = () => {
    setFeedbackOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    props.history.push("/dashboard");
  };

  const compileCode = async () => {
    setResults("compiling...");
    let extension = "js";
    switch (language) {
      case "python":
        extension = "py";
        break;
      case "java":
        extension = "java";
        break;
      default:
        break;
    }
    const result = await axios.post(`/api/compiler/${language}`, {
      files: [
        {
          name: `Main.${extension}`,
          content: code,
        },
      ],
    });

    setResults(result.data.stderr || result.data.stdout);
  };

  return (
    <React.Fragment>
      <AppBar ref={barRef} className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {`Interview ${props.match.params.id}`}
          </Typography>
          <Button
            color="inherit"
            onClick={handleFeedbackOpenClose}
            className={classes.btn}
            variant="outlined"
          >
            save
          </Button>
          <FeedbackDialog
            open={feedbackOpen}
            handleClose={handleFeedbackOpenClose}
          />
        </Toolbar>
      </AppBar>

      <Grid
        container
        alignItems="stretch"
        style={{
          minHeight: `calc(100vh - ${
            props.navHeight ? props.navHeight : 0
          }px - ${barHeight}px)`,
        }}
      >
        <Grid
          container
          item
          alignItems="flex-start"
          xs={12}
          md={4}
          style={{
            minHeight: `calc(100vh - ${
              props.navHeight ? props.navHeight : 0
            }px - ${barHeight}px)`,
          }}
        >
          <Question question={question} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          className={classes.codeContainer}
          style={{
            minHeight: `calc(100vh - ${
              props.navHeight ? props.navHeight : 0
            }px - ${barHeight}px)`,
          }}
        >
          <CodeEditor language={language} value={code} onChange={setCode} />
          <Console compileCode={compileCode} value={results} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Interview;

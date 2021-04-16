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

    const[code, setCode] = useState('');

    const toolBar = useRef();

    const classes = useStyles();

    const handleClose = () => {
        props.history.push("/dashboard")
    };

    useEffect(() => {
        console.log(toolBar);
    });

    return (
        <Dialog fullScreen  open={true} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar ref={toolBar}>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
            <Grid container item xs={12} sm={4} style={{backgroundColor: 'red', minHeight: `calc(100vh - ${toolBar.current ? toolBar.current.clientHeight : 0}px)`}}>
                {/* <Paper>

                </Paper> */}
            </Grid>
            <Grid container item xs={12} sm={8} style={{backgroundColor: 'blue' , minHeight: `calc(100vh - ${toolBar.current ? toolBar.current.clientHeight : 0}px)`}}>
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
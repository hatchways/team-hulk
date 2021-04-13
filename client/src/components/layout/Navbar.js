import React, { useState, useRef, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import useStyles from './styles';

import { Link } from 'react-router-dom'; 
import { Avatar } from '@material-ui/core';
import avatar from '../../assets/avatar.png';


const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
      setOpen ( (prevOpen) => !prevOpen);
    }

    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)){
        return;
      }

      setOpen(false);
    }

    const handleListKeyDown = (event) => {
      if (event.key === 'Tab'){
        event.preventDefault();
        setOpen(false);
      }
    }

    const prevOpen = useRef(open);
    
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    }, [open])

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" >
        <Toolbar className={classes.navbar}>
          <Typography edge="start" className={classes.navbar__logo}>
            Logo
          </Typography>
          <div className={classes.sectionDesktop}>
            <Link to='/dashboard' className={classes.navbar__link}>Dashboard</Link>
            <Link to='/faq' className={classes.navbar__link}>FAQ</Link>
            <Link to='/blog' className={classes.navbar__link}>Blog</Link>
            
            <Box
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              className={classes.user}
            >
              <Avatar className={classes.user__img} alt='avatar' src={avatar} />
              <Typography className={classes.user__name}>Jhon Doe</Typography>
            </Box>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>

          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
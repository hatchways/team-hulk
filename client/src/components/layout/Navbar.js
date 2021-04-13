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

import { Link, useLocation} from 'react-router-dom'; 
import { Avatar } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import avatar from '../../assets/avatar.png';

const links = ['Dashboard','FAQ','Blog'];


const Navbar = ( props ) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    let location = useLocation();

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

    const renderMenu = (
      <div className={classes.sectionDesktop}>
      {links.map(link => 
        <Link 
          key={link} 
          to={`/${link.toLowerCase()}`} 
          ml={3}
          className={`${classes.navbar__link} ${location.pathname.includes(link.toLowerCase()) ? classes.navbar__link_selected : ''}`}
        >
          {link}
        </Link>)
      }
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
                  <MenuItem onClick={handleClose}><Link to='/profile'>Profile</Link></MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
    );

    const renderMobileMenu = (
      <div className={classes.sectionMobile}>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MoreIcon/>
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose}><Link to='/profile'>Profile</Link></MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </div>
    );

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
          {renderMobileMenu}
          {renderMenu} 
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
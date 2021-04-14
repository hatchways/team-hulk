import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import useStyles from './NavbarStyle';

import { Link, useLocation} from 'react-router-dom'; 
import { Avatar } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import avatar from '../../assets/avatar.png';

import {UserContext} from '../../context/UserContext';

const links = ['Dashboard','FAQ','Blog'];


const Navbar = ( props ) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    let location = useLocation();
    const [user] = useContext(UserContext);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const popover = (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <MenuList autoFocusItem={open} id="menu-list-grow">
          {links.map(link => 
            <MenuItem key={link} onClick={handleClose} className={classes.sectionMobile}>
            <Link 
              to={`/${link.toLowerCase()}`} 
              ml={4}
              className={
                `${location.pathname.includes(link.toLowerCase()) ? classes.navbar__link_selected : ''}
                 ${classes.popover__link}`
              }
            >
              {link}
            </Link>
          </MenuItem>)
          }
          <MenuItem onClick={handleClose}><Link to='/profile' className={classes.popover__link}>Profile</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to='/' className={classes.popover__link}>Logout</Link></MenuItem>
        </MenuList>
      </Popover>
    )

    const renderMenu = (
      <div className={classes.sectionDesktop}>
      {links.map(link => 
        <Link 
          key={link} 
          to={`/${link.toLowerCase()}`} 
          className={`${classes.navbar__link} ${location.pathname.includes(link.toLowerCase()) ? classes.navbar__link_selected : ''}`}
        >
          {link}
        </Link>)
      }
      <Box
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.user}
      >
        <Avatar className={classes.user__img} alt='avatar' src={avatar} />
        <Typography className={classes.user__name}>{user.name}</Typography>
      </Box>
      {popover}
    </div>
    );

    const renderMobileMenu = (
      <div className={classes.sectionMobile}>
        <IconButton
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <MoreIcon/>
        </IconButton>
        {popover}
      </div>
    );

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
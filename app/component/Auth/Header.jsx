'use client'
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from './Header.module.css';
import { useRouter} from 'next/navigation';

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);
  const router=useRouter();

  const handleMenuUser = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleMenuNotifications = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
    setAnchorElNotifications(null);
    localStorage.setItem('isLoggedIn',false);
    console.log("Header close funtion get call brother here");
    router.push('/');
    
  };

  const logoutHandler=()=>{
    window.alert('kivveee aaa');
    router.push('/');
  }

  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <div>
          <IconButton
            edge="end"
            aria-label="notifications"
            aria-controls="menu-notifications"
            aria-haspopup="true"
            onClick={handleMenuNotifications}
            color="inherit"
          >
            <NotificationsIcon />
          </IconButton>
          <Menu
            id="menu-notifications"
            anchorEl={anchorElNotifications}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNotifications)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>No new notifications</MenuItem>
          </Menu>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuUser}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>User Profile</MenuItem>
            <MenuItem onClick={handleClose}>Change Password</MenuItem>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

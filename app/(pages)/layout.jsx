"use client"
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

import { useRouter } from 'next/navigation'

///whole dashboard i copy here
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Menu,
  MenuItem,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PeopleIcon from '@mui/icons-material/People';
import RuleIcon from '@mui/icons-material/Gavel';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { margin, styled } from '@mui/system';
import Link from 'next/link';
import Widget from '../DashboardComponent/Widget';
import DonationForm from '../DashboardComponent/Donation';
import DonationHistoryTable from '../DashboardComponent/Donation_History';
import ProfileEditForm from '../DashboardComponent/Profile_Editing'
import Profile from "../component/UserProfile";
import UserProfile from "../component/UserProfile";
import ChangePassword from "../component/ChangePassword";
import Footer from '../component/Footer/Footer'
// import ProfileEditingForm from '../DashboardComponent/Profile_Editing';
// import ChangePasswordForm from '../DashboardComponent/ChangePassword'; // Import the ChangePasswordForm component
import {router} from 'next/navigation'
const drawerWidth = 250;

const MainContent = styled('main')(({ theme, isSidebarOpen }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: isSidebarOpen ? drawerWidth : 0,
  width: isSidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
  transition: 'margin-left 0.3s ease, width 0.3s ease',
  marginTop: 0,
  marginBottom:40
}));



export default function RootLayout({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElNotifications, setAnchorElNotifications] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false); // State for profile dialog
    const [changePasswordOpen, setChangePasswordOpen] = useState(false); // State for change password dialog
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const router=useRouter();
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const handleMenuUser = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleMenuNotifications = (event) => {
      setAnchorElNotifications(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorElUser(null);
      setAnchorElNotifications(null);
      localStorage.setItem('isLoggedIn', true);
      window.alert('haii')
      router.push('/login');
      
    };
  
    const openProfile = () => {
      setProfileOpen(true);
      handleClose(); // Close the main menu after clicking
    };
  
    const openChangePassword = () => {
      setChangePasswordOpen(true);
      handleClose(); // Close the main menu after clicking
    };
  
    const closeProfile = () => {
      setProfileOpen(false);
    };
  
    const closeChangePassword = () => {
      setChangePasswordOpen(false);

    };

    

  return (
      <>
      <div className={inter.className}>
      <CssBaseline />
      {!isLoggedIn && <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
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
              <MenuItem onClick={openProfile}>User Profile</MenuItem>
              <MenuItem onClick={openChangePassword}>Change Password</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>}
      {!isLoggedIn &&<Drawer
        variant="persistent"
        anchor="left"
        open={isSidebarOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[
              { text: 'Dashboard', icon: <DashboardIcon />, route: '/Dashboard' },
              { text: 'Profile', icon: <PersonIcon />, route: '/Profile' },
              { text: 'Donations', icon: <VolunteerActivismIcon />, route: '/Donations' },
              { text: 'Members', icon: <PeopleIcon />, route: '/Members' },
              { text: 'Donation Receivers', icon: <VolunteerActivismIcon />, route: '/Donation-Receivers' },
              { text: 'Rules & Regulations', icon: <RuleIcon />, route: '/Rules-Regulations' },
              { text: 'Gallery', icon: <PhotoLibraryIcon />, route: '/Gallery' },
              { text: 'Contact Us', icon: <ContactMailIcon />, route: '/Contact-Us' },
            ].map((item) => (
              <Link href={item.route} passHref key={item.text}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
}
      <MainContent isSidebarOpen={isSidebarOpen} >
        <Toolbar />
        {!isSidebarOpen && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ position: 'absolute', top: 16, left: 16 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {children}
        
      <Footer/>
      </MainContent>
      {/* Profile Dialog */}
      {!isLoggedIn && <Dialog open={profileOpen} onClose={closeProfile}>
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent>
          {/* <ProfileEditingForm /> */}
          <UserProfile/>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeProfile} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>}

      {/* Change Password Dialog */}
      {!isLoggedIn && <Dialog open={changePasswordOpen} onClose={closeChangePassword}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <ChangePassword /> 
          <h1>Here password change form will come</h1>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeChangePassword} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>}
 
        </div>
        
      </>
    
  );
}

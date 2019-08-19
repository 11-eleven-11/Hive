import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fade from '@material-ui/core/Fade';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AppsIcon from '@material-ui/icons/Apps';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CategoryIcon from '@material-ui/icons/Category';
import MailIcon from '@material-ui/icons/Mail';
import AndroidIcon from '@material-ui/icons/Android';

import * as firebase from 'firebase';
var provider = new firebase.auth.GoogleAuthProvider();


const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    backgroundColor: 'rgba(50,97,90,0.5)'
  },
  card: {
    maxWidth: 445,
  },
   fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  media: {
    height: 200,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(239,243,242,0.7)'
  },
  code: {
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: '#555',
    fontFamily: '"Roboto Mono"',
    fontWeight: 100,
    fontSize: '0.875rem',
    marginBottom: theme.spacing(3),
  },
  block: {},
}));

const drawerWidth = 240;


export default function SideBar() {
  function googleLogin (){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}

  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><h1 style={{paddingLeft: 20, marginBottom: 8, marginTop: 15}}> Hive </h1>
        </Link>
        <List>
          <List><ListItem button onClick={() => googleLogin()}>
            <ListItemIcon> <AndroidIcon /></ListItemIcon>
            <ListItemText primary="Google Login" />
          </ListItem>         
          <Divider />
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon> <AppsIcon /></ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItem>
          </Link>
          <Link to="/create" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon> <AddBoxIcon /></ListItemIcon>
              <ListItemText primary="Create Hive" />
            </ListItem>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button >
              <ListItemIcon> <AccountBoxIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <Divider />
          <ListItem button disabled={true}>
            <ListItemIcon> <InboxIcon /></ListItemIcon>
            <ListItemText primary="Requests" />
          </ListItem>
          <ListItem button disabled={true}>
            <ListItemIcon> <PeopleIcon /></ListItemIcon>
            <ListItemText primary="Followers" />
          </ListItem>
          <ListItem button disabled={true}>
            <ListItemIcon> <SpeakerNotesIcon /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          </List>
        </List>
        
      </Drawer>
    </div>
  );
}

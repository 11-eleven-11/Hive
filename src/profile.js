import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import AddBoxIcon from '@material-ui/icons/AddBox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CategoryIcon from '@material-ui/icons/Category';
import MailIcon from '@material-ui/icons/Mail';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
    backgroundColor: 'rgba(255,255,255,0.4)'
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


function Profile() {

    //TODO: get from NoSQL
    const purse = null;
    const owner = null;

    const Run = window.Run;
    var run;
    if (purse == null || owner == null) {
        run = new Run();

        //TODO:
        //store  run.owner.privkey.toString()
        //store  run.purse.privkey.toString()
        //store  run.purse.address.toString()
    } else {
        run = new Run({ purse: purse, owner: owner});
    }

     console.log(run.owner.privkey.toString(), "owner privkey");
     console.log(run.purse.privkey.toString(), "purse privkey");
     console.log(run.purse.address.toString(), "purse address");

  const s = useStyles();
  const classes = useStyles();
  let userBar =   <List>    
          <ListItem button>
            <ListItemIcon> <AddBoxIcon /></ListItemIcon>
            <ListItemText primary="Create Hive" />
          </ListItem>
          <Divider />
             <ListItem button >
            <ListItemIcon> <AccountBoxIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon> <InboxIcon /></ListItemIcon>
            <ListItemText primary="Requests" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon> <PeopleIcon /></ListItemIcon>
            <ListItemText primary="Followers" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon> <SpeakerNotesIcon /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <Divider />
          </List>
          ;

  return (
    <div className="Profile">
      <NavBar />
      
       <div className={classes.root}>
      <CssBaseline />
     
       <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <h1 style={{paddingLeft: 5, marginBottom: 8, marginTop: 15}}> Hive </h1>
        <Divider />

        <List>
          {userBar}
        </List>
        
      </Drawer>
      <main className={classes.content} style={{marginTop: 60, height: '100vh'}}>
        <p> this is a  test </p>
      </main>
    </div>
      
    </div>
  );
}

export default Profile;

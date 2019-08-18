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

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fade from '@material-ui/core/Fade';


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
import AndroidIcon from '@material-ui/icons/Android';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

function App() {

  const s = useStyles();
  const classes = useStyles();
  let userBar =  <List><ListItem button onClick={() => googleLogin()}>
            <ListItemIcon> <AndroidIcon /></ListItemIcon>
            <ListItemText primary="Google Login" />
          </ListItem>         <Divider />
             <ListItem button>
            <ListItemIcon> <AccountBoxIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon> <InboxIcon /></ListItemIcon>
            <ListItemText primary="Requests" />
          </ListItem>
          <ListItem button>
            <ListItemIcon> <PeopleIcon /></ListItemIcon>
            <ListItemText primary="Followers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon> <SpeakerNotesIcon /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem> </List>;

  return (
    <div className="App">
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
        <Divider />
        <List>

          <ListItemIcon> <p> Category </p></ListItemIcon>
          <ListItem button>
            <ListItemText primary="Politics" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Finance" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Cryptocurrency" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sport" />
          </ListItem>
           <ListItem button>
            <ListItemText primary="Other" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>

        <Fade in={true}>

        <Grid container spacing={1} xs={12} style={{paddingLeft: 5, paddingTop: 5}}>
        <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    BSV Tutorials
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
        <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Iran Conflict 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
        <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
          <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
          <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
          <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
         <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
         <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
         <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
         <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
         <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
         <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
         <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
          <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boris Johnson 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
                
              </CardActions>
            </Card>
        </Grid>
        <Grid item xs={3}>
           <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/500x200"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nakamoto Mystery
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
              </CardActions>
            </Card>
        </Grid>
        
      </Grid>
      </Fade>
      </main>
    </div>
      
    </div>
  );
}

export default App;
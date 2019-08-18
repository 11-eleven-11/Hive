import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as firebase from 'firebase';


var provider = new firebase.auth.GoogleAuthProvider();


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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (event, newValue) => {
        debugger;
        this.setState({
            value: newValue
        })
        // setValue(newValue);
    };

    render() {

        const {value} = this.state;
        return (
          <div className="App">

              <div className="root">
                  <CssBaseline/>
                  <main className="content">
                      <Paper className="root" style={{
                          marginLeft: 0,
                          marginRight: 8,
                          marginTop: 65,
                          position: 'fixed',
                          zIndex: 9999,
                          width: '100%',
                          backgroundColor: '#648882',
                          borderRadius: 0
                      }}>
                          <Tabs
                            value={value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="default"
                            centered
                          >
                              <Tab label="All"/>
                              <Tab label="International"/>
                              <Tab label="Politics"/>
                              <Tab label="Finance"/>
                              <Tab label="Cryptocurrency"/>
                              <Tab label="Technology"/>
                              <Tab label="Sports"/>
                              <Tab label="History"/>
                              <Tab label="Other"/>
                          </Tabs>
                      </Paper>


                      <Grid container spacing={1} xs={12} style={{paddingLeft: 5, paddingTop: 5, marginTop: 108}}>
                          <Grid item xs={3}>
                              <Card className="card">
                                  <CardActionArea>
                                      <CardMedia
                                        className="media"
                                        image="https://via.placeholder.com/500x200"
                                        title="Contemplative Reptile"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="h2">
                                              BSV Tutorials
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging
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
                              <Card className="card">
                                  <CardActionArea>
                                      <CardMedia
                                        className="media"
                                        image="https://via.placeholder.com/500x200"
                                        title="Contemplative Reptile"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="h2">
                                              BSV Tutorials
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging
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
                              <Card className="card">
                                  <CardActionArea>
                                      <CardMedia
                                        className="media"
                                        image="https://via.placeholder.com/500x200"
                                        title="Contemplative Reptile"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="h2">
                                              BSV Tutorials
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging
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
                              <Card className="card">
                                  <CardActionArea>
                                      <CardMedia
                                        className="media"
                                        image="https://via.placeholder.com/500x200"
                                        title="Contemplative Reptile"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="h2">
                                              BSV Tutorials
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging
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
                              <Card className="card">
                                  <CardActionArea>
                                      <CardMedia
                                        className="media"
                                        image="https://via.placeholder.com/500x200"
                                        title="Contemplative Reptile"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="h2">
                                              BSV Tutorials
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging
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
                              <Card className="card">
                                  <CardActionArea>
                                      <CardMedia
                                        className="media"
                                        image="https://via.placeholder.com/500x200"
                                        title="Contemplative Reptile"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="h2">
                                              BSV Tutorials
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging
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
                              <Card className="card">
                                  <CardActionArea>
                                      <CardMedia
                                        className="media"
                                        image="https://via.placeholder.com/500x200"
                                        title="Contemplative Reptile"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="h2">
                                              BSV Tutorials
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging
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
                              <Card className="card">
                                  <CardActionArea>
                                      <CardMedia
                                        className="media"
                                        image="https://via.placeholder.com/500x200"
                                        title="Contemplative Reptile"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="h2">
                                              BSV Tutorials
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging
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
                  </main>
              </div>

          </div>
        );
    }
}

export default App;

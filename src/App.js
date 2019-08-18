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
            hives: [ ],
            hiveNodes: [],
            value: null
        };

    }

    async componentDidMount() {
        var url = "https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogeyJvdXQuczEiIDogIk1ldGFWaWJlMiJ9LAogICAgImxpbWl0IjogMTAKICB9Cn0=";
        var header = {
          headers: { key: "1KJPjd3p8khnWZTkjhDYnywLB2yE1w5BmU" }
        };

        const response = await fetch(url, header);
        const json = await response.json();

        console.log('component did mount');

        const hiveArray = [];

        const Run = window.Run;
        const run = new Run();

       var url = "https://neongenesis.bitdb.network/q/1HcBPzWoKDL2FhCMbocQmLuFTYsiD73u1j/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LnMyIjogInJ1biIsCiAgICAgICJvdXQuczQiOiAiSGl2ZUJldGEiCiAgICB9LAogICAgImxpbWl0IjogMTAwCiAgfQp9";
           var header = {
             headers: { key: "1KJPjd3p8khnWZTkjhDYnywLB2yE1w5BmU" }
           };

           fetch(url, header).then(response => {
               response.json().then(json => {
                   console.log(json.c);
                   json.c.forEach(loadData)
               });
           });

           function loadData(tx) {
               var txHashClass = tx.tx.h + '_o1';

               run.load(txHashClass).then(obj => {
                   if (obj.name === 'Hive') {
                       loadHive(tx.tx.h + '_o2');
                   } else if (obj.name === 'HiveNode') {
                       //loadHiveNode(tx.tx.h + '_o2');
                   }
               });
           }

           async function loadHive(location) {
               console.log('loading hive');
               const hive = await run.load(location);
               hiveArray.push(Object.assign({}, hive));
               this.setState({ hives: hiveArray });
           };

      }

    handleChange = (event, newValue) => {
        debugger;
        this.setState({
            value: newValue
        })
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
                        {this.state.hives.map((hive, key) =>
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
                                                   { hive.name }
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
                        )}

                      </Grid>
                  </main>
              </div>

          </div>
        );
    }
}

export default App;

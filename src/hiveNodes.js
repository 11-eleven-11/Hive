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
import { shadows } from '@material-ui/system';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import ForceGraph from "./ForceGraph";

import HiveNode from './jigs/HiveNode';

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

class HiveNodes extends Component {
    constructor(props) {
        super(props);

        var hiveOrigin = document.URL.substring(document.URL.lastIndexOf('/') + 1)

        this.state = {
            hiveOrigin: hiveOrigin,
            hives: [ ],
            hiveNodes: [],
            value: null,
            hiveNodeName: '',
            hiveNodeDescription: '',
            hiveNodeUrl: '',
            hiveNodeImage: '',
            hiveNodeOrigin: hiveOrigin,
            hiveNodePreviousNode: '',
            address: '',
            privKey: ''
        };

    }

    componentWillMount(){
      var user = firebase.auth().currentUser;
      if (user != null) {
      var Userid = user.uid;
      firebase.database()
          .ref('users/'+Userid)
          .once("value", (snapshot) => {
              if(snapshot.exists()) {
                  if(snapshot.hasChild('privKey'))
                    var privKey = snapshot.val().privKey;
                    this.setState({
                        privKey: privKey,
                    })
                }

                  if(snapshot.hasChild('address')) {
                    var address = snapshot.val().address;
                    this.setState({
                        address: address,
                    })
              }

              else {
                  console.log('value doesnt exist');
              }

          }).catch(function (error) {
          console.log(error);
      })
      }
    }

    async componentDidMount() {
        var url = "https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogeyJvdXQuczEiIDogIk1ldGFWaWJlMiJ9LAogICAgImxpbWl0IjogMTAKICB9Cn0=";
        var header = {
          headers: { key: "1KJPjd3p8khnWZTkjhDYnywLB2yE1w5BmU" }
        };

        const response = await fetch(url, header);
        const json = await response.json();
        const hiveNodeArray = [];
        const Run = window.Run;
        const run = new Run()

       var url = "https://neongenesis.bitdb.network/q/1HcBPzWoKDL2FhCMbocQmLuFTYsiD73u1j/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LnMyIjogInJ1biIsCiAgICAgICJvdXQuczQiOiAiSGl2ZUJldGEiCiAgICB9LAogICAgImxpbWl0IjogMTAwCiAgfQp9";
           var header = {
             headers: { key: "1KJPjd3p8khnWZTkjhDYnywLB2yE1w5BmU" }
           };

           fetch(url, header).then(response => {
               response.json().then(json => {
                   var list = json.c;
                   var arrayLength = list.length;
                   for (var i = 0; i < arrayLength; i++) {
                        loadData(list[i]);
                   }
               });
           });

           let dev = this;

           function loadData(tx) {
               var txHashClass = tx.tx.h + '_o1';

               run.load(txHashClass).then(obj => {
                   if (obj.name === 'Hive') {
                       //loadHive(tx.tx.h + '_o2');
                   } else if (obj.name === 'HiveNode') {
                       loadHiveNode(tx.tx.h + '_o2');
                   }
               });
           }

           async function loadHiveNode(location) {
               console.log('loading hive node');
               const hiveNode = await run.load(location);
               console.log(hiveNodeArray, 'hiveNodeArray')
               hiveNodeArray.push(Object.assign({}, hiveNode));
               // TODO: we need to set the state after all elements have been loaded
               dev.setState({ hiveNodes: hiveNodeArray.filter(hiveNode => hiveNode.hiveOrigin === dev.state.hiveOrigin) });
           };

      }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    };

    handleSubmit(event, dev) {
        event.preventDefault();
        alert('Adding new HiveNode (name: ' + dev.state.hiveNodeName + ', description: ' + dev.state.hiveNodeDescription + ', nodeUrl: ' + dev.state.hiveNodeUrl + ', nodeImageUrl' + dev.state.hiveNodeImage +  ', hiveNodeOrigin: ' + dev.state.hiveNodeOrigin + ', hiveNodePreviousNode: ' + dev.state.hiveNodePreviousNode + ')');

        const Run = window.Run;
        const run = new Run({
          app: 'HiveBeta',
          owner: this.state.privKey,
          purse: this.state.privKey
        })

        const hiveNode = new HiveNode(
                    dev.state.hiveNodeName,
                    dev.state.hiveNodeDescription,
                    run.owner.pubkey.toString(),
                    dev.state.hiveNodeUrl,
                    dev.state.hiveNodeImage,
                    dev.state.hiveNodeOrigin,
                    dev.state.hiveNodePreviousNode);

         hiveNode.sync().then(createdHiveNode => {
            alert('HiveNode created, hooray, please wait a bit until you see it on the main page');
         }).catch(function(rejected) {
            alert('Error while creating HiveNode: ' + rejected);
         });
      }

    render() {
        const {value, hiveNodes} = this.state;
        if (this.state.hiveNodes.length > 0) {
            return (
              <div className="App">

                  <div className="root">
                      <CssBaseline/>
                      <main className="content">

                      <Grid container style={{paddingLeft: 4, paddingTop: 5, marginTop: 60, display: 'fixed'}}>
                          <Grid boxShadow={3} container spacing={1} xs={5} style={{paddingLeft: 4, paddingTop: 5}}>

                            {this.state.hiveNodes.map((hive, key) =>
                                <Grid item xs={12} style={{minWidth: 500}} className="fadeInDiv">
                                      <Card className="card">
                                          <CardActionArea>
                                          <CardMedia
                                                className="media"
                                                image={ hive.image }
                                                title="Contemplative Reptile"
                                          />
                                              <CardContent>
                                                  <Typography gutterBottom variant="h5" component="h2">
                                                       { hive.name }
                                                  </Typography>
                                                  <Typography variant="body2" color="textSecondary" component="p">
                                                      { hive.description }
                                                  </Typography>
                                              </CardContent>
                                          </CardActionArea>
                                          <CardActions style={{float: 'left'}}>
                                              <Button size="small" color="primary" onClick={(e) => this.setState({hiveNodePreviousNode : hive.origin})}>
                                                  Add Link
                                              </Button>
                                               <Button size="small" color="primary">
                                                  Comment
                                              </Button>
                                                <Button size="small" color="primary">
                                                  Tip
                                              </Button>
                                          </CardActions>
                                                 <CardActions style={{float: 'right'}}>
                                              <Button size="small" color="default">
                                                  12 likes
                                              </Button>
                                               <Button size="small" color="default">
                                                  234 satoshis
                                              </Button>
                                                <Button size="small" color="default">
                                                  3 connections
                                              </Button>
                                          </CardActions>
                                      </Card>
                                 </Grid>
                            )}
                          </Grid>

                          <Grid container spacing={1} xs={4} style={{paddingLeft: 4, minWidth: '26vw'}}>
                              <div>
                                <ForceGraph hiveNodes={this.state.hiveNodes} />
                              </div>
                          </Grid>

                          <Grid container spacing={0} xs={2} style={{paddingLeft: 4, minWidth: '22vw', float: 'right', backgroundColor: 'rgba(255,255,255,0.5)'}}>
                              <card boxShadow={3}>
                                <h2> Add Content </h2>
                                <form ref="form" onSubmit={(e) => this.handleSubmit(e, this)}>
                                  <div>
                                  <div style={{paddingLeft: 50}}>
                                       <Input
                                        className="hiveNodeInput"
                                          placeholder="Name"
                                          value={this.state.hiveNodeName}
                                          onChange={(e) => this.setState({hiveNodeName : e.target.value})}
                                       />
                                       <br/>
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="Description"
                                           value={this.state.hiveNodeDescription}
                                          onChange={(e) => this.setState({hiveNodeDescription : e.target.value})}
                                       />
                                       <br/>
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="Image URL"
                                           value={this.state.hiveNodeImage}
                                          onChange={(e) => this.setState({hiveNodeImage : e.target.value})}
                                       />
                                       <br/>
                                    <br />
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="URL"
                                           value={this.state.hiveNodeUrl}
                                          onChange={(e) => this.setState({hiveNodeUrl : e.target.value})}
                                       />
                                       <br/>
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="Linked Hive Node (Previous Node)"
                                           value={this.state.hiveNodePreviousNode}
                                          onChange={(e) => this.setState({hiveNodePreviousNode : e.target.value})}
                                       />
                                       <br/>
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="Hive"
                                          enabled="false"
                                           value={this.state.hiveNodeOrigin}
                                       />
                                       <br/>
                                       <br/>
                                   <Button variant="contained" color="default" type="submit" style={{width: 180}}>
                                      Submit
                                    </Button>
                                  </div>
                                  </div>
                              </form>
                              </card>
                          </Grid>
                          </Grid>
                      </main>
                  </div>
              </div>
            );
    } else {
    return (
              <div className="App">

                  <div className="root">
                      <CssBaseline/>
                      <main className="content">

                      <Grid container style={{paddingLeft: 4, paddingTop: 5, marginTop: 60, display: 'fixed'}}>
                          <Grid boxShadow={3} container spacing={1} xs={5} style={{paddingLeft: 4, paddingTop: 5}}>

                            {this.state.hiveNodes.map((hive, key) =>
                                <Grid item xs={12} style={{minWidth: 500}} className="fadeInDiv">
                                      <Card className="card">
                                          <CardActionArea>
                                          <CardMedia
                                                className="media"
                                                image={ hive.image }
                                                title="Contemplative Reptile"
                                          />
                                              <CardContent>
                                                  <Typography gutterBottom variant="h5" component="h2">
                                                       { hive.name }
                                                  </Typography>
                                                  <Typography variant="body2" color="textSecondary" component="p">
                                                      { hive.description }
                                                  </Typography>
                                              </CardContent>
                                          </CardActionArea>
                                          <CardActions style={{float: 'left'}}>
                                              <Button size="small" color="primary" onClick={(e) => this.setState({hiveNodePreviousNode : hive.origin})}>
                                                  Add Link
                                              </Button>
                                               <Button size="small" color="primary">
                                                  Comment
                                              </Button>
                                                <Button size="small" color="primary">
                                                  Tip
                                              </Button>
                                          </CardActions>
                                                 <CardActions style={{float: 'right'}}>
                                              <Button size="small" color="default">
                                                  12 likes
                                              </Button>
                                               <Button size="small" color="default">
                                                  234 satoshis
                                              </Button>
                                                <Button size="small" color="default">
                                                  3 connections
                                              </Button>
                                          </CardActions>
                                      </Card>
                                 </Grid>
                            )}
                          </Grid>

                          <Grid container spacing={1} xs={4} style={{paddingLeft: 4, minWidth: '26vw'}}>
                              <ForceGraph hiveNodes={this.state.hiveNodes} />
                          </Grid>

                          <Grid container spacing={0} xs={2} style={{paddingLeft: 4, minWidth: '22vw', float: 'right', backgroundColor: 'rgba(255,255,255,0.5)'}}>
                              <card boxShadow={3}>
                                <h2> Add Content </h2>
                                <form ref="form" onSubmit={(e) => this.handleSubmit(e, this)}>
                                  <div>
                                  <div style={{paddingLeft: 50}}>
                                       <Input
                                        className="hiveNodeInput"
                                          placeholder="Name"
                                          value={this.state.hiveNodeName}
                                          onChange={(e) => this.setState({hiveNodeName : e.target.value})}
                                       />
                                       <br/>
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="Description"
                                           value={this.state.hiveNodeDescription}
                                          onChange={(e) => this.setState({hiveNodeDescription : e.target.value})}
                                       />
                                       <br/>
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="Image URL"
                                           value={this.state.hiveNodeImage}
                                          onChange={(e) => this.setState({hiveNodeImage : e.target.value})}
                                       />
                                       <br/>
                                    <br />
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="URL"
                                           value={this.state.hiveNodeUrl}
                                          onChange={(e) => this.setState({hiveNodeUrl : e.target.value})}
                                       />
                                       <br/>
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="Linked Hive Node (Previous Node)"
                                           value={this.state.hiveNodePreviousNode}
                                          onChange={(e) => this.setState({hiveNodePreviousNode : e.target.value})}
                                       />
                                       <br/>
                                        <Input
                                          className="hiveNodeInput"
                                          placeholder="Hive"
                                          enabled="false"
                                           value={this.state.hiveNodeOrigin}
                                       />
                                       <br/>
                                       <br/>
                                   <Button variant="contained" color="default" type="submit" style={{width: 180}}>
                                      Submit
                                    </Button>
                                  </div>
                                  </div>
                              </form>
                              </card>
                          </Grid>
                          </Grid>
                      </main>
                  </div>
              </div>
            );
    }}
}

export default HiveNodes;

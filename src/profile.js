import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import Hive from './jigs/Hive';
import HiveNode from './jigs/HiveNode';
import HiveState from './jigs/HiveState';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';


const hiveStateOrigin = '720ce85f4f88309eddc10e680664c73828b18ffcd70a351ad532730ee80603a4_o2';
const Run = window.Run;
const run = new Run();

 






run.load(hiveStateOrigin).then(hiveStateOrigin => {
    console.log(hiveStateOrigin, 'hiveStateOrigin');

    hiveStateOrigin.sync().then(hiveStateSync => {
        console.log(hiveStateSync, 'hiveStateSync');
        console.log('loading all hives');

        hiveStateSync.hiveOrigins.forEach(loadHives);
    });
});

function loadHives(hiveOrigin) {
    run.load(hiveOrigin).then(hiveOrigin => {
        hiveOrigin.sync().then(hiveSync => {
            console.log(hiveSync, 'hiveSync');
        });
    });
}


export default class Profile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      profileName: '',
      posts: 0,
      satoshis: 0,
    };
  }

  componentWillMount(){
    // this.props.fetchuserdetails();
  };

  componentDidMount(){
    // this.props.fetchuserdetails();
  };


  deleteAccount(){
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      console.log("account deleted");
    }).catch(function(error) {
      console.log("error");
    });
  }

  createKeyPair(){
    var user = firebase.auth().currentUser;
    console.log("createdPair");
  }



  render() {

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("signed in");
  } else {
    console.log("signed out");
  }
});


    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.


      console.log(uid);
      console.log(user.email)
    }



    return (
        <div style={{marginTop: 60, marginLeft: 240}}> 
        <div style={{paddingLeft: 150, paddingTop: 50}}> 
          <Button onClick={() => this.createKeyPair()} variant="contained" color="primary">
            Create KeyPair
          </Button>
          <p> Unique ID: {uid}</p>
          <p> Email: {email} </p>

          <Button onClick={() => this.deleteAccount()} variant="contained" color="secondary">
            Delete Account
          </Button>
        </div>
        </div>
    );
  }
}


//const hiveState = new HiveState();
//
//const hive = new Hive(
//        "My Hive",
//        "My hive description",
//        run.owner.pubkey.toString(),
//        "Category",
//        40000,
//        "image");
//
//hive.sync().then(hiveSync => {
//    hiveState.sync().then(hiveStateSync => {
//        hiveStateSync.addHive(hiveSync.origin);
//            const hiveNode = new HiveNode(
//                    "My HiveNode",
//                    "HiveNode description",
//                    run.owner.pubkey.toString(),
//                    "www.google.com",
//                    "image",
//                    hiveSync.origin,
//                    null);
//
//            console.log("hiveState origin: " + hiveStateSync.origin);
//    });
//});


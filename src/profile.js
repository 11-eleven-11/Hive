import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
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

var QRCode = require('qrcode.react');

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      uid:'',
      name: '',
      profileName: '',
      posts: 0,
      satoshis: '',
      privKey: '',
      address: ''
    };
  }

    componentDidMount(){
      var user = firebase.auth().currentUser;
      var Userid = user.uid;
      firebase.database()
          .ref('users/'+Userid)
          .once("value", (snapshot) => {
              if(snapshot.exists()) {
                  if(snapshot.hasChild('privKey'))
                    var privKey = snapshot.val().privKey;
                    this.setState({
                        privKey: privKey,
                    });

                    const Run = window.Run;
                    const run = new Run({owner: privKey, purse: privKey});
                    run.purse.balance().then(balance => {
                        this.setState({
                            satoshis: balance.toString(),
                        });
                    });
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


  deleteAccount(){
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      console.log("account deleted");
    }).catch(function(error) {
      console.log("error");
    });
  }

  writeUserData(userId, name, email, privKey, address) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    userId: userId,
    privKey: privKey,
    address: address,
    });
  }

  createKeyPair(){
    var user = firebase.auth().currentUser;

    console.log("createdPair");
    const Run = window.Run;
    const run = new Run();

    console.log(run.owner.privkey.toString());
    console.log(run.owner.address.toString());

    this.setState({privKey: run.owner.privkey.toString(), address: run.owner.address.toString(), satoshis: 0});

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

    this.writeUserData(this.state.uid, this.state.name, this.state.email, run.owner.privkey.toString(), run.owner.address.toString());

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
      if(this.state.uid == ''){
        this.setState({uid, email, name})
      }
    }

    return (
        <div style={{marginTop: 60, marginLeft: 240}}> 
        <div style={{paddingLeft: 150, paddingTop: 50}}> 
          {!this.state.privKey && <Button onClick={() => this.createKeyPair()} variant="contained" color="primary">
            Create KeyPair
          </Button> 
          }
          <br/>
          <br/>
          {this.state.privKey &&
          <div>
          <p> Charge your Wallet </p>
          <QRCode value={this.state.address} />
          <p> Adress: {this.state.address} </p>
          <p> PrivateKey: {this.state.privKey}</p>
           
          <p> Balance (in satoshis): {this.state.satoshis} </p>
          </div>
          }
          
          <p> Unique ID: {uid}</p>
          <p> Email: {email} </p>
          <br/>
           <Button onClick={() => this.deleteAccount()} variant="contained" color="secondary">
            Delete Account
          </Button>

        </div>
        </div>
    );
  }
}

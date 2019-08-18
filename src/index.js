import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import Hive from './jigs/Hive';
import HiveNode from './jigs/HiveNode';

const Run = window.Run;
const run = new Run({ network: 'mock' });

const hive = new Hive(
        "My Hive",
        run.owner.pubkey.toString(),
        "Category",
        40000,
        "image");

const hiveNode = new HiveNode(
        "My HiveNode",
        run.owner.pubkey.toString(),
        "www.google.com",
        "image?",
        null);

hive.sync().then(h => {
    console.log("hive location: " + h.location);
});

hiveNode.sync().then(h => {
    console.log("hiveNode location: " + h.location);
});

var firebaseConfig = {
    apiKey: "AIzaSyAfG3f7m1fHNDXqpmEKK4OJtRF2klMOAVk",
    authDomain: "hive-e330f.firebaseapp.com",
    databaseURL: "https://hive-e330f.firebaseio.com",
    projectId: "hive-e330f",
    storageBucket: "hive-e330f.appspot.com",
    messagingSenderId: "73476503957",
    appId: "1:73476503957:web:3883e8867185f360"
  };

firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

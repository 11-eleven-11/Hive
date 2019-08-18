import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import Hive from './jigs/Hive';
import HiveNode from './jigs/HiveNode';
import HiveState from './jigs/HiveState';

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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import Hive from './jigs/Hive';
import HiveNode from './jigs/HiveNode';
import HiveState from './jigs/HiveState';

    var url = "https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogeyJvdXQuczEiIDogIk1ldGFWaWJlMiJ9LAogICAgImxpbWl0IjogMTAKICB9Cn0=";
    var header = {
      headers: { key: "1KJPjd3p8khnWZTkjhDYnywLB2yE1w5BmU" }
    };

    fetch(url, header).then(response => {
        response.json().then(json => {
            console.log(json.c);
        });
    });

//const hiveStateOrigin = '720ce85f4f88309eddc10e680664c73828b18ffcd70a351ad532730ee80603a4_o2';
const Run = window.Run;
//const run = new Run();
//
// console.log(run.owner.privkey.toString(), "owner privkey");
// console.log(run.purse.privkey.toString(), "purse privkey");
// console.log(run.purse.address.toString(), "purse address");

//
//run.load(hiveStateOrigin).then(hiveStateOrigin => {
//    console.log(hiveStateOrigin, 'hiveStateOrigin');
//
//    hiveStateOrigin.sync().then(hiveStateSync => {
//        console.log(hiveStateSync, 'hiveStateSync');
//        console.log('loading all hives');
//
//        hiveStateSync.hiveOrigins.forEach(loadHives);
//    });
//});
//
//function loadHives(hiveOrigin) {
//    run.load(hiveOrigin).then(hiveOrigin => {
//        hiveOrigin.sync().then(hiveSync => {
//            console.log(hiveSync, 'hiveSync');
//        });
//    });
//}

//const Run = window.Run;
//const run = new Run({ purse: "KxU7m7v7PoGcXbauzj1CBhAroxbuPCfDqFLcRugFXJviB4a7GxYE", owner: "KwZG1jV8cELu8xKMJ4jADBG3JWXbRK2oaRAtctdiL7Yqsxnehctq"});
//const run = new Run({ purse: "KwenwKmED5WpM3mzFs45fPWnAsPWosjKVpG3gjUEXL3wcGj1Fuv6", owner: "L2sasYwWLfaPXnNATthb7nUWPQepfTq5nDjQbe5gvDrZNGJ91ZKD"});
//
//const hiveNode = new HiveNode(
//                    "My HiveNode",
//                    "HiveNode description",
//                    run.owner.pubkey.toString(),
//                    "www.google.com",
//                    "image",
//                    "null",
//                    null);
//
//                    hiveNode.sync().then(hiveNodeSync => {
//                    console.log(hiveNodeSync.location, "location hiveNode");
//                    })

//const hive = new Hive(
//        "My Hive",
//        "My hive description",
//        run.owner.pubkey.toString(),
//        "Category",
//        40000,
//        "image");
//
//const hive2 = new Hive(
//        "abc",
//        "abc",
//        run.owner.pubkey.toString(),
//        "abc",
//        1337,
//        "abc"
//);

//hive.sync().then(hiveSync => {
//    console.log(hiveSync.location, "location hive");
//});
//
//hive2.sync().then(hiveSync => {
//    console.log(hiveSync.location, "location hive");
//});
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

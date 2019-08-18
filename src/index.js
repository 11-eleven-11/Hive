import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

import App from "./App";
import Create from "./create";
import Profile from "./profile";
import HiveNodes from "./hiveNodes";

const routing = (
  <Router>
    <div>
    <NavBar />
    <SideBar />
        <Route exact path="/" component={App} />
        <Route path="/create" component={Create} />
        <Route path="/profile" component={Profile} />
        <Route path="/hivenodes" handler={HiveNodes}>
            <Route path="/:location" component={HiveNodes}/>
        </Route>
    </div>
  </Router>
)

//const Run = window.Run;
//
//const run = new Run();
//const run = new Run({ app: 'HiveBeta', purse: 'KxU7m7v7PoGcXbauzj1CBhAroxbuPCfDqFLcRugFXJviB4a7GxYE', owner: 'KwZG1jV8cELu8xKMJ4jADBG3JWXbRK2oaRAtctdiL7Yqsxnehctq'});
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

//    var url = "https://neongenesis.bitdb.network/q/1HcBPzWoKDL2FhCMbocQmLuFTYsiD73u1j/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LnMyIjogInJ1biIsCiAgICAgICJvdXQuczQiOiAiSGl2ZUJldGEiCiAgICB9LAogICAgImxpbWl0IjogMTAwCiAgfQp9";
//    var header = {
//      headers: { key: "1KJPjd3p8khnWZTkjhDYnywLB2yE1w5BmU" }
//    };
//
//    fetch(url, header).then(response => {
//        response.json().then(json => {
//            console.log(json.c);
//            json.c.forEach(loadData)
//        });
//    });
//
//    function loadData(tx) {
//        var txHashClass = tx.tx.h + '_o1';
//
//        run.load(txHashClass).then(obj => {
//            if (obj.name === 'Hive') {
//                loadHive(tx.tx.h + '_o2');
//            } else if (obj.name === 'HiveNode') {
//                loadHiveNode(tx.tx.h + '_o2');
//            }
//        });
//    }
//
//    async function loadHive(location) {
//        console.log('loading hive');
//        const hive = await run.load(location)
//        console.log(hive.description);
//    };
//
//    async function loadHiveNode(location) {
//        console.log('loading hiveNode');
//        const hiveNode = await run.load(location)
//        console.log(hiveNode.description);
//    };

//const hiveStateOrigin = '720ce85f4f88309eddc10e680664c73828b18ffcd70a351ad532730ee80603a4_o2';
//const Run = window.Run;
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
//const run = new Run({ app: 'HiveBeta', purse: 'KxU7m7v7PoGcXbauzj1CBhAroxbuPCfDqFLcRugFXJviB4a7GxYE', owner: 'KwZG1jV8cELu8xKMJ4jADBG3JWXbRK2oaRAtctdiL7Yqsxnehctq'});
//const run = new Run({ app: 'HiveBeta', purse: "KwenwKmED5WpM3mzFs45fPWnAsPWosjKVpG3gjUEXL3wcGj1Fuv6", owner: "L2sasYwWLfaPXnNATthb7nUWPQepfTq5nDjQbe5gvDrZNGJ91ZKD"});
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
//        const hiveNode = new HiveNode(
//                "My HiveNode",
//                "HiveNode description",
//                run.owner.pubkey.toString(),
//                "www.google.com",
//                "image",
//                hiveSync.origin,
//                null);
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

ReactDOM.render(routing, document.getElementById('root'));

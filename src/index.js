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

var user = firebase.auth().currentUser;

const routing = (
  <Router>
    <div>
    <NavBar />
    <SideBar />
        <Route exact path="/" component={App} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/hivenodes" handler={HiveNodes}>
            <Route path="/hivenodes/:location" component={HiveNodes}/>
        </Route>
    </div>
  </Router>
)



ReactDOM.render(routing, document.getElementById('root'));

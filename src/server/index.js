/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

const dotenv = require('dotenv');
const express = require('express');
const firebase = require('firebase-admin');
const functions = require('firebase-functions');

// Load API keys, secrets etc. from Firebase environment
// https://firebase.google.com/docs/functions/config-env
if (process.env.NODE_ENV === 'production') {
  const { app: config } = functions.config();
  Object.keys(config).forEach(key => {
    process.env[key.toUpperCase()] =
      typeof config[key] === 'object'
        ? JSON.stringify(config[key])
        : config[key];
  });
}

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// Configure Firebase Admin SDK
// https://firebase.google.com/docs/admin/setup
if (!firebase.apps.length) {
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
}

if (process.env.NODE_ENV === 'production') {
  // Server environment
  exports.app = functions
    .runWith({ memory: '2GB' })
    .https.onRequest(require('./app').default);
} else {
  // Local/dev environment
  const app = express();
  const db = require('./db').default;
  app.use(require('./app').default);
  module.exports.default = app;
  module.exports.dispose = () => db.destroy();
}

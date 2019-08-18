import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

export default class Create extends React.Component {
  render() {
    return <h1>Create Hive</h1>;
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


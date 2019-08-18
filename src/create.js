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


export default class Create extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name: false,
      description: false,
      category: false,
      satoshis: 0,
    };
  }

  componentWillMount(){
    // this.props.fetchuserdetails();
  };

  componentDidMount(){
    // this.props.fetchuserdetails();
  };

  render() {

    return (
        <div style={{marginTop: 60, marginLeft: 240}}> 
        <div style={{paddingLeft: 150, paddingTop: 50}}> 
             <Input
                placeholder="Name"
                inputProps={{}}
             />
             <br/>
              <Input
                placeholder="Description"
                inputProps={{}}
             />
             <br/>
         <FormControl style={{minWidth: 180}}>
            <InputLabel htmlFor="age-simple">Category</InputLabel>
            <Select
              value={2}
              onChange={console.log("works")}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
                >
                  <MenuItem value={10}>Politics</MenuItem>
                  <MenuItem value={20}>International</MenuItem>
                  <MenuItem value={30}>Technology</MenuItem>
                  <MenuItem value={30}>Cryptocurrency</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
            </Select>
          </FormControl>
          <br />
              <Input
                placeholder="Placeholder"
                inputProps={{}}
             />
             <br/>
              <Input
                placeholder="Placeholder"
                inputProps={{}}
             />
             <br />

         <Button variant="contained" color="default">
            Submit
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


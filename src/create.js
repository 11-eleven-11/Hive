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
import Paper from '@material-ui/core/Paper';


import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export default class Create extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      image: '',
      category: '',
      satoshis: 0,
      privKey: '',
      address: ''
    };
  }

  componentDidMount(){
      var user = firebase.auth().currentUser;
       if (user != null) {
      var Userid = user.uid;
      firebase.database()
          .ref('users/'+Userid)
          .once("value", (snapshot) => {
              if(snapshot.exists()) {
                  if(snapshot.hasChild('privKey'))
                    var privKey = snapshot.val().privKey;
                    this.setState({
                        privKey: privKey,
                    })
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
  }


  handleSubmit(event, dev) {
    event.preventDefault();
    alert('Adding new Hive (name: ' + dev.state.name + ', description: ' + dev.state.description + ', imageUrl: ' + dev.state.image +  ', category: ' + dev.state.category + ', satoshis: ' + dev.state.satoshis + ')');

    const Run = window.Run;

    const run = new Run({
        app: 'HiveBeta',
        owner: this.state.privKey,
        purse: this.state.privKey
    })

    const hive = new Hive(
            dev.state.name,
            dev.state.description,
            run.owner.pubkey.toString(),
            dev.state.category,
            parseInt(dev.state.satoshis),
            dev.state.image);

     hive.sync().then(createdHive => {
        alert('Hive created, hooray, please wait a bit until you see it on the main page. You might need to wait for the next block (~5 min) to be mined.');
     }).catch(function(rejected) {
        alert('Error while creating Hive: ' + rejected);
     });
  }


  render() {

    return (
    <div>
    <img src="https://prabakaran-group.org/images/header-image-dark.png" width="900" style={{float: 'right', marginRight: 300, marginTop: 120}} />
    <form ref="form" onSubmit={(e) => this.handleSubmit(e, this)}>
        <div style={{marginTop: 60, marginLeft: 240}}> 
        <div style={{paddingLeft: 150, paddingTop: 50}}> 
             <Input
                style={{padding: 20}}
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({name : e.target.value})}
             />
             <br/>
              <Input
                style={{padding: 20}}
                placeholder="Description"
                value={this.state.description}
                onChange={(e) => this.setState({description : e.target.value})}
             />
             <br/>
              <Input
                style={{padding: 20}}
                placeholder="Image URL"
                value={this.state.image}
                onChange={(e) => this.setState({image : e.target.value})}
             />
             <br/>
         <FormControl style={{minWidth: 220}}>
            <InputLabel htmlFor="age-simple" style={{padding: 20}}>Category</InputLabel>
            <Select
                style={{padding: 20}}
                value={this.state.category}
                onChange={(e) => this.setState({category : e.target.value})}
                >
                  <MenuItem value="International">International</MenuItem>
                  <MenuItem value="Politics">Politics</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Cryptocurrency">Cryptocurrency</MenuItem>
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="History">History</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <br />
              <Input
                style={{padding: 20}}
                placeholder="Satoshis"
                value={this.state.satoshis}
                onChange={(e) => this.setState({satoshis : e.target.value})}
             />
             <br/>

         <Button variant="contained" color="default" type="submit" style={{marginTop: 20, width: 180}}>
            Submit
          </Button>
        </div>
        </div>
    </form>
    </div>
    );
  }
}

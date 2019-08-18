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

export default class Create extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      category: '',
      satoshis: 0,
    };
  }

  handleSubmit(event, dev) {
    event.preventDefault();
    alert('Adding new Hive (name: ' + dev.state.name + ', description: ' + dev.state.description + ', category: ' + dev.state.category + ', satoshis: ' + dev.state.satoshis + ')');

    const Run = window.Run;
    const run = new Run();

    const hive = new Hive(
            dev.state.name,
            dev.state.description,
            run.owner.pubkey.toString(),
            dev.state.category,
            parseInt(dev.state.satoshis),
            "image");

     hive.sync().then(createdHive => {
        alert('Hive created, hooray, please wait a bit until you see it on the main page');
     }).catch(function(rejected) {
        alert('Error while creating Hive: ' + rejected);
     });
  }


  render() {

    return (
    <form ref="form" onSubmit={(e) => this.handleSubmit(e, this)}>
        <div style={{marginTop: 60, marginLeft: 240}}> 
        <div style={{paddingLeft: 150, paddingTop: 50}}> 
             <Input
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({name : e.target.value})}
             />
             <br/>
              <Input
                placeholder="Description"
                 value={this.state.description}
                onChange={(e) => this.setState({description : e.target.value})}
             />
             <br/>
         <FormControl style={{minWidth: 180}}>
            <InputLabel htmlFor="age-simple">Category</InputLabel>
            <Select
              value={this.state.category}
                onChange={(e) => this.setState({category : e.target.value})}
                >
                  <MenuItem value="Politics">Politics</MenuItem>
                  <MenuItem value="International">International</MenuItem>
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Cryptocurrency">Cryptocurrency</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <br />
              <Input
                placeholder="Satoshis"
                 value={this.state.satoshis}
                onChange={(e) => this.setState({satoshis : e.target.value})}
             />
             <br/>

         <Button variant="contained" color="default" type="submit">
            Submit
          </Button>
        </div>
        </div>
    </form>
    );
  }
}

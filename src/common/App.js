/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';
import { QueryRenderer } from 'react-relay';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';
import ErrorPage from './ErrorPage';
import { ConfigContext, HistoryContext, ResetContext } from '../hooks';
import Run from 'run-node';
import Jig from 'run-node';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      ownerKey: null,
      purseKey: null,
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidMount() {
    fetch('/keys.json')
      .then(r => r.json())
      .then(data => {
        this.setState({
          ownerKey: data.ownerKey,
          purseKey: data.purseKey,
        });
        //Demo

        //Mainnet
        //const run = new Run({purse: data.purseKey, owner: data.ownerKey});
        //run.purse.balance().then((satoshis) => {
        //  console.log('Current balance:', satoshis);
        //});
        const run = new Run({ network: 'mock' });

        class Hive extends Jig {
          owners = [];

          init(name, owner, category, satoshis, image) {
            this.name = name;
            this.owner = owner;
            this.owners = [];
            this.owners.push(owner);
            this.category = category;
            this.satoshis = satoshis;
            this.image = image;
          }

          addOwner(owner) {
            this.owners.push(owner);
          }

          getNumberOfUsers() {
            return this.owners.length;
          }
        }

        class HiveNode extends Jig {
          init(name, owner, url, mediaData, previousNode) {
            this.name = name;
            this.owner = owner;
            this.url = url;
            this.mediaData = mediaData;
            this.previousNode = previousNode;
          }
        }

        // TODO: run.purse.address correct?
        const hive = new Hive(
          'My Hive',
          run.owner.pubkey.toString(),
          'Category',
          40000,
          'image',
        );

        console.log('Hive.owner: ' + hive.owner);
        console.log('Hive.name: ' + hive.name);
        console.log('Hive.category: ' + hive.category);
        console.log('Hive.satoshis: ' + hive.satoshis);
        console.log('Hive.image: ' + hive.image);
        console.dir(hive.owners);
        //TODO
        //console.log("Hive.getNumberOfNodes(): " + hive.getNumberOfNodes());
        console.log('Hive.getNumberOfUsers(): ' + hive.getNumberOfUsers());

        const hiveNode = new HiveNode(
          'My HiveNode',
          run.owner.pubkey.toString(),
          'www.google.com',
          'image?',
          null,
        );

        console.log('HiveNode.owner: ' + hiveNode.owner);
        console.log('HiveNode.name: ' + hiveNode.name);
        console.log('HiveNode.url: ' + hiveNode.url);
        console.log('HiveNode.mediaData: ' + hiveNode.mediaData);
        console.log('HiveNode.previousNode: ' + hiveNode.previousNode);
      });
  }

  componentDidCatch(error, info) {
    console.log(error, info); // eslint-disable-line no-console
  }

  resetError = () => {
    this.setState({ error: null });
  };

  renderProps = ({ error, props }) => {
    const err = this.state.error || this.props.error || error;
    return err ? (
      <ErrorPage error={err} onClose={this.resetError} />
    ) : (
      this.props.render(props || this.props.data)
    );
  };

  render() {
    const {
      config,
      history,
      reset,
      relay,
      query,
      variables,
      payload,
    } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <ConfigContext.Provider value={config}>
          <HistoryContext.Provider value={history}>
            <ResetContext.Provider value={reset}>
              <QueryRenderer
                environment={relay}
                query={query}
                variables={variables}
                render={this.renderProps}
                cacheConfig={{ payload }}
              />
            </ResetContext.Provider>
          </HistoryContext.Provider>
        </ConfigContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;

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
import Hive from '../jigs/Hive';
import HiveNode from '../jigs/HiveNode';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      ownerKey: props.ownerKey,
      purseKey: props.purseKey,
      exampleHive: null,
      exampleHiveNode: null,
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidMount() {
    const run = new Run({
      purse: this.state.pursekey,
      owner: this.state.ownerkey,
      network: 'mock', //uncomment for mainnet
    });

    run.purse.balance().then(satoshis => {
      console.log('Current balance:', satoshis);
    });

    const hive = new Hive(
      'My Hive',
      run.owner.pubkey.toString(),
      'Category',
      3000,
      'image',
    );
    this.setState({ exampleHive: hive });
    console.dir(hive);

    const hiveNode = new HiveNode(
      'My HiveNode',
      run.owner.pubkey.toString(),
      'www.google.com',
      'image?',
      null,
    );
    this.setState({ exampleHiveNode: hiveNode });
    console.dir(hiveNode);
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

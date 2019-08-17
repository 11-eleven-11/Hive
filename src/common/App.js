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
import { gtag } from '../utils';
import { ConfigContext, HistoryContext, ResetContext } from '../hooks';
// import Run from 'run-node';

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
    // const run = new Run();
    //   console.log(run.owner.address.toString()); //public address from newly generated key
    fetch('/keys.json')
      .then(r => r.json())
      .then(data => {
        this.setState({
          ownerKey: data.ownerKey,
          purseKey: data.purseKey,
        });
      });
  }

  componentDidCatch(error, info) {
    console.log(error, info); // eslint-disable-line no-console
    gtag('event', 'exception', { description: error.message, fatal: false });
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

    console.log(this.state, 'thi.state');

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

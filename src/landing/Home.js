/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import HomeSponsors from './HomeSponsors';
import HomeStack from './HomeStack';

const useStyles = makeStyles(theme => ({
  content: {
    ...theme.mixins.content,
  },
  title: {
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
  },
  code: {
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: '#555',
    fontFamily: '"Roboto Mono"',
    fontWeight: 100,
    fontSize: '0.875rem',
    marginBottom: theme.spacing(3),
  },
  block: {},
}));

function Home() {
  const s = useStyles();

  return (
    <React.Fragment>
      <HomeSponsors />
      <div className={s.content}>
         <Button variant="contained">
           Default
         </Button>
        <Typography className={s.title} variant="h4" gutterBottom>
          Hive
        </Typography>
        <Typography className={s.subTitle} paragraph>
          Create and Explore the world.
        </Typography>
        <HomeStack />
      </div>
    </React.Fragment>
  );
}

export default Home;

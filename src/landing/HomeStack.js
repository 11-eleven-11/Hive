import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    textAlign: 'center',
  },
  title: {},
  desc: {
    textAlign: 'left',
  },
}));

const links = new Map([
  ['Knex.js', 'https://knexjs.org/'],
  ['GraphQL.js', 'https://github.com/graphql/graphql-js'],
  ['React.js', 'https://reactjs.org/'],
  ['Relay', 'https://facebook.github.io/relay'],
  ['Material UI', 'https://material-ui.com/'],
]);

function ExtLink(props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={links.get(props.children)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function HomeStack() {
  const s = useStyles();

  return (
    <Grid className={s.root} container spacing={2}>
      
    </Grid>
  );
}

export default HomeStack;

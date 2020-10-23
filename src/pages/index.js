import React from 'react';
import Header from '../component/Header/Header';
import { makeStyles } from '@material-ui/core';
import Tabadmin from '../component/Tab/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },

  typo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <div className={classes.root}>
        <Tabadmin />
      </div>
    </React.Fragment>
  );
}

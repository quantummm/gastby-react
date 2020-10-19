import React from 'react';
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import { BRAND_NAME } from '../../constants/constants';

function HeaderBar() {
  return (
    <AppBar position="static" alignitems="center" color="primary">
      <Toolbar>
        <Grid container justify="center" wrap="wrap">
          <Grid item>
            <Typography variant="h6">{BRAND_NAME}</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default HeaderBar;

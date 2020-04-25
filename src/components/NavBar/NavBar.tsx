import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  AppBar, Button, Toolbar, IconButton, Typography,
} from '@material-ui/core';

type NavBarProps = {
  loggedIn?: boolean
};

const useStyles = createUseStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 10,
  },
  title: {
    flexGrow: 1,
  },
});

const NavBar = ({ loggedIn }: NavBarProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton href="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            Home
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          {!loggedIn && <Button href="/login" color="inherit">Login</Button>}
          {loggedIn && <Button href="/profile" color="inherit">Profile</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

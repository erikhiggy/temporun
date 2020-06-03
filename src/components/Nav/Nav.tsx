import React from 'react';
import { createUseStyles } from 'react-jss';

const navColor = '#A9A9A9';

const useStyles = createUseStyles({
  nav: {
    borderBottom: `1px solid ${navColor}`,
    borderRadius: '0 0 3px 0',
    width: '100%',
    height: 50,
    backgroundColor: navColor,
    position: 'fixed',
    top: 0,
  },
});

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.nav} />
  );
};

export default Nav;

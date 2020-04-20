import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '@material-ui/core';

type HomePageProps = {
  loggedIn?: boolean,
  onLoggedIn: (token: string | null) => void
};

const useStyles = createUseStyles({
  header: {
    margin: '10px',
  },
  loginButton: {
    margin: '10px',
  },
});

const HomePage = ({ loggedIn, onLoggedIn }: HomePageProps) => {
  const classes = useStyles();

  const handleLoggedIn = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search.slice(1));
    if (params.has('access_token')) {
      const token = params.get('access_token');
      onLoggedIn(token);
    }
  };

  React.useEffect(() => {
    handleLoggedIn();
  });

  return (
    <>
      <div className={classes.header}>
        Hello, this is the homepage.
      </div>
      <div className={classes.loginButton}>
        {!loggedIn && <Button href="/login">Login</Button>}
        {loggedIn && <Button href="/profile">Profile</Button>}
      </div>
    </>
  );
};

export default HomePage;

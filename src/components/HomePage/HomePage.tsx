import React from 'react';
import { createUseStyles } from 'react-jss';

type HomePageProps = {
  onLoggedIn: (token: string | null) => void
};

const useStyles = createUseStyles({
  header: {
    margin: 10,
  },
  loginButton: {
    margin: 10,
  },
  content: {
    margin: 10,
  },
});

const HomePage = ({ onLoggedIn }: HomePageProps) => {
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
        Welcome to Temporun!
      </div>
      <div className={classes.content}>
        Login to proceed.
      </div>
    </>
  );
};

export default HomePage;

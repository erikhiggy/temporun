import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '@material-ui/core';

type HomePageProps = {
  handleAuth: (token: string | null) => void
};

const useStyles = createUseStyles({
  header: {
    margin: '10px',
  },
  loginButton: {
    margin: '10px',
  },
});

const HomePage = ({ handleAuth }: HomePageProps) => {
  const [accessToken, setAccessToken] = React.useState<string | null>(null);
  const classes = useStyles();

  const getHashParams = (): Object => {
    const hashParams: { [index:string]: string } = {};
    let e: RegExpExecArray | null;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  };

  const getAccessToken = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search.slice(1));
    if (params.has('access_token')) {
      const token = params.get('access_token');
      handleAuth(token);
      setAccessToken(token);
    }
  };

  React.useEffect(() => {
    getAccessToken();
    const params = getHashParams();
    console.log('Params', params);
  });
  return (
    <>
      <div className={classes.header}>
        Hello, this is the homepage.
      </div>
      <div className={classes.loginButton}>
        {!accessToken && <Button href="/login">Login</Button>}
      </div>
    </>
  );
};

export default HomePage;

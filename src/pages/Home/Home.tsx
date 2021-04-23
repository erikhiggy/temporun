import React, { useEffect } from 'react';
import axios from 'axios';
import { Button, Typography } from '@material-ui/core';
import { createUseStyles } from 'react-jss';
import { LOCAL, HOST } from '../../utils';

const useStyles = createUseStyles({
  header: {
    textAlign: 'center',
  },

  about: {
    textAlign: 'center',
  },

  connectButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },

  connectButton: {
    backgroundColor: 'green',
  },
});

type HomeProps = {
  credentials?: string
};

const Home = ({ credentials }: HomeProps) => {
  const classes = useStyles();
  const handleConnect = () => {
    window.location.href = '/connect';
  };

  const authorizeUser = async (path: string) => {
    const url = `${LOCAL}/authorize?${path}`;
    return axios.get(url);
  };

  useEffect(() => {
    if (credentials) {
      window.location.href = '/dashboard';
    }
    // if we have already got the auth url
    if (window.location.search.length) {
      authorizeUser(window.location.search.split('?')[1])
        .then((res) => {
          // push the credentials object to cookie
          const { access_token, refresh_token } = res?.data?.body;
          const creds = {
            accessToken: access_token,
            refreshToken: refresh_token,
            expiresAt: new Date().getTime() + 3000000,
          };
          document.cookie = `credentials=${JSON.stringify(creds)}`;
          // redirect to homepage to continue
          window.location.href = '/dashboard';
        })
        .catch((err) => {
          console.log('Error authenticating user', err);
        });
    }
  }, [credentials]);

  return (
    <>
      <div className={classes.header}>
        <h1>Temporun</h1>
      </div>
      <div className={classes.about}>
        <h2>Optimizing your run through data</h2>
      </div>
      <div className={classes.connectButtonWrapper}>
        <Button
          className={classes.connectButton}
          color="primary"
          disableRipple
          onClick={handleConnect}
          variant="contained"
        >
          <Typography>
            Connect with Spotify
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import { Button } from '@material-ui/core';
import routes from '../../Routes';

const LoginPage = () => (
  <div>
    <Button href={routes.login}>Login through Spotify</Button>
  </div>
);

export default LoginPage;

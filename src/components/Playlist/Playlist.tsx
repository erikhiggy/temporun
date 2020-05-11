import React from 'react';
import {
  Card, CardMedia, Typography, CardContent,
} from '@material-ui/core';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    height: 500,
    width: 500,
  },

  media: {
    height: 200,
    width: 200,
  },
});

type PlaylistProps = {
  url: string,
  title: string
};

const Playlist = ({ url, title }: PlaylistProps) => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardMedia className={classes.media} image={url} title="Playlist Art" />
        <CardContent>
          <Typography gutterBottom>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Playlist;

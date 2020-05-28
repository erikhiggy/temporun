import React from 'react';
import { createUseStyles } from 'react-jss';
import { Card, CardMedia, CardTitle } from '../Card/index';

const useStyles = createUseStyles({
  card: {
    border: '1px solid red',
    height: 400,
    width: 300,
  },

  media: {
    height: 300,
  },

  title: {
    height: 100,
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
      <Card className={classes.card}>
        <CardMedia alt={`playlist-${title}`} className={classes.media} src={url} />
        <CardTitle className={classes.title}>
          {title}
        </CardTitle>
      </Card>
    </div>
  );
};

export default Playlist;

import React from 'react';
import { createUseStyles } from 'react-jss';
import { Card, CardMedia } from '../Card/index';

const useStyles = createUseStyles({
  card: {
    border: '1px solid #CCC',
    borderRadius: 3,
    height: 300,
    width: 300,
  },

  media: {
    height: 300,
  },
});

type PlaylistProps = {
  // url of the playlist image
  url: string,
};

const Playlist = ({ url }: PlaylistProps) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          alt="playlist"
          className={classes.media}
          src={url}
        />
      </Card>
    </div>
  );
};

export default Playlist;

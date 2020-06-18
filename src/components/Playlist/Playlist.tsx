import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '@material-ui/core';

import { Card, CardMedia } from '../Card/index';

const useStyles = createUseStyles({
  card: {
    border: '1px solid #CCC',
    borderRadius: 3,
    height: 200,
    width: 200,
  },

  media: {
    height: 200,
  },
});

type PlaylistProps = {
  onPlaylistClick: () => void,
  url: string,
};

const Playlist = ({ onPlaylistClick, url }: PlaylistProps) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  const unselectedStyles = {
    border: '3px solid transparent',
    borderRadius: 3,
  };

  const selectedStyles = {
    border: '3px solid blue',
    borderRadius: 3,
  };

  const handleClick = () => {
    onPlaylistClick();

    setSelected(!selected);
  };

  return (
    <Button
      style={selected ? selectedStyles : unselectedStyles}
      onClick={handleClick}
      disableRipple
    >
      <Card className={classes.card}>
        <CardMedia
          alt="playlist"
          className={classes.media}
          src={url}
        />
      </Card>
    </Button>
  );
};

export default Playlist;

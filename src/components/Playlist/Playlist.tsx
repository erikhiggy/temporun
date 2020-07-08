import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
  Card, CardActionArea, CardMedia, Grid,
} from '@material-ui/core';

const useStyles = createUseStyles({
  card: {
    maxWidth: 300,
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
    borderRadius: 3,
  };

  const selectedStyles = {
    borderRadius: 3,
  };

  const handleClick = () => {
    onPlaylistClick();

    setSelected(!selected);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleClick} style={selected ? selectedStyles : unselectedStyles}>
        <CardMedia
          component="img"
          src={url}
        />
      </CardActionArea>
    </Card>
  );
};

export default Playlist;

import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
  Card, CardActionArea, CardMedia,
} from '@material-ui/core';

const useStyles = createUseStyles({
  card: {
    maxWidth: 300,
  },
});

type PlaylistProps = {
  name: string,
  onPlaylistClick: () => void,
  url: string,
};

const Playlist = ({ name, onPlaylistClick, url }: PlaylistProps) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  const unselectedStyles = {
    borderRadius: 3,
    border: '3px solid transparent',
  };

  const selectedStyles = {
    borderRadius: 3,
    border: '3px solid blue',
  };

  const handleClick = () => {
    onPlaylistClick();

    setSelected(!selected);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea onClick={handleClick} style={selected ? selectedStyles : unselectedStyles}>
          <p>{name}</p>
          <CardMedia
            component="img"
            src={url}
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default Playlist;

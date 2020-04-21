import React from 'react';
import { createUseStyles } from 'react-jss';
import { Card, CardContent, Typography } from '@material-ui/core';

type SongProps = {
  artist?: string | null
  name?: string | null,
  bpm?: number | 0
}

const useStyles = createUseStyles({
  songCard: {
    display: 'flex',
    margin: '10px',
  },
  attribute: {
    display: 'flex',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

const Song = ({ artist, bpm, name }: SongProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.songCard} variant="outlined">
      <CardContent>
        <Typography className={classes.attribute}>
          <span className={classes.boldText}>Song Title:</span>&nbsp;{name}
        </Typography>
        <Typography className={classes.attribute}>
          <span className={classes.boldText}>Artist:</span>&nbsp;{artist}
        </Typography>
        <Typography className={classes.attribute}>
          <span className={classes.boldText}>BPM:</span>&nbsp;{bpm}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Song;

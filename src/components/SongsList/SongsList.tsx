import React from 'react';
import useAxios from 'axios-hooks';
import { createUseStyles } from 'react-jss';
import Song from '../Song';

const useStyles = createUseStyles({
  header: {
    paddingLeft: 10,
  },
});

type AnalyticsProps = {
  limit?: number | 20,
  bpm?: number | 150
};

type SongType = {
  artist?: string,
  tempo?: number,
  track?: string,
};

const SongsList = ({ limit, bpm }: AnalyticsProps) => {
  const [{ loading, error, data }] = useAxios(`http://localhost:8888/analysis/${limit}?bpm=${bpm}`);
  const classes = useStyles();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const renderSongs = (songs: Array<Object>) => songs.map((song: Object, songIndex: number) => {
    const { artist, tempo, track }: SongType = song;
    return <Song key={`${songIndex * 2}--song`} artist={artist} bpm={tempo} name={track} />;
  });

  return (
    <div>
      <div className={classes.header}>
        {!data.length ? (
          <h1>No songs for this bpm!</h1>
        ) : (
          <h1>
            Showing Songs for&nbsp;{bpm}&nbsp;bpm
          </h1>
        )}
      </div>
      {renderSongs(data)}
    </div>
  );
};

export default SongsList;

import React from 'react';
import useAxios from 'axios-hooks';
import { createUseStyles } from 'react-jss';
import Playlist from '../Playlist/Playlist';

const useStyles = createUseStyles({
  header: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-around',
  },

  playlists: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  playlist: {
    marginBottom: 20,
  },
});

type DashboardProps = {
  // user credentials
  credentials?: string | undefined
};

type PlaylistType = {
  name: string,
  images: Array<ImageType>
};

type ImageType = {
  url: string
};

const Dashboard = ({ credentials }: DashboardProps) => {
  const classes = useStyles();
  const [{ data, error, loading }] = useAxios({
    url: `http://localhost:8888/user?${credentials}`,
    method: 'GET',
  });

  if (!data || error || loading) {
    return null;
  }

  const renderPlaylists = (playlists: Array<PlaylistType>) => (
    playlists.map((playlist: PlaylistType, playlistIndex: number) => (
      <div className={classes.playlist}>
        <Playlist
          key={`playlist-${playlistIndex * 2}`}
          url={playlist.images[0].url}
        />
      </div>
    )));

  const { userPlaylists } = data;

  return (
    <div>
      <h1 className={classes.header}>Choose a playlist</h1>
      <div className={classes.playlists}>
        {renderPlaylists(userPlaylists.items)}
      </div>
    </div>
  );
};

export default Dashboard;

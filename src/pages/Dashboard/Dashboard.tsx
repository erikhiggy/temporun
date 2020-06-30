import React, { useState } from 'react';
import {
  Redirect,
} from 'react-router-dom';
import useAxios from 'axios-hooks';
import { createUseStyles } from 'react-jss';
import { Button } from '@material-ui/core';
import Playlist from '../../components/Playlist/Playlist';

const useStyles = createUseStyles({
  chooseText: {
    flex: 1,
    fontSize: 18,
  },

  header: {
    display: 'flex',
    margin: '60px 20px 40px 20px',
  },

  playlistsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 20,
  },

  playlistsHeader: {
    display: 'flex',
    marginBottom: 20,
  },

  playlists: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  playlist: {
    marginBottom: 20,
    marginRight: 20,
  },
});

type DashboardProps = {
  credentials?: string,
};

type PlaylistType = {
  id: string
  name: string,
  images: Array<ImageType>,
};

type ImageType = {
  url: string
};

const Dashboard = ({ credentials }: DashboardProps) => {
  const classes = useStyles();
  const [selectedPlaylists, setSelectedPlaylists] = useState<Array<PlaylistType>>([]);
  const [redirect, setRedirect] = useState(false);
  const [{ data, error, loading }] = useAxios({
    url: `http://localhost:8888/user?${credentials}`,
    method: 'GET',
  });

  if (!data || error || loading) {
    return null;
  }

  const addPlaylist = (playlist: PlaylistType) => {
    setSelectedPlaylists([...selectedPlaylists, playlist]);
  };

  const removePlaylist = (playlist: PlaylistType) => {
    const filteredPlaylists = selectedPlaylists.filter((p) => p.id !== playlist.id);
    setSelectedPlaylists(filteredPlaylists);
  };

  const handleClick = (playlist: PlaylistType) => {
    const playlistSelected = selectedPlaylists.find((p) => p.id === playlist.id);
    if (!playlistSelected) {
      addPlaylist(playlist);
    } else {
      removePlaylist(playlist);
    }
  };

  const handleCreate = () => {
    setRedirect(true);
  };

  const renderPlaylists = (playlists: Array<PlaylistType>) => {
    return playlists.map((playlist: PlaylistType, playlistIndex: number) => {
      return (
        <div className={classes.playlist} key={`playlist-${playlistIndex * 2}`}>
          <Playlist
            onPlaylistClick={() => handleClick(playlist)}
            url={playlist?.images[0]?.url}
          />
        </div>
      );
    });
  };

  const redirectToCreate = () => {
    return redirect
      ? (
        <Redirect to={{
          pathname: '/create',
          state: { data: { playlists: selectedPlaylists, credentials } },
        }}
        />
      )
      : null;
  };

  const { userPlaylists } = data;

  return (
    <>
      {redirectToCreate()}
      <div className={classes.header}>
        <div className={classes.chooseText}>
          Choose a playlist to get started
        </div>
        <div>
          <Button
            color="primary"
            variant="contained"
            disabled={!selectedPlaylists.length}
            onClick={handleCreate}
          >
            Create
          </Button>
        </div>
      </div>
      <div className={classes.playlistsContainer}>
        <div className={classes.playlistsHeader}>Your Playlists</div>
        <div className={classes.playlists}>{renderPlaylists(userPlaylists.items)}</div>
      </div>
    </>
  );
};

export default Dashboard;

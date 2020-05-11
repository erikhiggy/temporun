import React from 'react';
import useAxios from 'axios-hooks';
import Playlist from '../Playlist/Playlist';

type DashboardProps = {
  credentials?: string
};

type PlaylistType = {
  name: string,
  images: Array<ImageType>
};

type ImageType = {
  url: string
};

const Dashboard = ({ credentials }: DashboardProps) => {
  const [{ data, error, loading }] = useAxios({
    url: `http://localhost:8888/user?${credentials}`,
    method: 'GET',
  });

  const renderPlaylists = (playlists: Array<PlaylistType>) => (
    playlists.map((playlist: PlaylistType) => (
      <Playlist title={playlist.name} url={playlist.images[0].url} />
    )));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const { userPlaylists } = data;

  return (
    <div>
      {renderPlaylists(userPlaylists.items)}
    </div>
  );
};

export default Dashboard;

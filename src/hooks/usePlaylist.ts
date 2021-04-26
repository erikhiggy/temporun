import useAxios from 'axios-hooks';
import getEnv from '../utils';

type UsePlaylistType = {
  playlistName: string,
  credentials?: string,
  tracks: string[]
};

const usePlaylist = ({ playlistName, credentials, tracks }: UsePlaylistType) => {
  const HOST = getEnv(process.env.REACT_APP_NODE_ENV);
  const [{ data, loading, error }] = useAxios({
    url: `${HOST}/createPlaylist?playlistName=${playlistName}&${credentials}&tracks=${tracks}`,
    method: 'GET',
  });

  return { data, loading, error };
};

export default usePlaylist;

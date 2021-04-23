import useAxios from 'axios-hooks';
import { LOCAL, HOST } from '../utils';

type UsePlaylistType = {
  playlistName: string,
  credentials?: string,
  tracks: string[]
};

const usePlaylist = ({ playlistName, credentials, tracks }: UsePlaylistType) => {
  const [{ data, loading, error }] = useAxios({
    url: `${LOCAL}/createPlaylist?playlistName=${playlistName}&${credentials}&tracks=${tracks}`,
    method: 'GET',
  });

  return { data, loading, error };
};

export default usePlaylist;

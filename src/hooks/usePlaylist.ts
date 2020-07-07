import useAxios from 'axios-hooks';
import HOST from '../utils';

type UsePlaylistType = {
  playlistName: string,
  credentials?: string,
  tracks: string[]
};

const usePlaylist = ({ playlistName, credentials, tracks }: UsePlaylistType) => {
  const [{ data, loading, error }] = useAxios({
    url: `${HOST}/createPlaylist?playlistName=${playlistName}&${credentials}&tracks=${tracks}`,
    method: 'GET',
  });

  return { data, loading, error };
};

export default usePlaylist;

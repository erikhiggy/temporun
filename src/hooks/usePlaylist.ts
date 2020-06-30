import useAxios from 'axios-hooks';

type UsePlaylistType = {
  playlistName: string,
  credentials?: string,
  tracks: string[]
};

const usePlaylist = ({ playlistName, credentials, tracks }: UsePlaylistType) => {
  const [{ data, loading, error }] = useAxios({
    url: `http://localhost:8888/createPlaylist?playlistName=${playlistName}&${credentials}&tracks=${tracks}`,
    method: 'GET',
  });

  return { data, loading, error };
};

export default usePlaylist;

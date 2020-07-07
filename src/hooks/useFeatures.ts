import useAxios from 'axios-hooks';
import HOST from '../utils';

type UseFeaturesType = {
  credentials?: string,
  playlistId: string
};

const useFeatures = ({ credentials, playlistId }: UseFeaturesType) => {
  const [{ data, loading, error }] = useAxios(`${HOST}/features?${credentials}&playlistId=${playlistId}`);

  const featureData = data;

  return { data: { featureData }, loading, error };
};

export default useFeatures;

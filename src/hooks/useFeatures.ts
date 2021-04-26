import useAxios from 'axios-hooks';
import getEnv from '../utils';

type UseFeaturesType = {
  credentials?: string,
  playlistIds: string[]
};

const useFeatures = ({ credentials, playlistIds }: UseFeaturesType) => {
  const HOST = getEnv(process.env.REACT_APP_NODE_ENV);
  const playlistIdsQueryParam = playlistIds.join(',');
  const [{ data, loading, error }] = useAxios(`${HOST}/features?${credentials}&playlistIds=${playlistIdsQueryParam}`);

  const featureData = data;

  return { data: { featureData }, loading, error };
};

export default useFeatures;

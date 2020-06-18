import useAxios from 'axios-hooks';

type UseFeaturesType = {
  credentials?: string,
  playlistId: string
};

const useFeatures = ({ credentials, playlistId }: UseFeaturesType) => {
  const [{ data, loading, error }] = useAxios(`http://localhost:8888/features?${credentials}&playlistId=${playlistId}`);

  const featureData = data;

  return { data: { featureData }, loading, error };
};

export default useFeatures;

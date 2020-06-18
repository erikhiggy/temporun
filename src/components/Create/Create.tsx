import React from 'react';
import useFeatures from './hooks/useFeatures';

type Feature = {
  id: string,
  tempo: number
};

type CreateProps = {
  location: {
    state: {
      data: {
        credentials?: string,
        playlists: [{
          id: string
        }]
      }
    }
  },
};

const Create = ({ location }: CreateProps) => {
  console.log(location);
  const playlistId = location?.state?.data?.playlists?.[0]?.id;
  const creds = location?.state?.data?.credentials;

  const { data, loading, error } = useFeatures({ credentials: creds, playlistId });

  if (loading || error || !data) {
    return null;
  }

  const mapOverFeatures = (features: Array<Feature>) => {
    return features.map((feature: Feature, featureIndex: number) => {
      return (
        <div key={`${featureIndex * 3}-key`}>
          {feature.id}
        </div>
      );
    });
  };


  return (
    <div>
      Track Ids:
      {mapOverFeatures(data?.featureData?.trackFeatures?.audio_features)}
    </div>
  );
};

export default Create;

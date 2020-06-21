import React from 'react';
import { createUseStyles } from 'react-jss';
import { Slider } from '@material-ui/core';

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

const useStyles = createUseStyles({
  layout: {
    display: 'flex',
  },

  slider: {
    display: 'flex',
    flexDirection: 'column',
    width: 250,
  },

  trackList: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Create = ({ location }: CreateProps) => {
  const classes = useStyles();
  const playlistId = location?.state?.data?.playlists?.[0]?.id;
  const creds = location?.state?.data?.credentials;

  const { data, loading, error } = useFeatures({ credentials: creds, playlistId });
  const [sliderValue, setSliderValue] = React.useState<number[]>([0, 250]);

  if (loading || error || !data) {
    return null;
  }

  const valueToString = (value: number) => {
    return value.toString();
  };

  const getMinValue = (values: number[]) => {
    return Math.floor(Math.min(...values));
  };

  const getMaxValue = (values: number[]) => {
    return Math.floor(Math.max(...values));
  };

  const handleSliderChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    console.log(newValue);
    setSliderValue(newValue as number[]);
  };

  const getTempos = (features: Feature[]) => {
    return features.map((feature) => feature.tempo);
  };

  const mapOverFeatures = (features: Feature[], tempoRange: number[]) => {
    return features
      .filter(({ tempo }) => tempo >= tempoRange[0] && tempo <= tempoRange[1])
      .map((feature: Feature, featureIndex: number) => {
        return (
          <div key={`${featureIndex * 3}-key`}>
            ID: {feature.id}
            Tempo: {feature.tempo}
          </div>
        );
      });
  };

  return (
    <div className={classes.layout}>
      <div className={classes.trackList}>
        Track Ids:
        {mapOverFeatures(data?.featureData?.trackFeatures?.audio_features, sliderValue)}
      </div>
      <div className={classes.slider}>
        <Slider
          value={sliderValue}
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
          aria-labelledby="range-slider"
          getAriaValueText={valueToString}
          min={getMinValue(getTempos(data?.featureData?.trackFeatures?.audio_features))}
          max={getMaxValue(getTempos(data?.featureData?.trackFeatures?.audio_features))}
        />
      </div>
    </div>
  );
};

export default Create;

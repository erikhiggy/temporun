import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  Button, Card, CardContent, Typography, Slider, TextField,
} from '@material-ui/core';

import useFeatures from './hooks/useFeatures';

const useStyles = createUseStyles({
  layout: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },

  card: {
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'space-around',
  },

  form: {
    display: 'flex',
    alignItems: 'flex-end',
  },

  button: {
    marginLeft: '40px',
  },

  slider: {
    display: 'flex',
    justifyContent: 'center',
  },
});

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
    setSliderValue(newValue as number[]);
  };

  const getTempos = (features: Feature[]) => {
    return features.map((feature) => feature.tempo);
  };

  return (
    <div className={classes.layout}>
      <Card className={classes.card}>
        <CardContent>
          <Typography>
            Select a tempo range for your run
          </Typography>
          <br />
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
          <Typography>
            Choose a snazzy name for your new playlist
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" />
            <div className={classes.button}>
              <Button
                color="primary"
                variant="outlined"
                size="small"
                type="submit"
              >
                Make Playlist
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Create;

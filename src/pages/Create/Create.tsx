import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  Button, Card, CardContent, Typography, Slider, TextField,
} from '@material-ui/core';
import useFeatures from '../../hooks/useFeatures';
import CreatedPlaylist from '../../components/CreatedPlaylist/CreatedPlaylist';

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
  tempo: number,
  uri: string
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

  const playlistIds = location?.state?.data?.playlists?.map((playlist) => playlist.id);
  const credentials = location?.state?.data?.credentials;

  const { data, loading, error } = useFeatures({ credentials, playlistIds });
  const [sliderValue, setSliderValue] = React.useState<number[]>([0, 250]);
  const [createdPlaylistModal, setCreatedPlaylistModal] = React.useState(false);
  const [tracks, setTracks] = React.useState<string[]>([]);
  const [playlistName, setPlaylistName] = React.useState('');

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

  const handleMakePlaylist = (event: React.MouseEvent | React.FormEvent, features: Feature[]) => {
    if (event) {
      event.preventDefault();
    }

    // filter the features based on tempo and store them in state
    const filteredFeatures = features.filter((feature) => {
      return feature.tempo >= sliderValue[0] && feature.tempo <= sliderValue[1];
    }).map((feature) => feature.uri);

    setTracks(filteredFeatures);
    // open the new playlist modal
    setCreatedPlaylistModal(true);
  };

  const getTempos = (features: Feature[]) => {
    return features.map((feature) => feature.tempo);
  };

  const features = data?.featureData?.trackFeatures?.audio_features;

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
              min={getMinValue(getTempos(features))}
              max={getMaxValue(getTempos(features))}
            />
          </div>
          <Typography>
            Choose a snazzy name for your new playlist
          </Typography>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={(event) => handleMakePlaylist(event, features)}
          >
            <TextField
              id="standard-basic"
              label="Name"
              onChange={(event) => setPlaylistName(event.target.value)}
            />
            <div className={classes.button}>
              <Button
                onClick={(event) => handleMakePlaylist(event, features)}
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
      {createdPlaylistModal
      && (
      <CreatedPlaylist
        playlistName={playlistName}
        credentials={credentials}
        tracks={tracks}
      />
      )}
    </div>
  );
};

export default Create;

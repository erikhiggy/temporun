import React from 'react';
import {
  Button, Card, CardMedia, Modal,
} from '@material-ui/core';
import { createUseStyles } from 'react-jss';
import usePlaylist from '../../hooks/usePlaylist';

const useStyles = createUseStyles({
  playlistCreatedText: {
    display: 'flex',
    marginTop: 20,
    justifyContent: 'center',
    fontSize: '24px',
  },

  infoContainer: {
    width: '60%',
  },

  buttonContainer: {
    display: 'flex',
    marginTop: 60,
    justifyContent: 'center',
  },

  buttonClasses: {
    display: 'flex',
    height: 40,
    marginRight: 20,
  },

  card: {
    maxWidth: 200,
    margin: 20,
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalBody: {
    display: 'flex',
    backgroundColor: '#FFF',
    width: 600,
    height: 250,
    borderRadius: '3px',
  },
});

type CreatedPlaylistType = {
  playlistName: string,
  credentials?: string,
  tracks: string[]
};

const CreatedPlaylist = ({ playlistName, credentials, tracks }: CreatedPlaylistType) => {
  const [modalOpen, setModalOpen] = React.useState(true);
  const classes = useStyles();

  const { data, loading, error } = usePlaylist({ playlistName, credentials, tracks });

  if (!data || error) {
    return null;
  }

  const handleClose = (event: React.SyntheticEvent<{}>, open: boolean) => {
    if (open) {
      setModalOpen(false);
    }
  };

  const modalBody = (
    <div className={classes.modalBody}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          src={data?.retrievedPlaylist?.images[0]?.url}
          height={200}
        />
      </Card>
      <div className={classes.infoContainer}>
        <div className={classes.playlistCreatedText}>
          Playlist created!
        </div>
        <div className={classes.buttonContainer}>
          <div className={classes.buttonClasses}>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              href={data?.retrievedPlaylist.external_urls?.spotify}
            >
              Listen on Spotify
            </Button>
          </div>
          <div className={classes.buttonClasses}>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              href="/"
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      className={classes.modal}
      open={modalOpen}
      onBackdropClick={(event) => handleClose(event, modalOpen)}
    >
      {modalBody}
    </Modal>
  );
};

export default CreatedPlaylist;

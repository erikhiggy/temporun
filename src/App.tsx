import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Profile from './components/Profile/Profile';
import SongsList from './components/SongsList/SongsList';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const handleLoggedIn = (token: string | null): void => {
    if (token) {
      setLoggedIn(true);
      window.location.href = '/profile';
    }
  };

  const renderSongsList = () => <SongsList limit={50} bpm={150} />;

  return (
    <div>
      <NavBar loggedIn={loggedIn} />
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage {...props} onLoggedIn={handleLoggedIn} />
              )}
            />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/songs" component={renderSongsList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

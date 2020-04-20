import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Profile from './components/Profile/Profile';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const handleLoggedIn = (token: string | null): void => {
    if (token) {
      setLoggedIn(true);
    }
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage {...props} loggedIn={loggedIn} onLoggedIn={handleLoggedIn} />
            )}
          />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

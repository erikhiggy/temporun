import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Profile from './components/Profile/Profile';

const App = () => {
  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  const handleAuth = (token: string | null) => {
    if (token) {
      setAccessToken(token);
    }
  };

  const renderProfile = () => <Profile accessToken={accessToken} />;

  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} handleAuth={handleAuth} />}
          />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={renderProfile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Connect from './components/Connect/Connect';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  const credentials = document.cookie;
  return (
    <div>
      <Nav />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} credentials={credentials} />} />;
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} credentials={credentials} />} />;
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

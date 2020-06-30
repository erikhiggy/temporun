import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Connect from './pages/Connect/Connect';
import Dashboard from './pages/Dashboard/Dashboard';
import Create from './pages/Create/Create';

const App = () => {
  const credentials = document.cookie;
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} credentials={credentials} />} />;
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} credentials={credentials} />} />;
            <Route exact path="/create" component={Create} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

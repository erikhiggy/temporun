import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Connect from './components/Connect/Connect';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Create/Create';

const App = () => {
  const credentials = document.cookie;
  return (
    <div>
      <Navbar />
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

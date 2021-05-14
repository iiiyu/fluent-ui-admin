import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './views/NotFound';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

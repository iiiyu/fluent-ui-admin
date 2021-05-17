import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import {PrivateRoute} from './PrivateRoute';
import {ProvideAuth} from '../context/auth';

function CustomRouter() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard">
            <Route component={Dashboard} />
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default CustomRouter;

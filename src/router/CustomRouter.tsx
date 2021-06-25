import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import {ProvideAuth} from '../context/auth';
import BasicLayout from '../components/layout/BasicLayout';

function CustomRouter() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <PrivateRouter></PrivateRouter>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default CustomRouter;

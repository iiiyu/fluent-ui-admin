import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PublicRouter from './PublicRouter';
import DashboardRouter from './DashboardRouter';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import {ProvideAuth} from '../context/auth';
import DashboardLayout from '../components/layout/DashboardLayout';

function CustomRouter() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          {/* <PrivateRouter></PrivateRouter> */}
          {/* <PublicRouter></PublicRouter> */}
          <Route path="/dashboard" component={DashboardLayout} />
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default CustomRouter;

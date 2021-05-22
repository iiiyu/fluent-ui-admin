import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

import {ProvideAuth} from '../context/auth';

function CustomRouter() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <PrivateRouter></PrivateRouter>
          <PublicRouter></PublicRouter>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default CustomRouter;

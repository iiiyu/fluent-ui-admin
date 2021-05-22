import React from 'react';
import {Route} from 'react-router-dom';
import NotFound from '../views/NotFound';
import Login from '../views/Login';

function PublicRouter() {
  return (
    <>
      <Route path="/404" component={NotFound} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </>
  );
}

export default PublicRouter;

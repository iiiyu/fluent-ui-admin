import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom'; // A wrapper for <Route> that redirects to the login
import {useAuth} from '../context/auth';
import BasicLayout from '../components/layout/BasicLayout';

type PrivateProps = {
  children: React.ReactNode;
} & RouteProps;
// screen if you're not yet authenticated.

function PrivateRouter() {
  return (
    <>
      <PrivateRoute path="/">
        <Route component={BasicLayout}></Route>
      </PrivateRoute>
    </>
  );
}

function PrivateRoute({children, ...rest}: PrivateProps) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({location}) =>
        auth?.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        )
      }
    />
  );
}

export default PrivateRouter;

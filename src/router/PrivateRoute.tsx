import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom'; // A wrapper for <Route> that redirects to the login
import {useAuth} from '../context/auth';

type PrivateProps = {
  children: React.ReactNode;
} & RouteProps;
// screen if you're not yet authenticated.
export function PrivateRoute({children, ...rest}: PrivateProps) {
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

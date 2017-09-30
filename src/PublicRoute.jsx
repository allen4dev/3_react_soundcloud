import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { func, bool } from 'prop-types';

// Refactor: Change to flow instead of prop-types
const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? (
        <Component {...props} />
      ) : (
        <Redirect path="/results" />
      )}
  />
);

PublicRoute.propTypes = {
  component: func.isRequired,
  authed: bool,
};

PublicRoute.defaultProps = {
  authed: false,
};

export default PublicRoute;

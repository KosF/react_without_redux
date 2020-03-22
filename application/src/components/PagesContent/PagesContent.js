import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import routes from "Src/config/configureRouter";
import { getCookie } from "Src/helpers/cookie";

function PagesContent({ location }) {
  const isAuth = !!getCookie("isAuth");

  return (
    <main className="container">
      <Switch location={location}>
        {routes.map(route =>
          route.private && !isAuth ? (
            <Redirect
              key={route.component ? route.component.name : route.path}
              to={{
                pathname: "/login",
                prevLocation: location.pathname
              }}
            />
          ) : (
            <Route
              key={route.component ? route.component.name : route.path}
              path={route.path}
              component={route.component}
              render={route.render}
              exact={route.exact}
            />
          )
        )}
      </Switch>
    </main>
  );
}

PagesContent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(PagesContent);

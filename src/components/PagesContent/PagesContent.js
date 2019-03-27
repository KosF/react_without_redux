import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";

import routes from "Src/configureRouter";

function PagesContent({ location }) {
  return (
    <main className="pages-content flex-grow-1">
      <div className="container">
        <Switch location={location}>
          {routes.map(route => (
            <Route
              key={route.component ? route.component.name : route.path}
              path={route.path}
              component={route.component}
              render={route.render}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </main>
  );
}

PagesContent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(PagesContent);

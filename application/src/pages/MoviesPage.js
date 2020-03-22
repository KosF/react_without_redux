import React, { Fragment } from "react";

import Movies from "Components/Movies/Movies";

function MoviesPage() {
  return (
    <Fragment>
      <h2 className="mb-4">Movies!</h2>

      <Movies />
    </Fragment>
  );
}

export default MoviesPage;

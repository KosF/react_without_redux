import React, { Fragment } from "react";

import News from "Components/News/News";

function NewsPage() {
  return (
    <Fragment>
      <h2 className="mb-4">News!</h2>

      <News />
    </Fragment>
  );
}

export default NewsPage;

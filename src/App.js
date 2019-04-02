import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "Components/Header/Header";
import PagesContent from "Components/PagesContent/PagesContent";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <PagesContent />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

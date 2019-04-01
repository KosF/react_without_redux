import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "Components/Header/Header";
import PagesContent from "Components/PagesContent/PagesContent";
import Auth from "./hoc/Auth/Auth";

function App() {
  return (
    <Auth>
      <BrowserRouter>
        <Fragment>
          <Header />
          <PagesContent />
        </Fragment>
      </BrowserRouter>
    </Auth>
  );
}

export default App;

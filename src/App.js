import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "Components/Header/Header";
import Auth from "Src/hoc/Auth/Auth";

import PagesContent from "Components/PagesContent/PagesContent";

function App() {
  return (
    <BrowserRouter>
      <Auth>
        <Header />
        <PagesContent />
      </Auth>
    </BrowserRouter>
  );
}

export default App;

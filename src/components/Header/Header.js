import React from "react";

import MainNavigation from "./MainNavigation/MainNavigation";

function Header() {
  return (
    <header id="header" className="border-bottom mb-4 pt-2 pb-2">
      <div className="container">
        <MainNavigation />
      </div>
    </header>
  );
}

export default Header;

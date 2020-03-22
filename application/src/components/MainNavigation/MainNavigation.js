import React from "react";

import dataMainNav from "Src/config/mainNavConfig";
import NavItem from "./NavItem";

function MainNavigation() {
  return (
    <nav id="main-nav">
      <ul className="nav nav-pills">
        {dataMainNav.map(navItem => (
          <NavItem key={navItem.text} data={navItem} />
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;

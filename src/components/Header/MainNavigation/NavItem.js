import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavItem({ data }) {
  return (
    <li className="nav-item" key={data.text.toString()}>
      <NavLink className="nav-link" to={data.url} exact={data.exact}>
        {data.text}
      </NavLink>
    </li>
  );
}

NavItem.propTypes = {
  data: PropTypes.shape({}).isRequired
};

export default NavItem;

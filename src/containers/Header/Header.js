import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import MainNavigation from "Components/MainNavigation/MainNavigation";
import { logOut } from "Src/store/Auth/authActions";
import { getCookie } from "Src/helpers/cookie";

function Header({ ...props }) {
  const handleBtnClick = e => {
    const currentBtn = e.currentTarget.dataset.btn;
    const { history } = props;

    if (currentBtn === "logIn") {
      history.push("/login");
    } else if (currentBtn === "logOut") {
      props.logOut(() => history.push("/"));
    }
  };

  const isAuthCookie = getCookie("isAuth");

  return (
    <header id="header" className="border-bottom mb-4 pt-2 pb-2">
      <div className="container d-flex justify-content-between">
        <MainNavigation />
        {props.isAuth || isAuthCookie ? (
          <button
            type="button"
            className="btn btn-link"
            onClick={handleBtnClick}
            data-btn="logOut"
          >
            Log Out
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-link"
            onClick={handleBtnClick}
            data-btn="logIn"
          >
            Log In
          </button>
        )}
      </div>
    </header>
  );
}

const mapStateToProps = store => ({
  isAuth: store.authReducer.isAuth
});

const mapDispatchToProps = { logOut };

Header.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.node]).isRequired,
  isAuth: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);

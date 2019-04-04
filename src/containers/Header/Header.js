import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import MainNavigation from "Components/MainNavigation/MainNavigation";
import * as cookie from "Src/helpers/cookie";

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(e) {
    const currentBtn = e.currentTarget.dataset.btn;
    const { history } = this.props;

    if (currentBtn === "logIn") {
      history.push("/login");
    } else {
      cookie.setCookie("isAuth", false);
    }
  }

  render() {
    return (
      <header id="header" className="border-bottom mb-4 pt-2 pb-2">
        <div className="container d-flex justify-content-between">
          <MainNavigation />
          {this.props.isAuth ? (
            <button
              type="button"
              className="btn btn-link"
              onClick={this.handleBtnClick}
              data-btn="logOut"
            >
              Log Out
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-link"
              onClick={this.handleBtnClick}
              data-btn="logIn"
            >
              Log In
            </button>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = store => ({
  isAuth: store.isAuth
});

Header.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.node]).isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default withRouter(connect(mapStateToProps)(Header));

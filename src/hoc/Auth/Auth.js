import React, { Fragment } from "react";
// import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Auth({ ...props }) {
  return <Fragment>{props.children}</Fragment>;
}

const mapStateToProps = state => ({
  isAuth: state.username
});

Auth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node]).isRequired
};

export default withRouter(connect(mapStateToProps)(Auth));

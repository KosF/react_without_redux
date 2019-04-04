import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logIn, logOut } from "Src/store/Auth/authActions";
import checkCredentials from "Src/helpers/checkCredentials";
import * as cookie from "Src/helpers/cookie";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isAuth: false,
      errorMsg: false
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChangeInput(e) {
    const value = e.currentTarget.value.toString();
    const fieldName = e.currentTarget.dataset.inputName;

    this.setState(prevState => ({
      ...prevState,
      errorMsg: false,
      [fieldName]: value
    }));
  }

  handleSubmitForm(e) {
    e.preventDefault();
    const { history, location } = this.props;
    const { username, password } = this.state;
    const validCredentials = checkCredentials({
      username,
      password
    });

    const nextLocation = location.prevLocation ? location.prevLocation : "/";

    if (!validCredentials) {
      this.setState({ errorMsg: true });
    } else {
      cookie.setCookie("isAuth", true);

      this.props.logIn(
        {
          username,
          password
        },
        () => history.push(nextLocation)
      );
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <form
          className="col-6 pt-4 pr-3 pb-4 pl-3 bg-light"
          onSubmit={e => this.handleSubmitForm(e)}
        >
          <fieldset>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  data-input-name="username"
                  className="form-control"
                  placeholder="Name"
                  onChange={e => this.handleChangeInput(e)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  data-input-name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={e => this.handleChangeInput(e)}
                />
              </div>
            </div>
            {this.state.errorMsg && (
              <div className="row mb-3">
                <div className="col">
                  <p className="text-danger mb-0">
                    Имя пользователя или пароль введены не верно
                  </p>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col">
                <input
                  className="btn btn-primary w-100"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth
});

const mapDispatchToProps = { logIn, logOut };

Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  logIn: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

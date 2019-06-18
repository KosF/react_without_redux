import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logIn, logOut } from "Src/store/Auth/authActions";
import { setCookie } from "Src/helpers/cookie";
import checkCredentials from "Src/helpers/checkCredentials";

function Login({ ...props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const handleChangeInput = e => {
    const value = e.currentTarget.value.toString().trim();
    const fieldName = e.currentTarget.dataset.inputName;

    setErrorMsg(false);

    if (fieldName === "username") {
      setUsername(value);
    } else if (fieldName === "password") {
      setPassword(value);
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const { history, location } = props;

    const validCredentials = checkCredentials({
      username,
      password
    });

    const nextLocation = location.prevLocation ? location.prevLocation : "/";

    if (!validCredentials) {
      setErrorMsg("true");
    } else {
      setCookie("isAuth", true);

      props.logIn({ username, password }, () => history.push(nextLocation));
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        className="col-6 pt-4 pr-3 pb-4 pl-3 bg-light"
        onSubmit={handleSubmitForm}
      >
        <fieldset>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                data-input-name="username"
                className="form-control"
                placeholder="Name"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="password"
                data-input-name="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          {errorMsg && (
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
    null,
    mapDispatchToProps
  )(Login)
);

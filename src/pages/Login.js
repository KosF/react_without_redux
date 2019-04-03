import React, { Component } from "react";

import checkCredentials from "Src/helpers/checkCredentials";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isAuth: false
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChangeInput(e) {
    const value = e.currentTarget.value.toString();
    const fieldName = e.currentTarget.dataset.inputName;

    this.setState(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  }

  handleSubmitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const validCredentials = checkCredentials({
      username,
      password
    });

    return validCredentials;
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

export default Login;

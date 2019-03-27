import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">Logo !</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="containerMenu">
          <span className="spanHome">Home</span>
          <span className="spanUser">User</span>
          <span className="spanOrder">Order</span>
          <span className="spanLogin">Login</span>
        </div>
      </div>
    );
  }
}

export default Header;

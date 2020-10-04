import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="containerComponent">
          <input className="inputUsername" placeholder="Input your Username" />
          <input className="inputPassword" placeholder="Input your Password" />

          <div className="containerButton">
            <button className="buttonLogin">
              <span className="wordLogin">Login</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

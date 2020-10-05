import React, { Component } from "react";
import "./User.css";
import Header from "../../../ConstantComponent/Header/Header";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* header tab */}
          <div className="container2">
            <div className="containerMenu">
              <span className="menu">User Id</span>
              <span className="menu1">Username</span>
              <span className="menu2">Alamat</span>
            </div>
          </div>

          <div className="container2">
            <div className="containerMenu">
              <span className="menu">User Id</span>
              <span className="menu1">Username</span>
              <span className="menu2">Alamat</span>
            </div>
          </div>

          <div className="container2">
            <div className="containerMenu">
              <span className="menu">User Id</span>
              <span className="menu1">Username</span>
              <span className="menu2">Alamat</span>
            </div>
          </div>

          <div className="container2">
            <div className="containerMenu">
              <span className="menu">User Id</span>
              <span className="menu1">Username</span>
              <span className="menu2">Alamat</span>
            </div>
          </div>

          <div className="container2">
            <div className="containerMenu">
              <span className="menu">User Id</span>
              <span className="menu1">Username</span>
              <span className="menu2">Alamat</span>
            </div>
          </div>

          <div className="container2">
            <div className="containerMenu">
              <span className="menu">User Id</span>
              <span className="menu1">Username</span>
              <span className="menu2">Alamat</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default User;

import React, { Component } from "react";
import "./Order.css";
import Header from "../../../ConstantComponent/Header/Header";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* header tab */}

          <div className="containerMenu">
            <span className="menu">User Id</span>
            <span className="menu1">Berat Item</span>
            <span className="menu2">Biaya</span>
            <span className="menu3">Layanan</span>
            <span className="menu4">Durasi</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Order;

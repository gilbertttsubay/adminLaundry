import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Header, Body } from "../src/ConstantComponent";
import User from "./pages/User/User";
import Order from "./pages/Order/Order";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <Router className="all-container">
      //   <Header />
      //   <Body />
      // </Router>
      <Order></Order>
    );
  }
}

export default App;

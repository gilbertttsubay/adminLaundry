import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../src/ConstantComponent/Header/Header";
import Order from "../src/Gilbert/Pages/Orders/Order";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Order></Order>;
  }
}

export default App;

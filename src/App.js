import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../src/ConstantComponent/Header/Header";
import Login from "../src/Gilbert/Pages/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Login></Login>;
  }
}

export default App;

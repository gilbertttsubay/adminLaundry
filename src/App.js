import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../src/ConstantComponent/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Header></Header>;
  }
}

export default App;

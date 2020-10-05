import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";

import { Header, Body } from "../src/ConstantComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router className="all-container">
        <Header />
        <Body />
      </Router>
    );
  }
}

export default App;

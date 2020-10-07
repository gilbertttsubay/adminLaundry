import React, { Component } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import "./App.css";

import { Header, Body } from "../src/ConstantComponent";
import User from "./pages/User/User";
import Order from "./pages/Order/Order";
import { Home } from "./pages";

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
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
        <Route path="/order" component={Order} />
      </BrowserRouter>
    );
  }
}

export default App;

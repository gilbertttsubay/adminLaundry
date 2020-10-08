import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContext } from './config/firebase';

import "./App.css";

import { Header, Body } from "../src/ConstantComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <FirebaseContext.Consumer>
          {firebase => <Header firebase={firebase} />}
        </FirebaseContext.Consumer>   
        <FirebaseContext.Consumer>
          {firebase => <Body firebase={firebase} />}
        </FirebaseContext.Consumer>   
      </Router>
    );
  }
}

export default App;

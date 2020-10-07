import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./header.css";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickHome = () => {};

  handleClickUser = () => {};

  handleClickOrder = () => {};

  handleClickLogin = () => {};
  render() {
    return (
      <Container>
        <Row className="container-list">
          <Col className="container-logo">
            <Image className="logo" src={logo} alt="Logo" fluid />
          </Col>
          <Col className="container-menu">
            <Link to="/">Home</Link>
          </Col>
          <Col className="container-menu">
            {" "}
            <Link to="/user">User</Link>
          </Col>
          <Col className="container-menu">
            <Link to="/order">Order</Link>
          </Col>
          <Col className="container-menu">Login</Col>
        </Row>
      </Container>
    );
  }
}

export default Header;

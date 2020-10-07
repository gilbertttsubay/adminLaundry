import React, { Component } from "react";
import { Container, Row, Col, Image, div } from "react-bootstrap";
import "./header.css";

import logo from '../../assets/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row className="container-list">
          <Col className="container-logo" xs={12} sm ={12} md={3}>
            <Image className="logo" src={logo} alt="Logo" fluid />
          </Col>

          <Col className="container-menu" xs={12} sm ={12} md={9}>
            <div className="btn-menu">Home</div>
            <div className="btn-menu">User</div>
            <div className="btn-menu">Order</div>
            <div className="btn-menu">Login</div>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Header;

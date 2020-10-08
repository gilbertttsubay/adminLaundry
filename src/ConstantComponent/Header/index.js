import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./header.css";

import { Menu } from '../template';
import { connect } from "react-redux"
import { setLogout } from "../../store/action/authAction"
import logo from '../../assets/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logoutHandler = () => {
    const { logoutFirebaseUser } = this.props.firebase
    const { doLogout } = this.props

    logoutFirebaseUser()
        .then(() => {
            doLogout()
            alert("Logout Success")
        })
        .catch( err => {
            alert(err.type)
            console.log(err.message)
        })
  }

  render() {

    const { isLogin } = this.props

    return (
      <Container>
        <Row className="container-list">
          <Col className="container-logo" xs={12} sm ={12} md={2}>
            <Image className="logo" src={logo} alt="Logo" fluid />
          </Col>

          {
            isLogin ? (
              <Col className="container-menu" xs={12} sm ={12} md={{span:4, offset:7}}>
                  <Menu 
                    link="/admin/order"
                    label="Order" 
                  />
                  <Menu 
                    link="/admin/userlist" 
                    label="User" 
                  />
                  <Menu 
                    link="/"
                    label="Logout" 
                    onClick={this.logoutHandler}
                  />
              </Col>
              ):
                (
                  <Col className="container-menu" xs={12} sm ={12} md={{span:2, offset:8}}>
                  <Menu 
                    link="/" 
                    label="Home" 
                  />
                  <Menu 
                    link="/login" 
                    label="Login" 
                  />
                  </Col>  
                ) 
          }
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  userOnLogin : state.authReducer.userOnLogin,
  isLogin : state.authReducer.isLogin
})

const mapDispatchToProps = (dispatch) => ({
  doLogout: () => dispatch(setLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

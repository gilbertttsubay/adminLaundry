import React, { Component } from 'react';
import './login.css'

class Login extends Component {

    render() { 
        return ( 
            <div className="container">
                <div className="container-login">
                <input className="input" placeholder="Input your Username" />
                <input className="input" placeholder="Input your Password" />
        
                <div className="containerButton">
                    <button className="buttonLogin">
                    <span className="wordLogin">Login</span>
                    </button>
                </div>
                </div>
            </div>  
        );
    }
}
 
export default Login;
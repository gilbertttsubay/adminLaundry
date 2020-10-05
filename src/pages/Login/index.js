import React, { Component } from 'react';

class Login extends Component {

    render() { 
        return ( 
            <div className="container">
                <div className="containerComponent">
                <input className="inputUsername" placeholder="Input your Username" />
                <input className="inputPassword" placeholder="Input your Password" />
        
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
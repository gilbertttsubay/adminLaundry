import React, { Component } from 'react';
import './login.css'

import { setLogin } from "../../store/action/authAction"
import { connect } from "react-redux"
import FirebaseContext from "../../config/firebase/firebaseContext"

class Login extends Component {
    constructor(props){
        super()
        this.state = {}
    }

    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <LoginForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
        )
    }
}

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    loginHandler = () => {
        const { email, password } = this.state
        const { doLogin } = this.props
        const { loginFirebaseUser, usersDb } = this.props.firebase
        
        if (email === "") {return alert("Email Harus diisi!")}
        else if (password === "") {return alert("Password Harus diisi!")}

        loginFirebaseUser({email, password}) 
            .then( res => {
                if (res.user) {
                    // console.log(res.user.uid);
                    usersDb().doc(res.user.uid).get()
                        .then( userOnLogin => {
                            doLogin({...userOnLogin.data(), uid: res.user.uid})
                        })
                        .then(() => {
                            window.location.reload()
                        })   
                    alert("Login Success")
                }
            })            
            .catch( err => {
                console.error(err)
                alert(err.message)
            })
    }

    render() { 
        return ( 
            <div className="container-page">
                <div className="container-login">
                    <h2> Login </h2>
                    <div className="container-input">
                        <input 
                            className="input" 
                            placeholder="Input your Username" 
                            type="email"
                            name="email"
                            onChange={(el) => this.setValue(el.target)}
                        />

                        <input 
                            className="input" 
                            placeholder="Input your Password" 
                            type="password"
                            name="password"
                            onChange={(el) => this.setValue(el.target)}
                        />
                    </div>
                
        
                <div className="btn-container">
                    <button className="buttonLogin" onClick={this.loginHandler}>
                        <span className="wordLogin">Login</span>
                    </button>
                </div>
                </div>
            </div>  
        );
    }
}
 
const mapDispatchToProps = (dispatch) => ({
    doLogin: (user) => dispatch(setLogin(user))
})

export default connect(null, mapDispatchToProps)(Login)
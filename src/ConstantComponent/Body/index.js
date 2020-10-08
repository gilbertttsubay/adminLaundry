import React, { Component } from 'react';
import { 
    Switch, 
    Route, 
    Redirect 
} from 'react-router-dom';

import { Order, Login, User, Home } from '../../pages';
import { connect } from "react-redux"
import { setLogin } from "../../store/action/authAction"
import { FirebaseContext } from '../../config/firebase'

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render() { 

        const { isLogin } = this.props
        

        return ( 
            // <Header />
            <Switch>
                <Route exact path="/">
                    {/* <Login /> */}
                    {
                        (isLogin) ? (
                            <Redirect to="/admin/order" />
                        ) : 
                           <Home />
                    }
                </Route>
                <Route exact path="/login">
                    {/* <Login /> */}
                    {
                        (isLogin) ? (
                            <Redirect to="/admin/order" />
                        ) : 
                           <Login />
                    }
                </Route>
                <Route path="/admin/order">
                    {/* <Home /> */}
                    {
                        (isLogin) ? (
                            <Order />
                        ) : 
                            <Redirect to="/" />
                    }
                </Route>
                <Route path="/admin/userlist">
                    {/* <Home /> */}
                    {
                        (isLogin) ? (
                            <FirebaseContext.Consumer>
                                {firebase => <User {...this.props} firebase={firebase} />}
                            </FirebaseContext.Consumer>
                        ) : 
                            <Redirect to="/" />
                    }
                </Route>
            </Switch>
         );
    }
}
 
const mapStateToProps = (state) => ({
    userOnLogin : state.authReducer.userOnLogin,
    isLogin : state.authReducer.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (user) => dispatch(setLogin(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
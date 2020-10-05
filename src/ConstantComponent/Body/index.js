import React, { Component } from 'react';
import { 
    Switch, 
    Route, 
    Redirect 
} from 'react-router-dom';

import { Home, Login } from '../../pages';

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() { 

        const { isLogin, userOnLogin } = this.props


        return ( 
            <Switch>
                <Route exact path="/">
                    {
                        (isLogin && userOnLogin === "admin") ? (
                            <Redirect to="/homepage"/>
                        ) : 
                           <Login />
                    }
                </Route>
                <Route path="/homepage">
                    {
                        (isLogin && userOnLogin !== "admin") ? (
                            <Home />
                        ) : 
                           <Login />
                    }
                     <Home />
                </Route>
            </Switch>
         );
    }
}
 
export default Body;
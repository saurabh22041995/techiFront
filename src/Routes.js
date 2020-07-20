import React from 'react';
import Signup from './Components/User/signup';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/" exact component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

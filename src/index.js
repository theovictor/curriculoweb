import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";

import Profile from "views/Profile.js";
import HomePg from "views/HomePg.js";
import PasswordPage from "views/PasswordPage.js";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" exact render={props => <App {...props} />} />
            <Route path="/register-page" exact render = {props => <HomePg {...props}/>}/>
            <Route path="/password-page" exact render = {props => <PasswordPage {...props}/>}/>
            <Route path="/profile-page" exact render = {props => <Profile {...props}/>}/>
            <Redirect to="/"/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);

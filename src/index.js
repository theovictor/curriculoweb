import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";

import App from "./App";
import Profile from "views/Profile.js";
import ResetPage from "views/ResetPage.js";
import Index from "views/Index.js";
import Dashboard from 'views/Dashboard.js';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" exact render={props => <App {...props} />} />
            <Route path="/index-page" exact render = {props => <Index {...props}/>}/>
            <Route path="/dashboard-page" exact render = {props => <Dashboard {...props}/>}/>
            <Route path="/profile-page" exact render = {props => <Profile {...props}/>}/>
            <Route path="/reset-page" exact render = {props => <ResetPage {...props}/>}/>
            <Redirect to="/"/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
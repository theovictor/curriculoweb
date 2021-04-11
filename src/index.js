import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import css
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";
// import pages
import Index from "views/Index.js";
import Dashboard from "views/Dashboard.js";
import Profile from "views/Profile.js";
import ResetPage from "views/ResetPage.js";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/dashboard-page" component={Dashboard}/>
            <Route exact path="/profile-page" component={Profile}/>
            <Route exact path="/reset-page" component={ResetPage}/>
            <Route exact path="/index-page" component={Index}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
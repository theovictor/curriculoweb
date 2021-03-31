/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */
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

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" exact render={props => <App {...props} />} />
            <Route path="/profile-page" exact render = {props => <Profile {...props}/>}/>
            <Route path="/register-page" exact render = {props => <HomePg {...props}/>}/>
            <Redirect to="/"/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);

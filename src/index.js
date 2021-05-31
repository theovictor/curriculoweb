import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import "react-notification-alert/dist/animate.css";
import { Provider } from 'react-redux'
import store from './store'

import Index from "pages/Index";
import Dashboard from "pages/Dashboard";
import Profile from "pages/Profile";
import ResetPage from "pages/ResetPage";
import Configuracao from "pages/Configuracao";

render(
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/reset" component={ResetPage}/>
            <Route exact path="/settings" component={Configuracao}/>
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import "react-datetime/css/react-datetime.css";

import Index from "pages/Index.js";
import Dashboard from "pages/Dashboard.js";
import Profile from "pages/Profile.js";
import ResetPage from "pages/ResetPage.js";
import Configuracao from "pages/Configuracao.js";

render(
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/reset" component={ResetPage}/>
          <Route exact path="/settings" component={Configuracao}/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
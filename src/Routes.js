import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "pages/Index";
import Dashboard from "pages/Dashboard";
import Profile from "pages/Profile";
import ResetPage from "pages/ResetPage";
import Configuracao from "pages/Configuracao";
import Contato from "pages/Contato";


const Routes = () => {
  return (
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/reset" component={ResetPage}/>
            <Route exact path="/settings" component={Configuracao}/>
            <Route exact path="/contact" component={Contato}/>
        </Switch>
    </BrowserRouter>
  
  );
}

export default Routes;

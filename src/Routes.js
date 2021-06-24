import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import RouteWithLayout from './components/RouteWithLayout';
import MainLayout from './layouts/Main'

import Index from "pages/Index";
import DadosPrincipais from './components/Formularios/DadosPrincipais';
import Escolares from './components/Formularios/Escolares';
import Conhecimentos from './components/Formularios/Conhecimentos';
import Experiencias from './components/Formularios/Experiencias';
// import Profile from "pages/Profile";
import Configuracao from "pages/Configuracao";
import Contato from "pages/Contato";
import ResetPage from 'pages/ResetPage';


const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login"/>
          <RouteWithLayout component={DadosPrincipais} exact layout={MainLayout} path="/dados_iniciais"/>
          <RouteWithLayout component={Escolares} exact layout={MainLayout} path="/formacoes"/>
          <RouteWithLayout component={Conhecimentos} exact layout={MainLayout} path="/cursos"/>
          <RouteWithLayout component={Experiencias} exact layout={MainLayout} path="/experiencias"/>
          {/* <Route exact path="/meu_perfil" component={Profile}/> */}
          <Route exact path="/configuracao" component={Configuracao}/>
          <Route exact path="/contato" component={Contato}/>
          <Route exact path="/login" component={Index}/>
          <Route exact path="/reset" component={ResetPage}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
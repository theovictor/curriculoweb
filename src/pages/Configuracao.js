import React, {useEffect}from 'react';
// import {Container, Col, Row} from 'reactstrap';
import { useHistory } from "react-router-dom";
import DashNavbar from 'components/Navbars/DashNavbar';
import AccountSettings from 'components/Configuracao/AccountSettings';
import isLoged from "helpers/isLoged";

import 'assets/css/navbar.css'
import 'assets/css/upload-img.css'

export default function Configuracao(){
  const history = useHistory();
  const routeChange = () =>{ 
    history.push('/');
  }

  useEffect(() => {
    document.body.classList.add('settings');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup(){
      document.body.classList.remove('settings');
    };
  }, []);

  if(!isLoged()){routeChange()};

  return(
    <>
      <DashNavbar/>
      <div className="wrapper">
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1"
            style={{
              backgroundImage: 'url("' + require("assets/img/theme/curved.jpg") + '")',
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <AccountSettings/>
        </section>
      </div>
    </>
  );
}
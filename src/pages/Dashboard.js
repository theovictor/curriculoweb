import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import isLoged from "helpers/isLoged";
import NotificationAlert from "react-notification-alert";
import DashNavbar from "components/Navbars/DashNavbar.js";
import DashBody from "components/Dashboard/DashBody.js";

export default function Dashboard(){
  const history = useHistory();
  const notifica = useRef();

  const routeChange = () =>{ 
    history.push('/');
  }
  const notify = (type, msg) => {
    const options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
           {''}
           Aviso ! 
          </span>
          <span className="alert-msg" data-notify="message">{msg}</span>
        </div>
      ),
      type: type,
      icon: "ni ni-bell-55",
      autoDismiss: 3
    };
    notifica.current.notificationAlert(options)
  };

  useEffect(() => {
    document.body.classList.add("dashboard");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    notify('success', 'Login efetuado com Sucesso!')
    return function cleanup() {
      document.body.classList.remove("dashboard");
    };
  }, []);


  if(!isLoged()){routeChange()};
  
  return (
    <>
      <DashNavbar />
      <div className="rna-wrapper"><NotificationAlert ref={notifica}/></div>
      <div className="wrapper">
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-teal">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <DashBody />
        </section>
      </div>
    </>
  );
}
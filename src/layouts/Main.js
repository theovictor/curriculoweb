import React, { useEffect, useRef } from "react";
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import isLoged from "helpers/isLoged";
import NotificationAlert from "react-notification-alert";
import Navbar from "./components/Navbar1";
import Sidebar from "./components/Sidebar";

export default function Main({ children }) {
  const history = useHistory();
  const notifica = useRef();
  const alerta = sessionStorage.getItem('notifica')
  
  const routeChange = () => {
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

  // CLASSE CSS DE FOTO DO PERFIL
  useEffect(() => {
    document.body.classList.add("dashboard");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if(alerta == 1){
      notify('success', 'Login efetuado com Sucesso!')
      sessionStorage.removeItem('notifica');
    }
    return function cleanup() {
      document.body.classList.remove("dashboard");
    };
  }, []);

  if (!isLoged()) { routeChange() };

  return (
    <>
      <Navbar />
      <div className="rna-wrapper"><NotificationAlert ref={notifica} /></div>
      <div className="wrapper">
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-gray">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="mt-7" fluid>
            <Row>
              <Sidebar />
              <Col className="order-xl-2" xl="9">
                <Card className="telaRND bg-secondary shadow">
                  <CardBody>
                    {children}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
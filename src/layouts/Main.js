import React, { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardBody, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { useHistory } from "react-router-dom";
import isLoged from "helpers/isLoged";
import NotificationAlert from "react-notification-alert";
import Navbar from "./components/Navbar1";
import Sidebar from "./components/Sidebar";
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../store/actions/userActions'
import curriculoActions from '../store/actions/curriculoActions';


export default function Main({ children }) {
  const history = useHistory();
  const notifica = useRef();

  const reducer = useSelector( state => state.userReducer);
  // const curriculoReducer = useSelector( state => state.curriculoReducer);
  const userID = sessionStorage.getItem('user_id')
  const nome = sessionStorage.getItem('nome')
  const alerta = sessionStorage.getItem('notifica')
  const dispatch = useDispatch();
  
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

  useEffect(() => {
    if(!reducer.logged){
      dispatch(userActions.login(userID))
      dispatch(curriculoActions.busca_curriculo(userID))
      dispatch(userActions.user_name(nome))
    }
    // console.log(reducer)
  }, [])

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
              <Col className="order-xl-2" xl="9"> {/* Card da esquerda*/}
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
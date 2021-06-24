import React, { useEffect, useRef, useState } from "react";
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import isLoged from "helpers/isLoged";
import NotificationAlert from "react-notification-alert";
import Navbar from "./components/Navbar1";
import Sidebar from "./components/Sidebar";
import { useSelector, useDispatch } from 'react-redux'
import userActions from "store/actions/userActions";
import curriculoActions from "store/actions/curriculoActions";

document.body.classList.add("dashboard");
window.scrollTo(0, 0);
document.body.scrollTop = 0;

export default function Main({ children }) {

  const dispatch = useDispatch()
  const rd_user = useSelector( state => state.userReducer)
  const history = useHistory();
  const notifica = useRef();
  
  const alerta = sessionStorage.getItem('notifica')
  const [isLoading, setIsLoading] = useState(true)

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
    if (isLoged()) {
      if(!rd_user.logged){
        const token = sessionStorage.getItem('token')
        dispatch(userActions.busca_user())
        dispatch(userActions.add_token(token))
        setIsLoading(false)
      }
    } else {
      routeChange()
    }
  }, [])

  useEffect(() => {
    if (rd_user.user)
    dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
    setIsLoading(false)
  }, [rd_user])


  return (
    <>
    <div className="rna-wrapper"><NotificationAlert ref={notifica} /></div>
    {isLoading ? <h1>Carregando...</h1>
      :
      <>
        <Navbar />
        
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
    }
    </>
  );
}
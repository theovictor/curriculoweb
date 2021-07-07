import React, { useEffect, useState } from "react";
import { Card, CardBody, Container, Row, Col, Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {useNotify} from '../hooks/useNotify'
import Navbar from "./components/Navbar1";
import Sidebar from "./components/Sidebar";
import NotificationAlert from "react-notification-alert";
// import userActions from "store/actions/userActions";
import curriculoActions from "store/actions/curriculoActions";
import isLoged from "helpers/isLoged";

export default function Main({ children }) {

  const dispatch = useDispatch()
  const rd_user = useSelector( state => state.userReducer)
  const history = useHistory();
  const notify = useNotify()
  const [isLoading, setIsLoading] = useState(true)

  const routeChange = () => {
    history.push('/');
  }

  setTimeout(() => {
    setIsLoading(false)
  }, 300);

  useEffect(() => {
    document.body.classList.add("dashboard");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (isLoged()) {
      // if(!rd_user.logged){
        //   const token = sessionStorage.getItem('token')
        //   dispatch(userActions.busca_user())
        //   dispatch(userActions.add_token(token))
        // }
        setIsLoading(false)
    } else {
      routeChange()
    }
    return function cleanup() {
      document.body.classList.remove("dashboard");
    }
  }, [])

  useEffect(() => {
    if (rd_user.user)
    dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
    setIsLoading(false)
      if(rd_user.controle === 1) {
        notify.notify('success', 'Login efetuado com sucesso!')
      }
  }, [rd_user])

  return (
    <>
    <div className="rna-wrapper"><NotificationAlert ref={notify.notifica} /></div>
    {isLoading ? 
      <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
        <Spinner color="primary"/>
      </div>
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
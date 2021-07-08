import React, { useEffect, useState } from "react";
import { Card, CardBody, Container, Row, Col, Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {useNotify} from '../hooks/useNotify'
import Navbar from "./components/Navbar1";
import Sidebar from "./components/Sidebar";
import NotificationAlert from "react-notification-alert";
import curriculoActions from "store/actions/curriculoActions";
import isLoged from "helpers/isLoged";

export default function Main({ children }) {
  const history = useHistory();
  const routeChange = () => {history.push('/')}
  const rd_user = useSelector( state => state.userReducer)
  const rd_curriculo = useSelector( state => state.curriculoReducer)
  const dispatch = useDispatch()
  const notify = useNotify()
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 300);

  useEffect(() => {
    document.body.classList.add("dashboard");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (isLoged()) {
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
    if(rd_curriculo.show_curriculo?.curriculo){
    setTimeout(() => {
        const dataInfo = rd_curriculo.show_curriculo.curriculo.dataNascimento;
        const anoAtual = new Date().getFullYear();
        const dataInfoParts = dataInfo.split('-');
        const anoNasc = dataInfoParts[0];
        const mesNasc = dataInfoParts[1];
        const diaNasc = dataInfoParts[2];
        let age = anoAtual - anoNasc;
        const mesAtual = new Date().getMonth() + 1;
        if (mesAtual < mesNasc) {
          age--;
        } else {
          if (mesAtual === mesNasc) {
            if (new Date().getDate() < diaNasc) {
              age--;
            }
          }
        }
        return (
          dispatch(curriculoActions.idade(age.toString()))
        )
      }, 100)
    }
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
import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import "assets/css/IndexPage.css";
import LoginCard from 'components/Login/LoginCard';
import RegisterCard from 'components/Register/RegisterCard.js';
export default function Index() {
  const [mostrar, setMostrar] = useState('');
  useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  }, []);
  function btnEntrar(){
    if(mostrar === '' || mostrar === 'registrar'){
      setMostrar('entrar');
    }
  }
  function btnRegistrar(){
    if(mostrar === '' || mostrar === 'entrar'){
      setMostrar('registrar');
    }
  }
  return (
    <>
      <div className="section-shaped my-0 skew-separator skew-mini">
        <div className="page-header page-header-small header-filter">
          <div className="page-header-image" style={{backgroundImage:'url("'+require("assets/img/theme/curved2.jpg")+'")',}}/>
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col className="px-5" lg="6" md="8" xl="5">
                  <h1 className="text-white">Bem Vindo!</h1>
                  <p className="text-lead text-white">
                    Entre com sua conta, ou cria uma gratuitamente!!
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <div className="py-4 mt-lg-0">
                    <Button className="mr-4 mb-4" color="primary" type="button"
                      onClick={btnEntrar}
                    >
                      Entrar
                    </Button>
                    <Button className="ml-4 mb-4" color="primary" type="button"
                      onClick={btnRegistrar}
                    >
                      Registrar
                    </Button>
                </div>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      {mostrar === 'entrar'?
        <LoginCard/>
      : mostrar === 'registrar'?
        <RegisterCard/>
      : <div/>
      }
    </>
  );
}
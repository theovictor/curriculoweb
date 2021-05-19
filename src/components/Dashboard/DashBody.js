import React, {useState} from 'react';
import { Card, CardHeader, CardBody, Container, Row, Col, Button, Nav, NavItem } from 'reactstrap';
import DadosPrincipais from 'components/Formularios/DadosPrincipais.js';
import Escolares from 'components/Formularios/Escolares.js';
export default function DashBody() {
  const [mostrar, setMostrar] = useState('escolares');
  function btnDadosPrin(){
    if(mostrar !== 'dadosPrincipal'){
      setMostrar('dadosPrincipal');
    }
  }
  function btnEscolares(){
    if(mostrar !== 'escolares'){
      setMostrar('escolares');
    }
  }
  function btnConheci(){
    if(mostrar !== 'conhecimento'){
      setMostrar('conhecimento');
    }
  }
  function btnExperi(){
    if(mostrar !== 'experiencia'){
      setMostrar('experiencia');
    }
  }
  return (
    <>
      <Container className="mt-7" fluid>
        <Row>
          <Col className="order-xl-1 mb-2 mb-xl-0" xl="3"> {/* Card do Menu */}
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <img className="rounded-circle" alt="..."
                      src={require("assets/img/theme/team-4-800x800.jpg")}/>
                  </div>
                </Col>
              </Row>
              <CardBody className="pt-0 pt-md-4">
                <div className="text-center">
                  <h3 className="mt-7">Mariazinha</h3>
                  <div className="h5 font-weight-300">dos Biricuticos</div>
                  <hr className="my-4" />
                  <Col className="text-left">
                    <Nav vertical>
                      <NavItem>
                      <Button className="btn-icon btn-3 border-0" color="info" type="button" outline onClick={btnDadosPrin}>
                        <span className="btn-inner--icon">
                          <i className="ni ni-badge"></i>
                        </span>
                        <span className="btn-inner--text">Dados Principais</span>
                      </Button>
                      <Button className="btn-icon btn-3 border-0" color="info" type="button" outline onClick={btnEscolares}>
                        <span className="btn-inner--icon">
                          <i className="fas fa-graduation-cap"></i>
                        </span>
                        <span className="btn-inner--text">Escolares</span>
                      </Button>
                      <Button className="btn-icon btn-3 border-0" color="info" type="button" outline onClick={btnConheci}>
                        <span className="btn-inner--icon">
                        <i className="ni ni-books"></i>
                        </span>
                        <span className="btn-inner--text">Conhecimentos</span>
                      </Button>
                      <Button className="btn-icon btn-3 border-0" color="info" type="button" outline onClick={btnExperi}>
                        <span className="btn-inner--icon">
                          <i className="fas fa-chart-line"></i>
                        </span>
                        <span className="btn-inner--text">Experiências
                        </span>
                      </Button>
                      <Button className="btn-icon btn-3 border-0" color="info" type="button" outline>
                        <span className="btn-inner--icon">
                          <i className="fas fa-file-pdf"></i>
                        </span>
                        <span className="btn-inner--text">Exportar PDF
                        </span>
                      </Button>
                      </NavItem>
                    </Nav>
                  </Col>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-2" xl="9"> {/* Card da esquerda*/}
            <Card className="telaRND bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Meu Curriculo</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {mostrar === 'dadosPrincipal'?
                  <DadosPrincipais />
                : mostrar === 'escolares'?
                  <Escolares/>
                : mostrar === 'conhecimento'?
                  <div/>
                : mostrar === 'experiencia'?
                  <div/>
                : <div/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
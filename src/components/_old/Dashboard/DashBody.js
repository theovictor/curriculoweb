import React, {useState} from 'react';
import { Card, CardHeader, CardBody, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector } from 'react-redux'

import DadosPrincipais from 'components/Formularios/DadosPrincipais.js';
import Escolares from 'components/Formularios/Escolares.js';
import Conhecimentos from 'components/Formularios/Conhecimentos.js';
import Experiencias from 'components/Formularios/Experiencias.js';

export default function DashBody() {
  const [mostrar, setMostrar] = useState('')
  const dados_curriculo = useSelector( state => state.curriculoReducer)

  const btnDadosPrin = () => {
    if(mostrar !== 'dadosPrincipal'){
      setMostrar('dadosPrincipal');
    }
  }
  const btnEscolares = () => {
    if(mostrar !== 'escolares'){
      setMostrar('escolares');
    }
  }
  const btnConheci = () => {
    if(mostrar !== 'conhecimento'){
      setMostrar('conhecimento');
    }
  }
  const btnExperi = () => {
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
                    <div className="rounded-circle"/>
                  </div>
                </Col>
              </Row>
              <CardBody className="pt-0">
                <div className="text-center">
                  <h3 className="mt--6">{dados_curriculo.show_curriculo?.curriculo?.nome? dados_curriculo.show_curriculo.curriculo.nome : ''}</h3>
                  <hr className="my-4" />
                  <Col className="text-left">
                    <ListGroup>
                      <ListGroupItem className="list-group-item-action border-0"
                        // onClick={btnDadosPrin}
                        tag="button"
                      >
                        <i className="ni ni-badge mr-3"/>
                        Meu Curriculo
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem className="list-group-item-action border-0"
                        onClick={btnDadosPrin}
                        tag="button"
                      >
                        <i className="ni ni-badge mr-3"/>
                        Dados Principais
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem className="list-group-item-action border-0"
                        onClick={btnEscolares}
                        tag="button"
                      >
                        <i className="fas fa-graduation-cap mr-3"/>
                        Escolares
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem className="list-group-item-action border-0"
                        onClick={btnConheci}
                        tag="button"
                      >
                        <i className="ni ni-books mr-3"/>
                        Conhecimentos
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem className="list-group-item-action border-0"
                        onClick={btnExperi}
                        tag="button"
                      >
                        <i className="fas fa-chart-line mr-3"/>
                        Experiências
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem className="list-group-item-action border-0"
                        onClick={() => {}}
                        tag="button"
                      >
                        <i className="fas fa-file-pdf mr-3"/>
                        Exportar PDF
                      </ListGroupItem>
                    </ListGroup>
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
                  <Conhecimentos/>
                : mostrar === 'experiencia'?
                  <Experiencias/>
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
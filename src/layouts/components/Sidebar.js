import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector } from 'react-redux'
import { api_file } from '../../services/api.js';
import { Link } from "react-router-dom";


export default function Sidebar({ children }) {

  const dados_curriculo = useSelector(state => state.curriculoReducer)
  const imagem = sessionStorage.getItem('thumbnail')
  
// useEffect(() => {console.log(dados_curriculo)}, [dados_curriculo])

  return (
    <Col className="order-xl-1 mb-2 mb-xl-0" xl="3"> {/* Card do Menu */}
      <Card className="card-profile shadow">
        <Row className="justify-content-center">
          <Col className="order-lg-2" lg="3">
            <div className="card-profile-image">
              {imagem === 'undefined' ?
                <div className="rounded-circle"/>
                :
              <img className="rounded-circle" src={`${api_file}/${imagem}`} alt="..."/>
              }
            </div>
          </Col>
        </Row>
        <CardBody className="pt-0">
          <div className="text-center">
            <h3 className="mt--6">{dados_curriculo.show_curriculo?.curriculo?.nome ? dados_curriculo.show_curriculo.curriculo.nome : 'Olá Visitante'}</h3>
            <hr className="my-4" />
            <Col className="text-left">
              <ListGroup>
                <ListGroupItem  to="/dados_iniciais" tag={Link} className="list-group-item-action border-0">
                  <i className="ni ni-badge mr-3" />Meu Curriculo
                </ListGroupItem>
              </ListGroup>

              <ListGroup>
                <ListGroupItem  to="/formacoes" tag={Link} className="list-group-item-action border-0">
                  <i className="fas fa-graduation-cap mr-3" />Formações
                </ListGroupItem>
              </ListGroup>

              <ListGroup>
                <ListGroupItem  to="/cursos" tag={Link} className="list-group-item-action border-0">
                  <i className="ni ni-books mr-3" />Cursos
                  </ListGroupItem>
              </ListGroup>

              <ListGroup>
                <ListGroupItem  to="/experiencias" tag={Link} className="list-group-item-action border-0">
                  <i className="fas fa-chart-line mr-3" />Experiências
                </ListGroupItem>
              </ListGroup>

              <ListGroup>
                <ListGroupItem  to="/download" tag={Link} className="list-group-item-action border-0">
                  <i className="fas fa-file-pdf mr-3" />Baixar PDF
                </ListGroupItem>
              </ListGroup>
            </Col>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
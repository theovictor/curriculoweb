import React, {useEffect} from 'react';
import { Card, CardBody, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { api_file } from '../../services/api.js';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import curriculoPdf from 'components/curriculoPdf.js';

export default function Sidebar({ children }) {

  const rd_user = useSelector(state => state.userReducer)
  const rd_curriculo = useSelector(state => state.curriculoReducer)

  const gera_pdf = () => {
    console.log('teste')
    curriculoPdf(rd_curriculo.show_curriculo)
  }

  // useEffect(() => {
  //   console.log(rd_user)
  // }, [rd_user])

  return (
    <>
      <Col className="order-xl-1 mb-2 mb-xl-0" xl="3">
        <Card className="card-profile shadow">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                {rd_user.logged?.thumbnail ?
                  <img className="rounded-circle" src={`${api_file}/${rd_user.logged.thumbnail}`} alt="" />
                  :
                  rd_user?.foto ?
                    <img className="rounded-circle" src={`${api_file}/${rd_user.foto}`} alt="" />
                    :
                    <div className="rounded-circle" />
                }
              </div>
            </Col>
          </Row>
          <CardBody className="pt-0">
            <div className="text-center">
              <h3 className="nome mt--6">{rd_user.logged?.nome ? rd_user.logged.nome : rd_user.logged?.user?.nome ? rd_user.logged.user.nome : null}</h3>
              <hr className="my-4" />
              <Col className="text-left">
                <ListGroup>
                  <ListGroupItem to="/dados_iniciais" tag={Link} className="list-group-item-action border-0">
                    <i className="ni ni-badge mr-3" />Meu Curriculo
                  </ListGroupItem>
                </ListGroup>
                <ListGroup>
                  <ListGroupItem to="/formacoes" tag={Link} className="list-group-item-action border-0">
                    <i className="fas fa-graduation-cap mr-3" />Formações
                  </ListGroupItem>
                </ListGroup>
                <ListGroup>
                  <ListGroupItem to="/cursos" tag={Link} className="list-group-item-action border-0">
                    <i className="ni ni-books mr-3" />Cursos
                  </ListGroupItem>
                </ListGroup>
                <ListGroup>
                  <ListGroupItem to="/experiencias" tag={Link} className="list-group-item-action border-0">
                    <i className="fas fa-chart-line mr-3" />Experiências
                  </ListGroupItem>
                </ListGroup>
                <ListGroup>
                  <ListGroupItem onClick={gera_pdf}
                  to="#"
                  tag={Link}
                  className="list-group-item-action border-0">
                    <i className="fas fa-file-pdf mr-3" />Baixar PDF
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </div>
          </CardBody>
        </Card>
      </Col>
      {/* <curriculoPdf/> */}
    </>
  );
}
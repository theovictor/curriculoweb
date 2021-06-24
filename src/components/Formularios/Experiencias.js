import React from "react";
import { Card, Container, Row, Col, Button, CardHeader } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { api_experiencia } from '../../services/api.js';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import curriculoActions from '../../store/actions/curriculoActions'
import ModalExperiencia from 'components/Modal/ModalExperiencia.js';
import axios from 'axios';

export default function Experiencias(){
  const dispatch = useDispatch()
  const dados_formacao = useSelector(state => state.curriculoReducer)
  const rd_user = useSelector(state => state.userReducer)

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  }

  const btnNovo = () => {
    dispatch(curriculoActions.modal_experiencia(true))
  }

  const att_tabela = () => {
    dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
  }

  const btnDeletar = (rowId) => {
    axios.delete(`${api_experiencia}/delete/${rowId}`, {headers})
    .then(res => {
    att_tabela() 
    }).catch(err => { })
  }

  return (
    <>
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Experiências</h3>
          </Col>
        </Row>
      </CardHeader>
      <Container fluid>
        <Row>
          <Card className="tabelinha">
            <ToolkitProvider
              data={dados_formacao.show_curriculo?.experiencias ? dados_formacao.show_curriculo.experiencias : []}
              keyField="_id"
              columns={[
                {
                  dataField: 'nome',
                  text: 'Nome',
                  sort: true,
                },
                {
                  dataField: 'local',
                  text: 'Local',
                  sort: true,
                },
                {
                  dataField: 'atividades',
                  text: 'Atividade',
                  sort: true,
                },
                {
                  dataField: 'dataInicio',
                  text: 'Data de Início',
                  sort: true,
                },
                {
                  dataField: 'dataTermino',
                  text: 'Data de Término',
                  sort: true,
                },
                {
                  dataField: "_id",
                  text: "Excluir",
                  formatter: (cellContent, row) => {
                    return (
                      <div className="btnAcoes">
                        <Button className="btn-icon" color="danger" onClick={() => btnDeletar(row._id)}>
                          <span className="btn-inner--icon">
                            <i className="fa fa-trash-o" />
                          </span>
                        </Button>
                      </div>
                    )
                  }
                }
              ]}
            >
              {(props) => (<>
                <div className="table-responsive pt-3">
                  <Button className="mb-3 ml-3" color="primary" type="button" onClick={btnNovo}>
                    <span className="btn-inner--icon">
                      <i className="fa fa-plus-circle ml--2" />
                    </span>
                    <span className="btn-inner--text ml-2">Nova Experiência</span>
                  </Button>
                  <BootstrapTable
                    {...props.baseProps}
                    bootstrap4={true}
                    bordered={false}
                  />
                </div>
                <ModalExperiencia />
              </>
              )}
            </ToolkitProvider>
          </Card>
        </Row>
      </Container>
    </>
  );
}
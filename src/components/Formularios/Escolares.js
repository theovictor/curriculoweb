import React from "react";
import { Card, Container, Row, Col, Button, CardHeader } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { api_formacao } from '../../services/api.js';
import curriculoActions from '../../store/actions/curriculoActions'
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ModalEscola from 'components/Modal/ModalEscola.js';
import axios from 'axios';

export default function Escolares() {
  const dados_formacao = useSelector(state => state.curriculoReducer)
  const rd_user = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  }

  function btnNovo() {
    dispatch(curriculoActions.modal_escola(true))
  }

  const att_tabela = () => {
    dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
  }


  const btnDeletar = (rowId) => {
    axios.delete(`${api_formacao}/delete/${rowId}`, { headers })
      .then(res => {
        att_tabela()
      }).catch(err => {})
  }

  return (
    <>
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Formações</h3>
          </Col>
        </Row>
      </CardHeader>
      <Container fluid>
        <Row>
          <Card className="tabelinha">
            <ToolkitProvider
              data={dados_formacao.show_curriculo?.formacoes ? dados_formacao.show_curriculo.formacoes : []}
              keyField="_id"
              columns={[
                {
                  dataField: "instituicao",
                  text: "Escola/Universidade",
                  sort: true,
                },
                {
                  dataField: "curso",
                  text: "Curso",
                  sort: true,
                },
                {
                  dataField: "dataInicio",
                  text: "Início",
                  sort: true,
                },
                {
                  dataField: "dataTermino",
                  text: "Término",
                  sort: true,
                },
                {
                  dataField: "periodo",
                  text: "Período",
                  sort: true,
                },
                {
                  dataField: "turno",
                  text: "Turno",
                  sort: true,
                },
                {
                  dataField: "status",
                  text: "Status",
                  sort: true,
                },
                {
                  dataField: "_id",
                  text: "Excluir",
                  formatter: (cellContent, row) => {
                    return (
                      <div className="btnAcoes">
                        <Button className="btn-icon bg-gradient-danger border-0" onClick={() => btnDeletar(row._id)}>
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
                  <Button className="mb-3 ml-3 bg-gradient-primary border-0 text-white" onClick={btnNovo}>
                    <span className="btn-inner--icon">
                      <i className="fa fa-plus-circle ml--2"></i>
                    </span>
                    <span className="btn-inner--text ml-2">Nova Formação</span>
                  </Button>
                  <BootstrapTable
                    {...props.baseProps}
                    bootstrap4={true}
                    bordered={false}
                  />
                </div>
                <ModalEscola />
              </>
              )}
            </ToolkitProvider>
          </Card>
        </Row>
      </Container>
    </>
  );
}
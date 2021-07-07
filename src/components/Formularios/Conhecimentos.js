import React from "react";
import { Card, Container, Row, Col, Button, Label, CardHeader } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { api_conhecimento } from '../../services/api.js';
import axios from 'axios';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import curriculoActions from '../../store/actions/curriculoActions'
import ModalConhecimentos from 'components/Modal/ModalConhecimento.js';

export default function Conhecimentos() {

  const dispatch = useDispatch()
  const rd_curriculo = useSelector(state => state.curriculoReducer)
  const rd_user = useSelector(state => state.userReducer)

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  }

  const btnNovo = () => {
    dispatch(curriculoActions.modal_conhecimento(true))
  }

  const att_tabela = () => {
    dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
  }

  const btnDeletar = (rowId) => {
    axios.delete(`${api_conhecimento}/delete/${rowId}`, { headers })
      .then(res => {
        att_tabela()
      }).catch(err => { })
  }

  return (
    <>
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Cursos</h3>
          </Col>
        </Row>
      </CardHeader>
      <Container fluid>
        <Row>
          <Card className="tabelinha">
            <ToolkitProvider
              data={rd_curriculo.show_curriculo?.conhecimento ? rd_curriculo.show_curriculo.conhecimento : []}
              keyField="_id"
              columns={[
                {
                  dataField: 'nome',
                  text: 'Conhecimentos',
                  sort: true,
                },
                {
                  dataField: 'nivel',
                  text: 'Nível',
                  sort: true,
                },
                {
                  dataField: "_id",
                  text: "Excluir",
                  formatter: (cellContent, row) => {
                    return (
                      <div className="btnAcoes">
                        <Button className="btn-icon bg-gradient-danger border-0" color="danger" onClick={() => btnDeletar(row._id)}>
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
                      <i className="fa fa-plus-circle ml--2" />
                    </span>
                    <span className="btn-inner--text ml-2">Novo Conhecimento</span>
                  </Button>
                  <BootstrapTable
                    {...props.baseProps}
                    bootstrap4={true}
                    bordered={false}
                  />
                </div>
                <ModalConhecimentos />
              </>
              )}
            </ToolkitProvider>
          </Card>
        </Row>
        <hr className="line-primary"></hr>
        <Row>
          <Col>
            <Card className="border p-2 mb-1 shadow" style={{minHeight: '20vh'}}>
              <Label className="form-control-label text-center p-1" htmlFor="cursoAdicional">CURSOS COMPLEMENTARES</Label>
              <div>
                {rd_curriculo.show_curriculo?.conhecimento? rd_curriculo.show_curriculo.conhecimento.map((item, idx) => {
                  if(item.cursoAdicional != ""){
                    return(
                      <ul key={idx}>
                        <li>{item.cursoAdicional}</li>
                      </ul>
                    )
                  }
                }) : null}
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="border p-2 mb-1 shadow" style={{minHeight: '20vh'}}>
              <Label className="form-control-label text-center p-1" htmlFor="cursoAdicional">DOCUMENTOS ADICIONAIS</Label>
              <div >
                {rd_curriculo.show_curriculo?.conhecimento ? rd_curriculo.show_curriculo.conhecimento.map((item, idx) => {
                  if(item.docAdicional != ""){
                    return(
                      <ul key={idx}>
                        <li>{item.docAdicional}</li>
                      </ul>
                    )
                  }
                }) : null}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
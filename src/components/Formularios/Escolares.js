import React, {useEffect, useState} from "react";
import { Card, Container, Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { api_formacao } from '../../services/api.js';
import curriculoActions from '../../store/actions/curriculoActions'

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ModalEscola from 'components/Modal/ModalEscola.js';
// import curriculoReducer from "store/reducers/curriculoReducer.js";

export default function Escolares(){
  const dados_formacao = useSelector(state => state.curriculoReducer)
  const dispatch = useDispatch()
  // const [ dataRow , setDataRow] = useState()

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  }

  function btnNovo() {
    dispatch(curriculoActions.modal_escola(true))
  }

  const att_tabela = () => {
    const userID = sessionStorage.getItem('user_id')
    dispatch(curriculoActions.busca_curriculo(userID))
  }

  const btnDeletar = (rowId) => {
    axios.delete(`${api_formacao}/delete/${rowId}`, {headers})
    .then(res => {
    att_tabela() 
      console.log('formação apagada com sucesso')
    }).catch(err => {
      console.log(err + 'falha ao apagar formação')
    })
  }

  // const btnEditar = () => {
  //   dispatch(curriculoActions.modal_escola(true))
  //   dispatch(curriculoActions.edit_mode(true))
  // }

  // captura o evento do click na linha
  // useEffect(() => {
  //   dispatch(curriculoActions.show_formacao(dataRow))
  //   console.log(dataRow)
  // }, [dataRow])

  return (
    <>
      <Container fluid>
        <Row>
            <Card className="tabelinha">
              <ToolkitProvider
                data={dados_formacao.show_curriculo.formacoes && dados_formacao.show_curriculo.formacoes}
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
                      return(
                        <div className="btnAcoes">
                          <Button className="btn-icon" color="danger" onClick={() => btnDeletar(row._id)}>
                            <span className="btn-inner--icon">
                              <i className="fa fa-trash-o"/>
                            </span>
                          </Button>
                        </div>
                      )
                    }
                  }
                ]}
              >
                {(props) => (<>
                  {/* //Renderização da Tabela */}
                  <div className="table-responsive pt-3">
                  <Button className="mb-3" color="primary" type="button" onClick={btnNovo}>
                    <span className="btn-inner--icon">
                      <i className="fa fa-plus-circle ml--2"></i>
                    </span>
                    <span className="btn-inner--text ml-2">Novo Formação</span>
                  </Button>
                  {/* {console.log(props.baseProps.data)} */}
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      bordered={false}
                      // rowEvents={{onClick: (e, row, idx) => {
                      //   setDataRow(row._id)
                      // }}}
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
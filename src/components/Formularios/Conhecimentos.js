import React, {useEffect, useState} from "react";
import { Card, Container, Row, Col, Button, Form, Input, Label } from 'reactstrap';
import {useFormik} from 'formik';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { api_conhecimento } from '../../services/api.js';
import curriculoActions from '../../store/actions/curriculoActions'

import ModalConhecimentos from 'components/Modal/ModalConhecimento.js';

export default function Conhecimentos(){

  const dispatch = useDispatch()
  const curriculoReducer = useSelector(state => state.curriculoReducer)
  // const [ dataRow , setDataRow] = useState()

  // variaveis do formulario
  const formik = useFormik ({
    initialValues: {
      cursoAdicional: '',
      docAdicional: '',
    }
  })

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  }

  const btnNovo = () => {
    dispatch(curriculoActions.modal_conhecimento(true))
  }

  const att_tabela = () => {
    const userID = sessionStorage.getItem('user_id')
    dispatch(curriculoActions.busca_curriculo(userID))
  }

  const btnDeletar = (rowId) => {
    axios.delete(`${api_conhecimento}/delete/${rowId}`, {headers})
    .then(res => {
    att_tabela() 
      console.log('formação apagada com sucesso')
    }).catch(err => {
      console.log(err + 'falha ao apagar formação')
    })
  }

  const envia_cursos_E_docs = () => {
    axios.post(`${api_conhecimento}/create`, {
      cursoAdicional: formik.values.cursoAdicional,
      docAdicional: formik.values.docAdicional,
    }, { headers })
      .then(res => {
        // att_tabela()
        console.log('enviado com sucesso')
      }).catch(err => {
        console.log(err)
      })
  };

  return (
    <>
      <Container fluid>
        <Row> {/* Render da Tabela Conhecimentos*/}
          <Card className="tabelinha">
            <ToolkitProvider
              data={curriculoReducer.show_curriculo.conhecimento && curriculoReducer.show_curriculo.conhecimento}
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
                <div className="table-responsive pt-3">
                  <Button className="mb-3" color="primary" onClick={btnNovo}>
                    <span className="btn-inner--icon">
                      <i className="fa fa-plus-circle ml--2"/>
                    </span>
                    <span className="btn-inner--text ml-2">Adicionar Conhecimento</span>
                  </Button>
                  <BootstrapTable
                    {...props.baseProps}
                    bootstrap4={true}
                    bordered={false}
                    // rowEvents={{onClick: (e, row, idx) => {
                    //   setDataRow(row)
                    // }}}
                  />
                </div>
                <ModalConhecimentos/>
                </>
              )}
            </ToolkitProvider>
          </Card>
        </Row>
        <hr className="line-primary"></hr>
      {curriculoReducer.show_curriculo?.conhecimento? curriculoReducer.show_curriculo.conhecimento.map((item, idx)=>(
        <Form key={idx}>{/* Render Cursos Complementares e Documentos Adicionais*/}
          {/* key={idx}, */}
          {/* formik.setFieldValue('cursoAdicional', item.cursoAdicional),
          formik.setFieldValue('docAdicional', item.docAdicional) */}
          <Row>
            <Label className="form-control-label" htmlFor="cursoAdicional">CURSOS COMPLEMENTARES.</Label>
            <Input className="form-control-alternative" id="cursoAdicional" placeholder="Insira aqui os cursos que você possui." rows="3" type="textarea" disabled
              // {...formik.setFieldValue('cursoAdicional', item.cursoAdicional)}
              value={item.cursoAdicional}
              ></Input>
          </Row>
          <hr className="line-primary"></hr>
          <Row className="mb-3">
            <Label className="form-control-label" htmlFor="docAdicional">DOCUMENTOS ADICIONAIS.</Label>
            <Input className="form-control-alternative" id="docAdicional" placeholder="Insira aqui os documentos que você possui." rows="3" type="textarea" disabled
              value={item.docAdicional}
              />
          </Row>
            <Button className="btn-icon float-right mb-2" color="success" onClick={envia_cursos_E_docs}>
              <span className="btn-inner--icon">
                <i className="ni ni-check-bold ml--2"/>
              </span>
              <span className="btn-inner--text ml-2">Salvar</span>
            </Button>
        </Form>
      )): null}
      </Container>
    </>
  );
}
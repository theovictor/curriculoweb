import React, {useEffect, useState} from "react";
import { Card, Container, Row, Col, Button, Form, Input, Label } from 'reactstrap';
import {useFormik} from 'formik';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { useSelector, useDispatch } from 'react-redux'
import curriculoActions from '../../store/actions/curriculoActions'

import ModalConhecimentos from 'components/Modal/ModalConhecimento.js';

export default function Conhecimentos(){

  const dispatch = useDispatch()
  const dados_formacao = useSelector(state => state.curriculoReducer)
  const [ dataRow , setDataRow] = useState()

  // variaveis do formulario
  const formik = useFormik ({
    initialValues: {
      cursoComplementar: '',
      docsAdicionais: '',
    }
  })

  const btnNovo = () => {
    dispatch(curriculoActions.modal_conhecimento(true))
  }

  // constante que adiciona os buttons de acoes na linha.
  const addBotoesAcoes = () => {
    return(
      <div className="btnAcoes">
        <Button className="btn-icon" color="danger" onClick={btnDeletar}>
          <span className="btn-inner--icon">
            <i className="fa fa-trash-o"/>
          </span>
        </Button>
      </div>
    )
  }

  // função para deletar o campo.
  const btnDeletar = () => {
    alert('deletar campo')
  }

  useEffect(() => {
    // console.log(dataRow)
    dispatch(curriculoActions.show_conhecimento(dataRow))
  }, [dataRow])

  return (
    <>
      <Container fluid>
        <Row> {/* Render da Tabela Conhecimentos*/}
          <Card className="tabelinha">
            <ToolkitProvider
              data={dados_formacao.show_curriculo.conhecimento && dados_formacao.show_curriculo.conhecimento}
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
                  dataField: 'ações',
                  text: 'Ações',
                  formatter: addBotoesAcoes,
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
                    rowEvents={{onClick: (e, row, idx) => {
                      setDataRow(row)
                    }}}
                  />
                </div>
                <ModalConhecimentos/>
                </>
              )}
            </ToolkitProvider>
          </Card>
        </Row>
        <hr className="line-primary"></hr>
        <Form onSubmit={formik.handleSubmit}>{/* Render Cursos Complementares e Documentos Adicionais*/}
          <Row>
            <Label className="form-control-label" htmlFor="cursoComplementar">CURSOS COMPLEMENTARES.</Label>
            <Input className="form-control-alternative" id="cursoComplementar" placeholder="Insira aqui os cursos que você possui." rows="3" type="textarea"
              {...formik.getFieldProps('cursoComplementar')}/>
          </Row>
          <hr className="line-primary"></hr>
          <Row className="mb-3">
            <Label className="form-control-label" htmlFor="docsAdicionais">DOCUMENTOS ADICIONAIS.</Label>
            <Input className="form-control-alternative" id="docsAdicionais" placeholder="Insira aqui os documentos que você possui." rows="3" type="textarea"
              {...formik.getFieldProps('docsAdicionais')}/>
          </Row>
            <Button className="btn-icon float-right mb-2" color="success" onClick={() => {}}>
              <span className="btn-inner--icon">
                <i className="ni ni-check-bold ml--2"/>
              </span>
              <span className="btn-inner--text ml-2">Salvar</span>
            </Button>
        </Form>
      </Container>
    </>
  );
}
import React, {useState, useEffect} from 'react';
import { Button, Modal, Input, Form, Row, Col, FormGroup, FormFeedback, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { api_conhecimento } from '../../services/api.js';
import curriculoActions from '../../store/actions/curriculoActions'

export default function ModalConhecimento() {
  const curriculoReducer = useSelector(state => state.curriculoReducer)
  const dispatch = useDispatch()

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  }

  // variaveis do formulario.
  const formik = useFormik({
    initialValues: {
      nome: '',
      nivel: '',
      cursoAdicional: '',
      docAdicional: '',
    },
    //validação dos campos do formulario.
    // validationSchema: yup.object({
    //   conhecimento: yup.string().('O campo Conhecimento é obrigatório.'),
    //   nivel: yup.string().('O campo Nível é obrigatório.'),
    // }),
  });
  
  const limpar = () => {
    formik.values.conhecimento = '';
    formik.values.nivel = '';
    formik.values.cursoAdicional = '';
    formik.values.docAdicional = '';
  }

  const att_tabela = () => {
    const userID = sessionStorage.getItem('user_id')
    dispatch(curriculoActions.busca_curriculo(userID))
  }

  const envia_conhecimento = () => {
    axios.post(`${api_conhecimento}/create`, {
      nome: formik.values.nome,
      nivel: formik.values.nivel,
      cursoAdicional: formik.values.cursoAdicional,
      docAdicional: formik.values.docAdicional,
    }, { headers })
      .then(res => {
        att_tabela()
        console.log('enviado com sucesso')
      }).catch(err => {
        console.log(err)
      })
  };

  const btn_fechar = () => {
    limpar()
    dispatch(curriculoActions.modal_conhecimento(false))
  }

  return (
    <>
      <Modal className="modal-lg" isOpen={curriculoReducer.modal_conhecimento} toggle={btn_fechar} modalClassName="bd-example-modal-lg">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalScrollableTitle">
            Seus Conhecimentos
          </h5>
          <button aria-label="Close" className="close" type="button" onClick={btn_fechar}>
            <span aria-hidden={true}>
              <i className="ni ni-fat-remove"/>
            </span>
          </button>
        </div>
        <div className="modal-body bg-secondary">
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <FormGroup className="mb-3">
                  <Label className="form-control-label" htmlFor="conhecimento">Conhecimentos Gerais</Label>
                    <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-world"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input className="form-control-alternative" id="nome" placeholder="Conhecimentos Gerais" type="text"
                          // invalid={formik.touched.nome && formik.errors.nome ? true : false}
                          {...formik.getFieldProps('nome')}/>
                        {/* <FormFeedback>{formik.touched.nome && formik.errors.nome ? formik.errors.nome : null}</FormFeedback> */}
                    </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup className="mb-3">
                  <Label className="form-control-label" htmlFor="nivel">Nível</Label>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-chart-bar-32"/>
                        </InputGroupText>
                      </InputGroupAddon>
                        <Input className="form-control-alternative" id="nivel" type="select"
                          // invalid={formik.touched.nivel && formik.errors.nivel ? true : false}
                          {...formik.getFieldProps('nivel')}>
                          <option value={null}>Nível</option>
                          <option value="Básico">Básico</option>
                          <option value="Intermediário">Intermediário</option>
                          <option value="Avançado">Avançado</option>
                          </Input>
                        {/* <FormFeedback>{formik.touched.nivel && formik.errors.nivel ? formik.errors.nivel : null}</FormFeedback> */}
                    </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <hr className="line-primary"></hr>
            <Row>
              <Col>
                <Label className="form-control-label" htmlFor="cursoAdicional">CURSOS COMPLEMENTARES.</Label>
                <Input className="form-control-alternative" id="cursoAdicional" placeholder="Insira aqui os cursos que você possui." rows="3" type="textarea"
                  {...formik.getFieldProps('cursoAdicional')}/>
              </Col>
            </Row>
            <hr className="line-primary"></hr>
            <Row className="mb-3">
              <Col>
                <Label className="form-control-label" htmlFor="docAdicional">DOCUMENTOS ADICIONAIS.</Label>
                <Input className="form-control-alternative" id="docAdicional" placeholder="Insira aqui os documentos que você possui." rows="3" type="textarea"
                  {...formik.getFieldProps('docAdicional')}/>
              </Col>
            </Row>
            <Button className="btn-icon float-right mt-2" color="success" onClick={() => {envia_conhecimento(); btn_fechar()}}>
              <span className="btn-inner--icon">
                <i className="ni ni-check-bold ml--2"/>
              </span>
              <span className="btn-inner--text ml-2">Salvar</span>
            </Button>
            <Button className="btn-icon float-right mr-3 mt-2" color="danger" onClick={btn_fechar}>
              <span className="btn-inner--icon">
                <i className="fa fa-times ml--2"/>
              </span>
              <span className="btn-inner--text ml-2">Cancelar</span>
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
}
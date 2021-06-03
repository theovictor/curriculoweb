import React, {useState} from 'react';
import { Button, Modal, Input, Form, Row, Col, FormGroup, FormFeedback, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { api_experiencia } from '../../services/api.js';
import curriculoActions from '../../store/actions/curriculoActions'

export default function ModalExperiencia() {
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
      local: '',
      atividades: '',
      dataInicio: '',
      dataTermino: '',
    },
    //validação dos campos do formulario.
    validationSchema: yup.object({
      nome: yup.string().required('O campo Nome é obrigatório.'),
      atividade: yup.string().required('O campo Atividade é obrigatório.'),
      dataInicio: yup.string().required('O campo Data de Início é obrigatório.'),
      dataTermino: yup.string().required('O campo Data de Término é obrigatório.'),
    }),
  });

  const limpar = () => {
    formik.values.nome = '';
    formik.values.local = '';
    formik.values.atividades = '';
    formik.values.dataInicio = '';
    formik.values.dataTermino = '';
  }

  const btn_fechar = () => {
    limpar()
    dispatch(curriculoActions.modal_experiencia(false))
  }

  const att_tabela = () => {
    const userID = sessionStorage.getItem('user_id')
    dispatch(curriculoActions.busca_curriculo(userID))
  }

  const envia_experiencia = () => {
    axios.post(`${api_experiencia}/create`, {
      nome: formik.values.nome,
      local: formik.values.local,
      atividades: formik.values.atividades,
      dataInicio: formik.values.dataInicio,
      dataTermino: formik.values.dataTermino,
    }, { headers })
      .then(res => {
        att_tabela()
        console.log('enviado com sucesso')
      }).catch(err => {
        console.log(err)
      })
  };

  return (
    <>
      <Modal className="modal-lg" isOpen={curriculoReducer.modal_experiencia} toggle={btn_fechar} modalClassName="bd-example-modal-lg">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalScrollableTitle">
            Adicionar Experiências
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
                  <Label className="form-control-label required" htmlFor="nome">Nome</Label>
                    <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-badge"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input className="form-control-alternative" id="nome" placeholder="Digite aqui o nome da sua experiência - ex: Repositor" type="text"
                          invalid={formik.touched.nome && formik.errors.nome ? true : false}
                          {...formik.getFieldProps('nome')}/>
                        <FormFeedback>{formik.touched.nome && formik.errors.nome ? formik.errors.nome : null}</FormFeedback>
                    </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <Label className="form-control-label" htmlFor="local">Local</Label>
                    <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-pin-3"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input className="form-control-alternative" id="local" placeholder="Local da sua experiência" type="text"
                          {...formik.getFieldProps('local')}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <Label className="form-control-label required" htmlFor="atividade">Atividade</Label>
                  <Input className="form-control-alternative" id="atividades" placeholder="Digite aqui as atividades" type="textarea" rows="3"
                    invalid={formik.touched.atividades && formik.errors.atividades ? true : false}
                    {...formik.getFieldProps('atividades')}/>
                  <FormFeedback>{formik.touched.atividades && formik.errors.atividades ? formik.errors.atividades : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="dataInicio">Data de Início</Label>
                  <Input className="form-control-alternative" id="dataInicio" type="date"
                    invalid={formik.touched.dataInicio && formik.errors.dataInicio ? true : false}
                    {...formik.getFieldProps('dataInicio')}
                  />
                  <FormFeedback>{formik.touched.dataInicio && formik.errors.dataInicio ? formik.errors.dataInicio : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="dataTermino">Date de Término</Label>
                  <Input className="form-control-alternative" id="dataTermino" type="date"
                    invalid={formik.touched.dataTermino && formik.errors.dataTermino ? true : false}
                    {...formik.getFieldProps('dataTermino')}
                  />
                  <FormFeedback>{formik.touched.dataTermino && formik.errors.dataTermino ? formik.errors.dataTermino : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn-icon float-right mt-2" color="success" type="submit" onClick={() => {envia_experiencia(); btn_fechar()}}>
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
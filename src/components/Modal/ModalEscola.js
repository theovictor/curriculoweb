import React, {useState} from 'react';
import { Button, Modal, Input, Form, Row, Col, FormGroup, FormFeedback, Label, Container, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { api_formacao } from '../../services/api.js';
import curriculoActions from '../../store/actions/curriculoActions'

export default function ModalEscola() {
  const curriculoReducer = useSelector(state => state.curriculoReducer) 
  const rd_user = useSelector(state => state.userReducer) 
  const [escola, setEscola] = useState(false)
  const [universidade, setUniversidade] = useState(false)
  const dispatch = useDispatch()

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  }
  const formik = useFormik({
    initialValues: {
      instituicao: '',
      curso: '',
      dataInicio: '',
      dataTermino: '',
      periodo: '',
      turno: '',
      status: '',
    },
    validationSchema: yup.object({
      instituicao: yup.string().required('O campo Escola/Universidade é obrigatório.'),
      curso: yup.string().required('O campo Curso é obrigatório.'),
      // dataInicio: yup.string().required('O campo Início é obrigatório.'),
      // dataTermino: yup.string().required('O campo Término é obrigatório.'),
      // periodo: yup.string().required('O campo Período é obrigatório.'),
      // turno: yup.string().required('O campo Turno é obrigatório.'),
      // status: yup.string().required('O campo Status é obrigatório.'),
    }),
  });
  const limpar = () => {
    formik.values.instituicao = '';
    formik.values.curso = '';
    formik.values.dataInicio = '';
    formik.values.dataTermino = '';
    formik.values.periodo = '';
    formik.values.turno = '';
    formik.values.status = '';
  }
  const btn_fechar = () => {
    limpar()
    dispatch(curriculoActions.modal_escola(false))
  }

  const att_tabela = () => {
    dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
  }

  const envia_formacao = () => {
    axios.post(`${api_formacao}/create`, {
      instituicao: formik.values.instituicao,
      curso: formik.values.curso,
      dataInicio: formik.values.dataInicio,
      dataTermino: formik.values.dataTermino,
      periodo: formik.values.periodo,
      turno: formik.values.turno,
      status: formik.values.status,
    }, { headers })
      .then(res => {
        att_tabela()
        // console.log('enviado com sucesso')
      }).catch(err => {
        // console.log(err)
      })
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Modal className="modal-lg" isOpen={curriculoReducer.modal_escola} toggle={btn_fechar} modalClassName="bd-example-modal-lg">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle">
                  Adicionar Curso
                </h5>
                <button aria-label="Close" className="close" type="button" onClick={()=>{btn_fechar(); setUniversidade(false); setEscola(false)}}>
                  <span aria-hidden={true}>
                    <i className="ni ni-fat-remove"/>
                  </span>
                </button>
              </div>
              <div className="modal-body bg-secondary">
                <h5 className="text-center">Escolha a Instituição</h5>
                <Row className="m-0 justify-content-center mt-3">
                  <Button className="mr-4 bg-gradient-teal text-white" onClick={()=> {setEscola(true); setUniversidade(false)}}>Escola</Button>
                  <Button className="bg-gradient-success text-indigo" onClick={()=> {setUniversidade(true); setEscola(false)}}>Universidade</Button>
                </Row>
                {escola ? 
                  <>
                    <Form>
                      <Row className="m-0">
                        <FormGroup>
                          <Label className="form-control-label required" htmlFor="instituicao">Escola</Label>
                          <Input className="form-control-alternative" id="instituicao" placeholder="Nome da Escola" type="text"
                            invalid={formik.touched.instituicao && formik.errors.instituicao ? true : false}
                            {...formik.getFieldProps('instituicao')}/>
                          <FormFeedback>{formik.touched.instituicao && formik.errors.instituicao ? formik.errors.instituicao : null}</FormFeedback>
                        </FormGroup>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label className="form-control-label required" htmlFor="curso">Ensino</Label>
                            <Input className="form-control-alternative" id="curso" type="select"
                              invalid={formik.touched.status && formik.errors.status ? true : false}
                              {...formik.getFieldProps('curso')}>
                              <option value={null}>Selecion seu ensino</option>
                              <option value="Fundamental">Fundamental</option>
                              <option value="Médio">Médio</option>
                            </Input>
                            <FormFeedback>{formik.touched.curso && formik.errors.curso ? formik.errors.curso : null}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label className="form-control-label required" htmlFor="status">Status</Label>
                            <Input className="form-control-alternative" id="status" type="select"
                              invalid={formik.touched.status && formik.errors.status ? true : false}
                              {...formik.getFieldProps('status')}>
                              <option value={null}>Status</option>
                              <option value="Concluído">Concluído</option>
                              <option value="Cursando">Cursando</option>
                              <option value="Incompleto">Incompleto</option>
                            </Input>
                            <FormFeedback>{formik.touched.status && formik.errors.status ? formik.errors.status : null}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button className="btn-icon float-right mt-2" color="success" onClick={() => {envia_formacao(); btn_fechar(); setUniversidade(false); setEscola(false)}}>
                        <span className="btn-inner--icon">
                          <i className="ni ni-check-bold ml--2"/>
                        </span>
                        <span className="btn-inner--text ml-2">Salvar</span>
                      </Button>
                      <Button className="btn-icon float-right mr-3 mt-2" color="danger" onClick={() => {btn_fechar(); setUniversidade(false); setEscola(false)}}>
                        <span className="btn-inner--icon">
                          <i className="fa fa-times ml--2"/>
                        </span>
                        <span className="btn-inner--text ml-2">Cancelar</span>
                      </Button>
                    </Form>
                  </>
                : universidade ?
                  <>
                    <Form>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label className="form-control-label required" htmlFor="instituicao">Universidade</Label>
                            <Input className="form-control-alternative" id="instituicao" placeholder="Nome da Universidade" type="text"
                              invalid={formik.touched.instituicao && formik.errors.instituicao ? true : false}
                              {...formik.getFieldProps('instituicao')}/>
                            <FormFeedback>{formik.touched.instituicao && formik.errors.instituicao ? formik.errors.instituicao : null}</FormFeedback>
                          </FormGroup>
                          <FormGroup>
                            <Label className="form-control-label required" htmlFor="curso">Curso</Label>
                            <Input className="form-control-alternative" id="curso" placeholder="Curso" type="text"
                              invalid={formik.touched.curso && formik.errors.curso ? true : false}
                              {...formik.getFieldProps('curso')}/>
                            <FormFeedback>{formik.touched.curso && formik.errors.curso ? formik.errors.curso : null}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <FormGroup>
                          <Label className="form-control-label" htmlFor="dataInicio">Ano Início</Label>
                          <InputGroup className="input-group-alternative">
                            <Input className="form-control-alternative" id="dataInicio" type="text" placeholder="Ano de início"
                            // invalid={formik.touched.dataInicio && formik.errors.dataInicio ? true : false}
                            {...formik.getFieldProps('dataInicio')}/>
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58"/>
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {/* <FormFeedback>{formik.touched.dataInicio && formik.errors.dataInicio ? formik.errors.dataInicio : null}</FormFeedback> */}
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup>
                          <Label className="form-control-label" htmlFor="dataTermino">Ano Término</Label>
                          <InputGroup className="input-group-alternative">
                            <Input className="form-control-alternative" id="dataTermino" type="text" placeholder="Ano de conclusão"
                              // invalid={formik.touched.dataTermino && formik.errors.dataTermino ? true : false}
                              {...formik.getFieldProps('dataTermino')}/>
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58"/>
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {/* <FormFeedback>{formik.touched.dataTermino && formik.errors.dataTermino ? formik.errors.dataTermino : null}</FormFeedback> */}
                        </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label className="form-control-label" htmlFor="periodo">Período</Label>
                            <Input className="form-control-alternative" id="periodo" type="select"
                              // invalid={formik.touched.periodo && formik.errors.periodo ? true : false}
                              {...formik.getFieldProps('periodo')}>
                              <option value={null}>Selecione o Período</option>
                              <option value="1º">1º Período</option>
                              <option value="2º">2º Período</option>
                              <option value="3º">3º Período</option>
                              <option value="4º">4º Período</option>
                              <option value="5º">5º Período</option>
                              <option value="6º">6º Período</option>
                              <option value="7º">7º Período</option>
                              <option value="8º">8º Período</option>
                              <option value="9º">9º Período</option>
                              <option value="10º">10º Período</option>
                              </Input>
                            {/* <FormFeedback>{formik.touched.periodo && formik.errors.periodo ? formik.errors.periodo : null}</FormFeedback> */}
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label className="form-control-label" htmlFor="turno">Turno</Label>
                            <Input className="form-control-alternative" id="turno" type="select"
                              // invalid={formik.touched.turno && formik.errors.turno ? true : false}
                              {...formik.getFieldProps('turno')}>
                              <option value={null}>Turno</option>
                              <option value="Matutino">Matutino</option>
                              <option value="Vespertino">Vespertino</option>
                              <option value="Noturno">Noturno</option>
                              </Input>
                            {/* <FormFeedback>{formik.touched.turno && formik.errors.turno ? formik.errors.turno : null}</FormFeedback> */}
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label className="form-control-label" htmlFor="status">Status</Label>
                            <Input className="form-control-alternative" id="status" type="select"
                              // invalid={formik.touched.status && formik.errors.status ? true : false}
                              {...formik.getFieldProps('status')}>
                              <option value={null}>Status</option>
                              <option value="Concluído">Concluído</option>
                              <option value="Cursando">Cursando</option>
                              <option value="Trancado">Trancado</option>
                              <option value="Incompleto">Incompleto</option>
                            </Input>
                            {/* <FormFeedback>{formik.touched.status && formik.errors.status ? formik.errors.status : null}</FormFeedback> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button className="btn-icon float-right mt-2" color="success" onClick={() => {envia_formacao(); btn_fechar(); setUniversidade(false); setEscola(false)}}>
                        <span className="btn-inner--icon">
                          <i className="ni ni-check-bold ml--2"/>
                        </span>
                        <span className="btn-inner--text ml-2">Salvar</span>
                      </Button>
                      <Button className="btn-icon float-right mr-3 mt-2" color="danger" onClick={()=> {btn_fechar(); setUniversidade(false); setEscola(false)}}>
                        <span className="btn-inner--icon">
                          <i className="fa fa-times ml--2"/>
                        </span>
                        <span className="btn-inner--text ml-2">Cancelar</span>
                      </Button>
                    </Form>
                  </>
                : null}
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}
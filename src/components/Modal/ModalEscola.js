import React, {useState, useEffect} from 'react';
import { Button, Modal, Input, Form, Row, Col, FormGroup, FormFeedback, Label, Container
  // InputGroup, 
  // InputGroupAddon, 
  // InputGroupText 
} from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import curriculoActions from '../../store/actions/curriculoActions'

export default function ModalEscola() {

  const dispatch = useDispatch()
  //const que gerencia modal open e close.
  const [modalOpen, setModalOpen] = useState(false)
  const curriculoReducer = useSelector(state => state.curriculoReducer) 

  

  
  // variaveis do formulario
  const formik = useFormik({
    initialValues: {
      escola: '',
      curso: '',
      inicio: '',
      termino: '',
      periodo: '',
      turno: '',
      status: '',
    },
    // validação dos campos do formulario.
    validationSchema: yup.object({
      escola: yup.string().required('O campo Escola/Universidade é obrigatório.'),
      curso: yup.string().required('O campo Curso é obrigatório.'),
      inicio: yup.date().required('O campo Início é obrigatório.'),
      termino: yup.string().required('O campo Término é obrigatório.'),
      periodo: yup.string().required('O campo Período é obrigatório.'),
      turno: yup.string().required('O campo Turno é obrigatório.'),
      status: yup.string().required('O campo Status é obrigatório.'),
    }),
  });

  // função limpar campos formulario.
  const limpar = () => {
    formik.values.escola = '';
    formik.values.curso = '';
    formik.values.inicio = '';
    formik.values.termino = '';
    formik.values.periodo = '';
    formik.values.turno = '';
    formik.values.status = '';
  }

  const btn_fechar = () => {
    limpar()
    dispatch(curriculoActions.modal_escola(false))
  }

  // setar as variáveis do formik para edição
 useEffect(() => {
   console.log(curriculoReducer.show_formacao)
   if (curriculoReducer.show_formacao) {
    //  formik.setFieldValue('escola', curriculoReducer.show_formacao.curso)
     formik.setFieldValue('curso', curriculoReducer.show_formacao.curso)
     formik.setFieldValue('inicio', curriculoReducer.show_formacao.dataInicio)
     formik.setFieldValue('termino', curriculoReducer.show_formacao.dataTermino)
     formik.setFieldValue('periodo', curriculoReducer.show_formacao.periodo)
     formik.setFieldValue('turno', curriculoReducer.show_formacao.turno)
     formik.setFieldValue('status', curriculoReducer.show_formacao.status)
   }
 }, [curriculoReducer.show_formacao])

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
                      <FormGroup>
                        <Label className="form-control-label required" htmlFor="escola">Escola/Universidade</Label>
                        <Input className="form-control-alternative" id="escola" placeholder="Nome da Escola/Universidade" type="text"
                          invalid={formik.touched.escola && formik.errors.escola ? true : false}
                          {...formik.getFieldProps('escola')}/>
                        <FormFeedback>{formik.touched.escola && formik.errors.escola ? formik.errors.escola : null}</FormFeedback>
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
                      <Label className="form-control-label required" htmlFor="inicio">Ano Início</Label>
                      <Input className="form-control-alternative" id="inicio" type="date"
                        invalid={formik.touched.inicio && formik.errors.inicio ? true : false}
                        {...formik.getFieldProps('inicio')}/>
                      <FormFeedback>{formik.touched.inicio && formik.errors.inicio ? formik.errors.inicio : null}</FormFeedback>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Label className="form-control-label required" htmlFor="termino">Ano Término</Label>
                      <Input className="form-control-alternative" id="termino" type="date"
                        invalid={formik.touched.termino && formik.errors.termino ? true : false}
                        {...formik.getFieldProps('termino')}/>
                      <FormFeedback>{formik.touched.termino && formik.errors.termino ? formik.errors.termino : null}</FormFeedback>
                    </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label className="form-control-label required" htmlFor="periodo">Período</Label>
                        <Input className="form-control-alternative" id="periodo" type="select"
                          invalid={formik.touched.periodo && formik.errors.periodo ? true : false}
                          {...formik.getFieldProps('periodo')}>
                          <option value={null}>Selecione o Período</option>
                          <option value="1">1º Período</option>
                          <option value="2">2º Período</option>
                          <option value="3">3º Período</option>
                          <option value="4">4º Período</option>
                          <option value="5">5º Período</option>
                          <option value="6">6º Período</option>
                          <option value="7">7º Período</option>
                          <option value="8">8º Período</option>
                          <option value="9">9º Período</option>
                          <option value="10">10º Período</option>
                          </Input>
                        <FormFeedback>{formik.touched.periodo && formik.errors.periodo ? formik.errors.periodo : null}</FormFeedback>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label className="form-control-label required" htmlFor="turno">Turno</Label>
                        <Input className="form-control-alternative" id="turno" type="select"
                          invalid={formik.touched.turno && formik.errors.turno ? true : false}
                          {...formik.getFieldProps('turno')}>
                          <option value={null}>Turno</option>
                          <option value="manha">Manhã</option>
                          <option value="tarde">Tarde</option>
                          <option value="noite">Noite</option>
                          </Input>
                        <FormFeedback>{formik.touched.turno && formik.errors.turno ? formik.errors.turno : null}</FormFeedback>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label className="form-control-label required" htmlFor="status">Status</Label>
                        <Input className="form-control-alternative" id="status" type="select"
                          invalid={formik.touched.status && formik.errors.status ? true : false}
                          {...formik.getFieldProps('status')}>
                          <option value={null}>Status</option>
                          <option value="concluido">Concluído</option>
                          <option value="andamento">Cursando</option>
                          <option value="trancado">Trancado</option>
                          <option value="incompleto">Incompleto</option>
                        </Input>
                        <FormFeedback>{formik.touched.status && formik.errors.status ? formik.errors.status : null}</FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className="btn-icon float-right mt-2" color="success" onClick={() => {}}>
                    <span className="btn-inner--icon">
                      <i className="ni ni-check-bold ml--2"/>
                    </span>
                    <span className="btn-inner--text ml-2">Salvar</span>
                  </Button>
                  <Button className="btn-icon float-right mr-3 mt-2" color="danger" onClick={() => limpar (setModalOpen(!modalOpen))}>
                    <span className="btn-inner--icon">
                      <i className="fa fa-times ml--2"/>
                    </span>
                    <span className="btn-inner--text ml-2">Cancelar</span>
                  </Button>
                </Form>
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}
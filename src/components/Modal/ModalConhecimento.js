import React, {useState, useEffect} from 'react';
import { Button, Modal, Input, Form, Row, Col, FormGroup, FormFeedback, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import curriculoActions from '../../store/actions/curriculoActions'

export default function ModalConhecimento() {
  const [modalOpen, setModalOpen] = useState(false);
  const curriculoReducer = useSelector(state => state.curriculoReducer)
  const dispatch = useDispatch()

  // variaveis do formulario.
  const formik = useFormik({
    initialValues: {
      conhecimento: '',
      nivel: '',
    },
    //validação dos campos do formulario.
    validationSchema: yup.object({
      conhecimento: yup.string().required('O campo Conhecimento é obrigatório.'),
      nivel: yup.string().required('O campo Nível é obrigatório.'),
    }),
  });
  
  const limpar = () => {
    formik.values.conhecimento = '';
    formik.values.nivel = '';
  }
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
                  <Label className="form-control-label required" htmlFor="conhecimento">Conhecimentos Gerais</Label>
                    <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-world"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input className="form-control-alternative" id="conhecimento" placeholder="Conhecimentos Gerais" type="text"
                          invalid={formik.touched.conhecimento && formik.errors.conhecimento ? true : false}
                          {...formik.getFieldProps('conhecimento')}/>
                        <FormFeedback>{formik.touched.conhecimento && formik.errors.conhecimento ? formik.errors.conhecimento : null}</FormFeedback>
                    </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup className="mb-3">
                  <Label className="form-control-label required" htmlFor="nivel">Nível</Label>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-chart-bar-32"/>
                        </InputGroupText>
                      </InputGroupAddon>
                        <Input className="form-control-alternative" id="nivel" type="select"
                          invalid={formik.touched.nivel && formik.errors.nivel ? true : false}
                          {...formik.getFieldProps('nivel')}>
                          <option value={null}>Nível</option>
                          <option value="Básico">Básico</option>
                          <option value="Intermediário">Intermediário</option>
                          <option value="Avançado">Avançado</option>
                          </Input>
                        <FormFeedback>{formik.touched.nivel && formik.errors.nivel ? formik.errors.nivel : null}</FormFeedback>
                    </InputGroup>
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
    </>
  );
}
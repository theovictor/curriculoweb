import React, {useState} from 'react';
import { Button, Modal, Input, Form, Row, Col, FormGroup, FormFeedback, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function ModalEscola() {
  const [modalOpen, setModalOpen] = useState(false);
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
  
  // React.useEffect(() => {
  //   console.log(formik.values)
  // }, [formik.values]);

  return (
    <>
      <Button className="mb-3" color="primary" type="button" onClick={() => setModalOpen(!modalOpen)}>
        <span className="btn-inner--icon">
          <i className="ni ni-fat-add"></i>
        </span>
        <span className="btn-inner--text">Novo</span>
      </Button>
      <Modal className="modal-lg" isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} modalClassName="bd-example-modal-lg">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalScrollableTitle">
            Adicionar Curso
          </h5>
          <button aria-label="Close" className="close" type="button" onClick={() => setModalOpen(!modalOpen)}>
            <span aria-hidden={true}>
              <i className="ni ni-fat-remove"/>
            </span>
          </button>
        </div>
        <div className="modal-body bg-secondary">
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <FormGroup>
                <Label className="form-control-label" htmlFor="escola">Escola/Universidade *</Label>
                <Input className="form-control-alternative" id="escola" placeholder="Nome da Escola/Universidade" type="text"
                  invalid={formik.touched.escola && formik.errors.escola ? true : false}
                  {...formik.getFieldProps('escola')}/>
                <FormFeedback>{formik.touched.escola && formik.errors.escola ? formik.errors.escola : null}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label className="form-control-label" htmlFor="curso">Curso *</Label>
                <Input className="form-control-alternative" id="curso" placeholder="Curso" type="text"
                  invalid={formik.touched.curso && formik.errors.curso ? true : false}
                  {...formik.getFieldProps('curso')}/>
                <FormFeedback>{formik.touched.curso && formik.errors.curso ? formik.errors.curso : null}</FormFeedback>
              </FormGroup>
            </Row>
            <Row>
              <Col>
              <FormGroup>
                <Label className="form-control-label" htmlFor="inicio">Ano Início *</Label>
                <Input className="form-control-alternative" id="inicio" type="date"
                  invalid={formik.touched.inicio && formik.errors.inicio ? true : false}
                  {...formik.getFieldProps('inicio')}/>
                <FormFeedback>{formik.touched.inicio && formik.errors.inicio ? formik.errors.inicio : null}</FormFeedback>
              </FormGroup>
              </Col>
              <Col>
              <FormGroup>
                <Label className="form-control-label" htmlFor="termino">Término *</Label>
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
                  <Label className="form-control-label" htmlFor="turno">Turno *</Label>
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
                  <Label className="form-control-label" htmlFor="status">Status *</Label>
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
            <Button color="secondary" type="button" onClick={() => setModalOpen(!modalOpen)}>
              Cancelar
            </Button>
            <Button color="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
}
import React, {useState} from 'react';
import { Button, Modal, Input, Form, Row, Col, FormGroup, FormFeedback, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function ModalExperiencia() {
  //constante que gerencia a modal open e close.
  const [modalOpen, setModalOpen] = useState(false);
  // função para limpar os campos
  function Limpar() {
    formik.values.nome = '';
    formik.values.local = '';
    formik.values.atividade = '';
    formik.values.dataInicio = '';
    formik.values.dataTermino = '';
  }
  // variaveis do formulario.
  const formik = useFormik({
    initialValues: {
      nome: '',
      local: '',
      atividade: '',
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
  // React.useEffect(() => {
  //   console.log(formik.values)
  // }, [formik.values])
  return (
    <>
      <Button className="mb-3" color="primary" type="button" onClick={() => setModalOpen(!modalOpen)}>
        <span className="btn-inner--icon">
          <i className="fa fa-plus-circle ml--2"/>
        </span>
        <span className="btn-inner--text ml-2">Nova Expe.</span>
      </Button>
      <Modal className="modal-lg" isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} modalClassName="bd-example-modal-lg">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalScrollableTitle">
            Adicionar Experiências
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
                  <Input className="form-control-alternative" id="atividade" placeholder="Digite aqui as atividades" type="textarea" rows="3"
                    invalid={formik.touched.atividade && formik.errors.atividade ? true : false}
                    {...formik.getFieldProps('atividade')}/>
                  <FormFeedback>{formik.touched.atividade && formik.errors.atividade ? formik.errors.atividade : null}</FormFeedback>
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
            <Button className="btn-icon float-right mt-2" color="success" type="submit" onClick={() => {}}>
              <span className="btn-inner--icon">
                <i className="ni ni-check-bold ml--2"/>
              </span>
              <span className="btn-inner--text ml-2">Salvar</span>
            </Button>
            <Button className="btn-icon float-right mr-3 mt-2" color="danger" onClick={() => Limpar (setModalOpen(!modalOpen))}>
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
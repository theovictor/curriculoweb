import React from "react";
import { useFormik } from 'formik';
import { Input, Form, Row, Col, FormGroup, Button, FormFeedback, Label } from "reactstrap";
import * as yup from 'yup';
export default function Formulario() {
  function onSubmit(values, actions){
    console.log('SUBMIT', values);
  }
  function onBlurCep(ev, setFieldValue){
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, '');
    if(cep?.length !== 8){
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      idade: '',
      contato: '',
      dataNascimento: '',
      sexo: '',
      estadoCivil: '',
      nacionalidade: '',
      cep: '',
      logradouro: '',
      numeroCasa: '',
      bairro: '',
      cidade: '',
      uf:'',
    },
    validationSchema: yup.object({
      name: yup.string().required('name obrigatório'),
      email: yup.string().required('Email obrigatório'),
      idade: yup.number().required('Idade obrigatória'),
      contato: yup.number().required('Telefone de Contato obrigatório'),
      dataNascimento: yup.string().required('Data de Nascimento obrigatório'),
      sexo: yup.string().required('Sexo obrigatório'),
      estadoCivil: yup.string().required('Estado Civil obrigatório'),
      nacionalidade: yup.string().required('Nacionalidade obrigatório'),
      cep: yup.number().required('CEP obrigatório'),
      logradouro: yup.string().required('Logradouro obrigatório'),
      numeroCasa: yup.number().required('Número da Casa obrigatório'),
      bairro: yup.string().required('Barrio obrigatório'),
      cidade: yup.string().required('Cidade obrigatório'),
      uf: yup.string().required('Estado (UF) obrigatório'),
    }),
    render: (isValid, setFieldValue)
  });
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h6 className="heading-small text-muted mb-4">Dados Principais</h6>
        <div className="pl-lg-4">
          <div> {/* Dados Principais */}
            <Row>
              <Col lg="4">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="name">Nome *</Label>
                  <Input className="form-control-alternative" id="name" placeholder="name" type="text"
                    invalid={formik.touched.name && formik.errors.name ? true : false}
                    {...formik.getFieldProps('name')}/>
                  <FormFeedback>{formik.touched.name && formik.errors.name ? formik.errors.name : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="email">Email *</Label>
                  <Input className="form-control-alternative" id="email" placeholder="example@email.com" type="email"
                    invalid={formik.touched.email && formik.errors.email ? true : false}
                    {...formik.getFieldProps('email')}/>
                  <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="sexo">Sexo *</Label>
                  <Input className="form-control-alternative" id="sexo" placeholder="Genero" type="select" data-trigger=""
                    invalid={formik.touched.sexo && formik.errors.sexo ? true : false}
                    {...formik.getFieldProps('sexo')}>
                    <option defaultValue="0"></option>
                    <option defaultValue="1">Masculino</option>
                    <option defaultValue="2">Feminino</option>
                  </Input>
                  <FormFeedback>{formik.touched.sexo && formik.errors.sexo ? formik.errors.sexo : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="dataNascimento">Date de Nascimento *</Label>
                  <Input className="form-control-alternative" id="dataNascimento" type="date"
                    invalid={formik.touched.dataNascimento && formik.errors.dataNascimento ? true : false}
                    {...formik.getFieldProps('dataNascimento')}/>
                  <FormFeedback>{formik.touched.dataNascimento && formik.errors.dataNascimento ? formik.errors.dataNascimento : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="idade">Idade *</Label>
                  <Input className="form-control-alternative" id="idade" type="text"
                    invalid={formik.touched.idade && formik.errors.idade ? true : false}
                    {...formik.getFieldProps('idade')}/>
                  <FormFeedback>{formik.touched.idade && formik.errors.idade ? formik.errors.idade : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="line-primary"></hr>
          <div> {/* Endereço */}
            <Row>
              <Col lg="3">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="logradouro">Logradouro *</Label>
                  <Input className="form-control-alternative" id="logradouro" placeholder="Logradouro" type="text"
                    invalid={formik.touched.logradouro && formik.errors.logradouro ? true : false}
                    {...formik.getFieldProps('logradouro')}/>
                  <FormFeedback>{formik.touched.logradouro && formik.errors.logradouro ? formik.errors.logradouro : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="numeroCasa">Nº Casa *</Label>
                  <Input className="form-control-alternative" id="numeroCasa" placeholder="nº casa" type="text"
                    invalid={formik.touched.numeroCasa && formik.errors.numeroCasa ? true : false}
                    {...formik.getFieldProps('numeroCasa')}/>
                  <FormFeedback>{formik.touched.numeroCasa && formik.errors.numeroCasa ? formik.errors.numeroCasa : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="bairro">Bairro *</Label>
                  <Input className="form-control-alternative" id="bairro" placeholder="Bairro" type="text"
                    invalid={formik.touched.bairro && formik.errors.bairro ? true : false}
                    {...formik.getFieldProps('bairro')}/>
                  <FormFeedback>{formik.touched.bairro && formik.errors.bairro ? formik.errors.bairro : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="cep">CEP *</Label>
                  <Input className="form-control-alternative" id="cep" placeholder="CEP" type="text"
                    invalid={formik.touched.cep && formik.errors.cep ? true : false}
                    {...formik.getFieldProps('cep')} onBlur={(ev) => onBlurCep(ev, setFieldValue)}/>
                  <FormFeedback>{formik.touched.cep && formik.errors.cep ? formik.errors.cep : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="cidade">Cidade *</Label>
                  <Input className="form-control-alternative" id="cidade" placeholder="Cidade" type="text"
                    invalid={formik.touched.cidade && formik.errors.cidade ? true : false}
                    {...formik.getFieldProps('cidade')}/>
                  <FormFeedback>{formik.touched.cidade && formik.errors.cidade ? formik.errors.cidade : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="uf">UF *</Label>
                  <Input className="form-control-alternative" id="uf" placeholder="UF" type="select" data-trigger=""
                    invalid={formik.touched.uf && formik.errors.uf ? true : false}
                    {...formik.getFieldProps('uf')}>
                    <option defaultValue="0"></option>
                  </Input>
                  <FormFeedback>{formik.touched.uf && formik.errors.uf ? formik.errors.uf : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="line-primary"></hr>
          <div> {/* Expenriencia */}
            <Row>
              <Col lg="4">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="name">name *</Label>
                  <Input className="form-control-alternative" id="name" placeholder="name" type="text"
                    invalid={formik.touched.name && formik.errors.name ? true : false}
                    {...formik.getFieldProps('name')}/>
                  <FormFeedback>{formik.touched.name && formik.errors.name ? formik.errors.name : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="email">Email *</Label>
                  <Input className="form-control-alternative" id="email" placeholder="example@email.com" type="email"
                    invalid={formik.touched.email && formik.errors.email ? true : false}
                    {...formik.getFieldProps('email')}/>
                  <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="dataNascimento">Date de Nascimento</Label>
                  <Input className="form-control-alternative" id="dataNascimento" type="date"
                    invalid={formik.touched.dataNascimento && formik.errors.dataNascimento ? true : false}
                    {...formik.getFieldProps('dataNascimento')}/>
                  <FormFeedback>{formik.touched.dataNascimento && formik.errors.dataNascimento ? formik.errors.dataNascimento : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="line-primary"></hr>
        </div>
        <Button className="btn-icon border-0" color="sucess" type="submit" disabled={!isValid}>Enviar</Button>
      </Form>
    </>
  );
}
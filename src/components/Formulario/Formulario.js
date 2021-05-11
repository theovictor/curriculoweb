import React, { useState } from "react";
import { useFormik} from 'formik';
import { Input, Form, Row, Col, FormGroup, Button, FormFeedback } from "reactstrap";
import * as Yup from 'yup';
export default function Formulario() {
  const [value, setValue] = useState(1);
  
  const sendForm = Yup.object().shape({
    nome: Yup.string().required('Nome Obrigatorio'),
    email: Yup.string().email('Email Obrigatorio')
  })
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      idade:'',
      contato:'',
      dataNascimento:'',
      sexo:'',
      estadoCivil:'',
      cep:'',
      uf:'',
      cidade: '',
      pais: '',
      endereco:'',
      bairro:'',
      numeroCasa:'',
      nacionalidade: '',
      naturalidade: '',      
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('Nome obrigatório'),
      email: Yup.string().email('Email obrigatório').required('Email obrigatório'),
      idade: Yup.number().required('Idade obrigatória'),
      contato: Yup.number().required('Telefone de Contato obrigatório'),
      dataNascimento: Yup.string().required('Data de Nascimento obrigatório'),
      sexo: Yup.string().required('Sexo obrigatório'),
      estadoCivil: Yup.string().required('Estado Civil obrigatório'),
      endereco: Yup.string().required('Endereço obrigatório'),
      numeroCasa: Yup.number().required('Número da Casa obrigatório'),
      bairro: Yup.string().required('Barrio obrigatório'),
      cep: Yup.number().required('CEP obrigatório'),
      cidade: Yup.string().required('Cidade obrigatório'),
      uf: Yup.string().required('Estado (UF) obrigatório'),
      nacionalidade: Yup.string().required('Nacionalidade obrigatório'),
      naturalidade: Yup.string().required('Naturalidade obrigatório'),
    })
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <h6 className="heading-small text-muted mb-4">Dados Principais</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="nome">Nome *</label>
                  <Input className="form-control-alternative" id="nome" placeholder="Nome" type="text"
                    invalid={formik.touched.nome && formik.errors.nome ? true : false}
                    {...formik.getFieldProps('nome')}/>
                  <FormFeedback>{formik.touched.nome && formik.errors.nome ? formik.errors.nome : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="email">Email *</label>
                  <Input className="form-control-alternative" id="email" placeholder="example@email.com" type="email"
                    invalid={formik.touched.email && formik.errors.email ? true : false}
                    {...formik.getFieldProps('email')}/>
                  <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className=" form-control-label" htmlFor="dataNascimento">Date de Nascimento</label>
                  <Input className="form-control-alternative" id="dataNascimento" type="date"
                    invalid={formik.touched.dataNascimento && formik.errors.dataNascimento ? true : false}
                    {...formik.getFieldProps('dataNascimento')}/>
                  <FormFeedback>{formik.touched.dataNascimento && formik.errors.dataNascimento ? formik.errors.dataNascimento : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <hr className="line-primary"></hr>
            {/* Endereço */}
            <Row>
              <Col lg="3">
                <FormGroup>
                  <label className="form-control-label" htmlFor="endereco">Endereço *</label>
                  <Input className="form-control-alternative" id="endereco" placeholder="Endereco" type="text"
                    invalid={formik.touched.endereco && formik.errors.endereco ? true : false}
                    {...formik.getFieldProps('endereco')}/>
                  <FormFeedback>{formik.touched.endereco && formik.errors.endereco ? formik.errors.endereco : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="numeroCasa">Nº Casa *</label>
                  <Input className="form-control-alternative" id="numeroCasa" placeholder="nº casa" type="text"
                    invalid={formik.touched.numeroCasa && formik.errors.numeroCasa ? true : false}
                    {...formik.getFieldProps('numeroCasa')}/>
                  <FormFeedback>{formik.touched.numeroCasa && formik.errors.numeroCasa ? formik.errors.numeroCasa : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <label className=" form-control-label" htmlFor="bairro">Bairro *</label>
                  <Input className="form-control-alternative" id="bairro" placeholder="Bairro" type="text"
                    invalid={formik.touched.bairro && formik.errors.bairro ? true : false}
                    {...formik.getFieldProps('bairro')}/>
                  <FormFeedback>{formik.touched.bairro && formik.errors.bairro ? formik.errors.bairro : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <label className=" form-control-label" htmlFor="cep">CEP *</label>
                  <Input className="form-control-alternative" id="cep" placeholder="CEP" type="text"
                    invalid={formik.touched.cep && formik.errors.cep ? true : false}
                    {...formik.getFieldProps('cep')}/>
                  <FormFeedback>{formik.touched.cep && formik.errors.cep ? formik.errors.cep : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="3">
                <FormGroup>
                  <label className=" form-control-label" htmlFor="cidade">Cidade *</label>
                  <Input className="form-control-alternative" id="cidade" placeholder="Cidade" type="text"
                    invalid={formik.touched.cidade && formik.errors.cidade ? true : false}
                    {...formik.getFieldProps('cidade')}/>
                  <FormFeedback>{formik.touched.cidade && formik.errors.cidade ? formik.errors.cidade : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <label className=" form-control-label" htmlFor="uf">UF *</label>
                  <Input className="form-control-alternative" id="uf" placeholder="UF" type="text"
                    invalid={formik.touched.uf && formik.errors.uf ? true : false}
                    {...formik.getFieldProps('uf')}/>
                  <FormFeedback>{formik.touched.uf && formik.errors.uf ? formik.errors.uf : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <label className=" form-control-label" htmlFor="pais">Pais *</label>
                  <Input className="form-control-alternative" id="pais" placeholder="Pais" type="text"
                    invalid={formik.touched.pais && formik.errors.pais ? true : false}
                    {...formik.getFieldProps('uf')}/>
                  <FormFeedback>{formik.touched.pais && formik.errors.pais ? formik.errors.pais : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>          
            <hr className="line-primary"></hr>
            {/* Expenriencia */}
            <Row>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="nome">Nome *</label>
                  <Input className="form-control-alternative" id="nome" placeholder="Nome" type="text"
                    invalid={formik.touched.nome && formik.errors.nome ? true : false}
                    {...formik.getFieldProps('nome')}/>
                  <FormFeedback>{formik.touched.nome && formik.errors.nome ? formik.errors.nome : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="email">Email *</label>
                  <Input className="form-control-alternative" id="email" placeholder="example@email.com" type="email"
                    invalid={formik.touched.email && formik.errors.email ? true : false}
                    {...formik.getFieldProps('email')}/>
                  <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className=" form-control-label" htmlFor="dataNascimento">Date de Nascimento</label>
                  <Input className="form-control-alternative" id="dataNascimento" type="date"
                    invalid={formik.touched.dataNascimento && formik.errors.dataNascimento ? true : false}
                    {...formik.getFieldProps('dataNascimento')}/>
                  <FormFeedback>{formik.touched.dataNascimento && formik.errors.dataNascimento ? formik.errors.dataNascimento : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn-icon border-0" color="default" type="submit">Avançar</Button>
        </div>
      </Form>
    </>
  );
}
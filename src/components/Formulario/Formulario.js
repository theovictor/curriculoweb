import React, { useState } from "react";
import { useFormik } from 'formik';
import { Input, Form, Row, Col, FormGroup, Button } from "reactstrap";
//import * as yup from 'yup';
export default function Formulario() {
  const [value, setValue] = useState(1);
  const formik = useFormik({
    initialValues: {
      nome: '',
      nacionalidade: '',
      email: '',
      idade:'',
      celular:'',
      dataNascimento:'',
      sexo:'',
      estadoCivil:'',
      raca:'',
      cep:'',
      uf:'',
      endereco:'',
      bairro:'',
      numeroCasa:'',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      //firstName: yup.string().required();
    },
  });
  function btnAvancar() {
    if (value < 3) {
      setValue(value + 1);
    }
  };
  function btnVoltar() {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="needs-validation" noValidate>
        <h6 className="heading-small text-muted mb-4">
          Dados Principais
        </h6>
{/* Primeira parte do Formulario*/}
        {value === 1 ?
          <div className="pl-lg-4">
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="nome">
                    Nome *
                  </label>
                  <Input className="form-control-alternative" id="nome" name="nome" placeholder="Nome" type="text"
                    onChange={formik.handleChange} value={formik.values.nome}/>
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="email">
                    Email *
                  </label>
                  <Input className="form-control-alternative" id="email" placeholder="example@email.com" name="email" type="email"
                    onChange={formik.handleChange} value={formik.values.email}/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    Primeiro nome
                            </label>
                  <Input className="form-control-alternative"
                    defaultValue="Mariazinha"
                    id="input-first-name"
                    placeholder="Primeiro nome"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label"
                    htmlFor="input-last-name"
                  >
                    Ultimo nome
                            </label>
                  <Input className="form-control-alternative"
                    defaultValue="Biricutico"
                    id="input-last-name"
                    placeholder="Ultimo nome"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          : value === 2 ?
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label"
                      htmlFor="input-username"
                    >
                      Endereço
                              </label>
                    <Input className="form-control-alternative"
                      defaultValue="Mariazinha dos Biricuticos"
                      id="input-username"
                      placeholder=""
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-email">
                      Telefone
                    </label>
                    <Input className="form-control-alternative"
                      id="input-email"
                      placeholder=""
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            :
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label"
                      htmlFor="input-username"
                    >
                      Experiencia
                              </label>
                    <Input className="form-control-alternative"
                      defaultValue="Mariazinha dos Biricuticos"
                      id="input-username"
                      placeholder=""
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-email">
                      Tipo Sanguineo
                    </label>
                    <Input className="form-control-alternative"
                      id="input-email"
                      placeholder=""
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
        }
      </Form>
      <Button className="btn-icon border-0" color="default" type="submit"
        onClick={btnAvancar} size="sm"
      >
        Avançar
      </Button>
      <Button className="btn-icon border-0" color="default" type="button"
        onClick={btnVoltar} size="sm"
      >
        Voltar
      </Button>
    </>
  );
}
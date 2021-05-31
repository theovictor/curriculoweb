import React, { useState } from 'react';
import { Button, Card, CardHeader, Form, FormFeedback, Input, InputGroup, InputGroupAddon, Row, Col, Container, Label } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";

import isLoged from "helpers/isLoged";
import Upload from 'components/Upload/Upload'

export default function AccountSettings() {
  const [enableNome, setEnableNome] = useState(true);
  const [enableEmail, setEnableEmail] = useState(true);
  const [enablePassword, setEnablePassword] = useState(true);
  const [enableConfirmPass, setEnableConfirmPass] = useState('d-none');
  const history = useHistory();
  const routeChange = () => {
    history.push('/');
  }
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      confirmPassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Ambas as senhas devem ser iguais!"
        )
      }),
    })
  })
  if (!isLoged()) { routeChange() };
  return (
    <>
      <Container className="mt-7" fluid>
        <Row>
          <Col className="order-xl-1 mb-2 mb-xl-0" xl="3">
            <Card className="card-profile shadow">
              <section className="text-center">
                {/* Component de Upload de Foto*/}
                <Upload avatar/>
                <h3 className="title mt-4">Charlie Bailey</h3>
              </section>
            </Card>
          </Col>
          <Col className="order-xl-2" xl="9">
            <Card className="telaRND bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Configurações</h3>
                  </Col>
                </Row>
              </CardHeader>
                <div className="container py-4">
                  <Form>
                    <Row>
                      <Col className="align-self-baseline" md="3">
                        <span>
                          <i className="ni ni-single-02 mr-3"/>
                          <Label className="form-control-label" htmlFor="userName">Nome</Label>
                        </span>
                      </Col>
                      <Col className="align-self-baseline mb-3" md="6">
                        <InputGroup className="mb-3">
                        <Input className="form-control-alternative" id="userName" type="text" disabled={enableNome}
                          {...formik.getFieldProps('userName')}/>
                          <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 mr-2" color="success" size="sm" onClick={() => setEnableNome(!enableNome)}>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-pencil"/>
                            </span>
                          </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="align-self-baseline" md="3">
                        <span>
                          <i className="ni ni-email-83 mr-3"/>
                          <Label className="form-control-label" htmlFor="email">Email</Label>
                        </span>
                      </Col>
                      <Col className="align-self-baseline mb-3" md="6">
                        <InputGroup className="mb-3">
                        <Input className="form-control-alternative" id="email" type="email" disabled={enableEmail}
                          {...formik.getFieldProps('email')}/>
                          <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 mr-2" color="success" size="sm" onClick={() => setEnableEmail(!enableEmail)}>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-pencil"/>
                            </span>
                          </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="align-self-baseline" md="3">
                        <span>
                          <i className="ni ni-lock-circle-open mr-3"/>
                          <Label className="form-control-label" htmlFor="password">Senha</Label>
                        </span>
                      </Col>
                      <Col className="align-self-baseline mb-3" md="6">
                        <InputGroup className="mb-3">
                        <Input className="form-control-alternative" id="password" type="password" disabled={enablePassword}
                          {...formik.getFieldProps('password')}/>
                          <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 mr-2" color="success" size="sm" onClick={() => (setEnablePassword(!enablePassword), setEnableConfirmPass(''))}>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-pencil"/>
                            </span>
                          </Button>
                          {/* <Button className="btn-icon" color="danger" size="sm" onClick={() => setEnableConfirmPass('d-none')}>
                            <span className="btn-inner--icon">
                              <i className="ni ni-3x ni-fat-remove"/>
                            </span>
                          </Button> */}
                          </InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row className={enableConfirmPass}>
                      <Col className="align-self-baseline" md="3">
                        <span>
                          <i className="ni ni-lock-circle-open mr-3"/>
                          <Label className="form-control-label" htmlFor="confirmPassword">Confirmar Senha</Label>
                        </span>
                      </Col>
                      <Col className="align-self-baseline mb-3" md="6">
                        <InputGroup className="mb-3">
                        <Input className="form-control-alternative" id="confirmPassword" type="password"
                          invalid={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
                          {...formik.getFieldProps('confirmPassword')}/>
                          <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 mr-2" color="danger" size="sm" onClick={() => (setEnablePassword(!enablePassword), setEnableConfirmPass('d-none'))}>
                            <span className="btn-inner--icon">
                              <i className="ni ni-3x ni-fat-remove"/>
                            </span>
                          </Button>
                          </InputGroupAddon>
                          <FormFeedback>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}</FormFeedback>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Button className="btn-icon float-right mt-2" color="success" onClick={() => {}}>
                      <span className="btn-inner--icon">
                        <i className="ni ni-check-bold ml--2"/>
                      </span>
                      <span className="btn-inner--text ml-2">Salvar</span>
                    </Button>
                  </Form>
                </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { Button, Card, CardHeader, Form, FormFeedback, Input, InputGroup, InputGroupAddon, Row, Col, Container, Label, CardBody } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../../store/actions/userActions'

import '../../assets/css/settings-page.css'
import isLoged from "helpers/isLoged";
import Upload from 'components/Upload/Upload'

export default function AccountSettings() {
  const [enableNome, setEnableNome] = useState(true);
  const [enableEmail, setEnableEmail] = useState(true);
  const [enablePassword, setEnablePassword] = useState(true);
  const [enableConfirmPass, setEnableConfirmPass] = useState('d-none');

  const reducer = useSelector( state => state.userReducer);
  const nome = sessionStorage.getItem('nome')
  const dispatch = useDispatch();

  const history = useHistory();
  const routeChange = () => {
    history.push('/');
  }
  const formik = useFormik({
    initialValues: {
      user: '',
      // email: '',
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

  useEffect(() => {
    if(!reducer.user_name){
    dispatch(userActions.user_name(nome))
    }
  }, [])

  // useEffect(() => {
  //   console.log(formik.values)
  // }, [formik.values])

  return (
    <>
      <Container className="mt-7">
        <Row>
          <Col className="order-xl-1 mb-2 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <section className="text-center">
                {/* Component de Upload de Foto*/}
                <Upload avatar />
                <h3 className="title mt-4">{reducer.user_name? reducer.user_name : null}</h3>
              </section>
            </Card>
          </Col>
          <Col className="order-xl-2" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white">
                <Row className="align-items-center">
                  <Col>
                    <h4 className="mb-0">Configurações</h4>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="bg-white align-items-center">
                <Form className="align-items-center mt-4">
                  <Row>
                    <Col className="align-self-baseline mb-1">
                      <InputGroup className="account mb-3 justify-content-center">
                        <InputGroupAddon className="align-self-center" addonType="append">
                          <i className="ni ni-single-02 mr-3"/>
                        </InputGroupAddon>
                        <TextField id="user" label="Nome" size="small" variant="outlined" disabled={enableNome}
                          {...formik.getFieldProps('user')} />
                        <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 rounded-circle" color="success" size="sm"
                            onClick={() => setEnableNome(!enableNome)}>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-pencil"/>
                            </span>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col className="align-self-baseline mb-1">
                      <InputGroup className="account mb-3 justify-content-center">
                        <InputGroupAddon className="align-self-center" addonType="append">
                          <i className="ni ni-lock-circle-open mr-3"/>
                        </InputGroupAddon>
                        <TextField id="password" label="Senha" size="small" variant="outlined" disabled={enablePassword} type="password"
                          {...formik.getFieldProps('password')} />
                        <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 rounded-circle" color="success" size="sm"
                            onClick={() => (setEnablePassword(!enablePassword), setEnableConfirmPass(''))}>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-pencil"/>
                            </span>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className={`justify-content-center ${enableConfirmPass}`}>
                    <Col className="align-self-baseline mb-1">
                      <InputGroup className="account mb-3 justify-content-center">
                        <InputGroupAddon className="align-self-center" addonType="append">
                          <i className="ni ni-lock-circle-open mr-3"/>
                        </InputGroupAddon>
                        <TextField id="confirmPassword" label="Comfirmar Senha" size="small" variant="outlined" type="password"
                          error={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
                          {...formik.getFieldProps('confirmPassword')} />
                        <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 rounded-circle" color="danger" size="sm"
                            onClick={() => setEnableConfirmPass('d-none')}>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-times-circle"/>
                            </span>
                          </Button>
                        </InputGroupAddon>
                        <FormFeedback>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}</FormFeedback>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Button className="btn-icon float-right mt-2" color="success" onClick={() => { }}>
                      <span className="btn-inner--icon">
                        <i className="ni ni-check-bold ml--2" />
                      </span>
                      <span className="btn-inner--text ml-2">Salvar</span>
                    </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
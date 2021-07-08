import React from 'react';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Container, Col, FormFeedback, Row } from 'reactstrap';
import { useFormik } from 'formik';
import { useHistory, Link } from "react-router-dom";
import { api_login } from '../../services/api.js';
import { useDispatch } from 'react-redux'
import * as yup from 'yup';
import axios from 'axios';
import userActions from '../../store/actions/userActions'
import curriculoActions from '../../store/actions/curriculoActions'
import NotificationAlert from "react-notification-alert";
import { useNotify } from "hooks/useNotify";

export default function LoginCard() {
  const dispatch = useDispatch()
  const notify = useNotify()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Email inválido').required('Insira seu Email!'),
      password: yup.string().required('Insira sua Senha!'),
    })
  })
  const history = useHistory();
  const routeChange = () => { history.push('/dados_iniciais') }

  const btLogin = () => {
    const { email, password } = formik.values;
    const loginUser = { 'email': email, 'senha': password };
    if (email != '' && password != '') {
      axios.post(`${api_login}`, loginUser)
        .then(res => {
          sessionStorage.setItem('token', res.data.token);
          dispatch(userActions.carrega_foto(res.data.user.thumbnail))
          dispatch(userActions.add_token(res.data.token));
          dispatch(userActions.add_user(res.data.user));
          dispatch(curriculoActions.busca_curriculo(res.data.user._id))
          routeChange();
          dispatch(userActions.add_controle());
          dispatch(userActions.busca_user());
        }).catch( err => {
          notify.notify('danger', 'Email ou Senha Inválidos!')
        })
        
    }
  }
  
  return (
    <>
     <div className="rna-wrapper"><NotificationAlert ref={notify.notifica} /></div>
      <Container>
        <Col className="mx-auto" lg="5" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-white p-3">
              <div className="text-muted text-center mb-3">
                <h4>Login</h4>
              </div>
              <div className="logo"/>
            </CardHeader>
            <CardBody className="px-lg-4 py-lg-4">
              <div className="text-center text-muted mb-4">
                <small>Entre com suas credenciais</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input autoFocus className="form-control-alternative" placeholder="Email" id="email" type="email"
                      invalid={formik.touched.email && formik.errors.email ? true : false}
                      {...formik.getFieldProps('email')} />
                    <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input className="form-control-alternative" placeholder="Senha" id="password" type="password"
                      invalid={formik.touched.password && formik.errors.password ? true : false}
                      {...formik.getFieldProps('password')} />
                    <FormFeedback>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</FormFeedback>
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-3" color="primary" onClick={btLogin}>Entrar</Button>
                </div>
              </Form>
              <Row className="justify-content-center mt-3">
                <Link className="align-items-center" to="/reset" style={{display: 'flex'}}>
                  <i className="ni ni-lg ni-bold-right"/>
                  <span>Redefinir senha</span>
                </Link>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
}
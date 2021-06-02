import React, { useRef } from 'react';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Container, Col, FormFeedback } from 'reactstrap';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
import { api_login } from '../../services/api.js';
import { useDispatch } from 'react-redux'
import * as yup from 'yup';
import axios from 'axios';
import userActions from '../../store/actions/userActions'
import curriculoActions from '../../store/actions/curriculoActions'
import NotificationAlert from "react-notification-alert";
import Logo from 'components/Logo/Logo.js';

export default function LoginCard() {
  // const reducer = useSelector( state => state.userReducer);
  const notifica = useRef()

  const dispatch = useDispatch()

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
  const routeChange = () => {
    history.push('/dashboard');
  }

  const notify = (type, msg) => {
    const options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {''}
           Aviso
          </span>
          <span data-notify="message">{msg}</span>
        </div>
      ),
      type: type,
      icon: "ni ni-bell-55",
      autoDismiss: 3
    };
    notifica.current.notificationAlert(options)
  };

  const btLogin = () => {
    const { email, password } = formik.values;
    const loginUser = { 'email': email, 'senha': password };
    if (email != '' && password != '') {
      axios.post(`${api_login}`, loginUser)
        .then(res => {
          sessionStorage.setItem('token', res.data.token);
          sessionStorage.setItem('user_id', res.data.user._id);
          dispatch(userActions.login(res.data));
          dispatch(curriculoActions.busca_curriculo(res.data.user._id))
          routeChange();
        }).catch( err => {
          notify('danger', 'Email ou Senha Inválidos!')
          // console.log(err)
        })
    }
  }

  // React.useEffect(() => {
  //   console.log(reducer)
  // }, [reducer])


  return (
    <>
      <div className="rna-wrapper"><NotificationAlert ref={notifica} /></div>
      <Container>
        <Col className="mx-auto" lg="5" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-white pb-5">
              <div className="text-muted text-center mb-3">
                <small>Login</small>
              </div>
              <Logo />
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
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
                    <Input className="form-control-alternative" placeholder="Email" id="email" type="email"
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
                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input" id="customCheckLogin2" type="checkbox" />
                  <label className="custom-control-label" htmlFor="customCheckLogin2">
                    <span className="text-default opacity-5">Lembrar-me</span>
                  </label>
                </div> */}
                <div className="text-center">
                  <Button className="my-4" color="primary" onClick={btLogin}>Entrar</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
}
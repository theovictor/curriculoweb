import React from 'react';
import Logo from 'components/Logo/Logo.js';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
  Col,
  FormFeedback
} from 'reactstrap';
export default function LoginCard(){
  const formik = useFormik ({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      changePassword: '',
      acceptTerms: false,
    },
    validationSchema: yup.object({
      userName: yup.string().required('Insira um nome de usuário!'),
      email: yup.string().email('Email inválido').required('Insira um e-mail válido!'),
      password: yup.string().required('Insira uma senha forte!'),
      changePassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Ambas as senhas devem ser iguais!"
        )
      }),
      acceptTerms: yup.bool().oneOf([true], 'Você deve concordar com os Termos antes de cadastrar.'),
    })
  });
  return(
    <>
      <section className="upper">
        <Container>
          <Col className="mx-auto" lg="5" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Cadastro</small>
                </div>
                <Logo/>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Entre com suas credenciais</small>
                </div>
                <Form role="form" onSubmit={formik.handleSubmit}>
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Nome" id="userName" type="text"
                        invalid={formik.touched.userName && formik.errors.userName ? true : false}
                        {...formik.getFieldProps('userName')}/>
                      <FormFeedback>{formik.touched.userName && formik.errors.userName ? formik.errors.userName : null}</FormFeedback>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" id="email"
                        invalid={formik.touched.email && formik.errors.email ? true : false}
                        {...formik.getFieldProps('email')}/>
                      <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Senha" type="password" id="password"
                        invalid={formik.touched.password && formik.errors.password ? true : false}
                        {...formik.getFieldProps('password')}/>
                      <FormFeedback>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</FormFeedback>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Confirmar Senha" type="password" id="changePassword"
                        invalid={formik.touched.changePassword && formik.errors.changePassword ? true : false}
                        {...formik.getFieldProps('changePassword')}/>
                      <FormFeedback>{formik.touched.changePassword && formik.errors.changePassword ? formik.errors.changePassword : null}</FormFeedback>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <div className="custom-control custom-checkbox mb-3">
                      <Input className="custom-control-input" id="acceptTerms" type="checkbox"
                        invalid={formik.touched.acceptTerms && formik.errors.acceptTerms ? true : false}
                        {...formik.getFieldProps('acceptTerms')}/>
                      <label className="custom-control-label" htmlFor="acceptTerms">
                        Aceite os termos e condições ao cadastrar.
                      </label>
                      <FormFeedback>{formik.touched.acceptTerms && formik.errors.acceptTerms ? formik.errors.acceptTerms : null}</FormFeedback>
                    </div>
                  </FormGroup>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit">
                      Cadastrar
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </section>
    </>
  );
}
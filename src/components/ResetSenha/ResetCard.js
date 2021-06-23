import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, FormFeedback, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function ResetCard() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Email inválido').required('Insira seu Email!'),
    })
  })
  return (
    <>
      <Card className="bg-secondary shadow border-0">
        <CardHeader>
          <div className="logo"/>
          <CardTitle className="text-center" tag="h4">
            Resetar Senha
          </CardTitle>
        </CardHeader>
        <CardBody className="px-lg-4 py-lg-4">
          <div className="text-center text-muted mb-4">
            <small>Digite o seu e-mail para redefinir a senha</small>
          </div>
          <Form role="form" onSubmit={formik.handleSubmit}>
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Email" type="email" id="email"
                  invalid={formik.touched.email && formik.errors.email ? true : false}
                  {...formik.getFieldProps('email')} />
                <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
              </InputGroup>
            </FormGroup>
            <div className="text-center">
              <Button className="my-4" color="primary">
                Enviar
              </Button>
            </div>
            <Row className="justify-content-center mt-3">
              <Link className="align-items-center" to="/" style={{display: 'flex'}}>
                <i className="ni ni-lg ni-bold-left"/>
                <span>Voltar</span>
              </Link>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
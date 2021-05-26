import React from "react";
import { Button, Card, CardHeader, CardBody, CardImg, CardTitle, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, FormFeedback } from "reactstrap";
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
          <CardImg alt="..."
            src={require("assets/img/logo.png")}
          ></CardImg>
          <CardTitle className="text-center" tag="h4">
            Resetar Senha
                    </CardTitle>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <smal>Digite o seu e-mail para redefinir a senha</smal>
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
              <Button className="my-4" color="primary" type="button">
                Enviar
              </Button>
            </div>
            <div className="text-center">
              <i className="fa fa-hand-point-left mr-1" />
              <Link to="/index-page" tag={Link}>
                Voltar
              </Link>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
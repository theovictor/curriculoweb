import React from 'react';
import Logo from 'components/Logo/Logo.js';
import {useFormik} from 'formik';
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
  Col
} from 'reactstrap';

export default function LoginCard(){
  // const [signUpName, setSignUpName] = useState('');
  // const [signUpEmail, setSignUpEmail] = useState('');
  // const [signUpPassword, setSignUpPassword] = useState('');
  const formik = useFormik ({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
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
                      <Input placeholder="Nome" id="name" type="text" name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" id="email" name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password" id="password" name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input className="custom-control-input" id="customCheckLogin2" type="checkbox"/>
                    <label className="custom-control-label" htmlFor="customCheckLogin2">
                      <span className="text-default opacity-5">Aceito os termos de cadastro</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit"
                      onClick={() => {}}
                    >
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
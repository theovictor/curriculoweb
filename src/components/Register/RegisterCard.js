import React, {useState} from 'react';
import Logo from 'components/Logo/Logo.js';
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
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
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
                <Form role="form">
                  <FormGroup className={"mb-3" + signUpName}>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Nome" type="text"
                        onFocus={() => setSignUpName('focused')}
                        onBlur={() => setSignUpName('')}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className={"mb-3" + signUpEmail}>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email"
                        onFocus={() => setSignUpEmail('focused')}
                        onBlur={() => setSignUpEmail('')}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className={signUpPassword}>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password"
                        onFocus={() => setSignUpPassword('focused')}
                        onBlur={() => setSignUpPassword('')}
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
                    <Button className="my-4" color="primary" type="button"
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
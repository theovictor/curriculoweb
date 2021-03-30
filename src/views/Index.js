import React from "react";
import "assets/css/inicio.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-warning">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                {/* Login */}
                <Col lg="5" className="ldLogin">
                  <Card className="bg-transparent border-0">
                    <CardHeader className="bg-transparent pb-5 border-0">
                      <div className="text-muted text-center mb-3">
                        <h4>Bem Vindo a CONNEC COMP</h4>
                        <h5>Aqui você economiza papel e ajuda o meio ambiente !</h5>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="button">
                          Entrar
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                {/* criar conta */}
                <Col lg="5" className="ldConta bg-white">
                  <Card className="bg-transparent border-0">
                    <CardHeader className="bg-transparent pb-5 border-0">
                      <div className="text-muted text-center mb-3">
                        <small>Sign up with</small>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Crie sua conta de GRAÇA</small>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Nome" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Senha"
                              type="password"
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            password strength:{" "}
                            <span className="text-success font-weight-700">
                            </span>
                          </small>
                        </div>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  Eu concordo com a{" "}
                                  <a
                                    href="#"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Política de Privacidade.
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                          >
                            Criar Conta
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}
export default Index;
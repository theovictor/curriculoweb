import React, {useState} from 'react'

import { Button, Card, CardHeader, CardBody, CardTitle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from 'reactstrap'

export default function Contato(){
  const [firstNameFocus, setFirstNameFocus] = useState('');
  const [emailFocus, setEmailFocus] = useState('');
  return(
    <>
      <Container className="arruma">
        <Row>
          <Col md="5">
            <h1 className="title text-default">Entrar em Contato</h1>
            <h4 className="description text-default">
              Entre em contato conosco para saber mais sobre nosso produto e serviço.
            </h4>
          </Col>
          <Col className="m-auto" md="12">
            <Card className="card-contact card-raised">
              <Row>
                <Col className="pr-md-0" lg="8" md="7">
                  <Form
                    className="p-3"
                    id="contact-form-3"
                    method="post"
                    role="form"
                  >
                    <CardHeader>
                      <CardTitle tag="h4">Envie-nos uma mensagem</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <FormGroup className={firstNameFocus}>
                            <label>Primeiro Nome</label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-circle-08"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="First Name..."
                                placeholder="First Name..."
                                type="text"
                                onFocus={() => setFirstNameFocus("focused")}
                                onBlur={() => setFirstNameFocus("")}
                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className={emailFocus}>
                            <label>Segundo Nome</label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-collection"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                                onFocus={() => setEmailFocus("focused")}
                                onBlur={() => setEmailFocus("")}
                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Endereço de Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email Here..."
                            type="text"
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Sua Mensagem</label>
                        <Input
                          id="contact-us-message-4"
                          name="message"
                          rows="6"
                          type="textarea"
                        ></Input>
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="customCheck2"
                              type="checkbox"
                            ></input>
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck2"
                            >
                              <span>Eu não sou um robô</span>
                            </label>
                          </div>
                        </Col>
                        <Col md="6">
                          <Button
                            className="pull-right"
                            color="info"
                            type="submit"
                          >
                            Send Message
                            </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Col>
                {/* <Col className="pl-md-0" lg="4" md="5">
                  <div className="info text-left bg-info">
                    <CardTitle className="text-white" tag="h4">
                      Contact information
                      </CardTitle>
                    <div className="info info-horizontal mt-lg-5">
                      <div className="icon icon-shape bg-white rounded-circle text-info">
                        <i className="ni ni-square-pin"></i>
                      </div>
                      <div className="description">
                        <p className="info-title text-white mt-2">
                          345 Street 2, Bucharest
                          </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-shape bg-white rounded-circle text-info">
                        <i className="ni ni-mobile-button"></i>
                      </div>
                      <div className="description">
                        <p className="info-title text-white mt-2">
                          +16(3412) 421 241
                          </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-shape bg-white rounded-circle text-info">
                        <i className="ni ni-email-83"></i>
                      </div>
                      <div className="description">
                        <p className="info-title text-white mt-2">
                          contact@yoursite.com
                          </p>
                      </div>
                    </div>
                  </div>
                </Col> */}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
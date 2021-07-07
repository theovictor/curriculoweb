import React from 'react'
import { Button, Card, CardHeader, CardBody, CardTitle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col, Label } from 'reactstrap'

export default function Contato(){

  return(
    <>
      <Container>
        <Card>
          <Form className="p-3">
            <CardHeader className="border-0">
              <CardTitle tag="h4">Envie-nos uma mensagem</CardTitle>
              <small>Entre em contato conosco para saber mais sobre nosso produto e serviço.</small>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <FormGroup className="">
                    <Label>Primeiro Nome</Label>
                    <InputGroup className="shadow">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input id="pri_nome" placeholder="Primeiro Nome..." type="text" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup className="">
                    <Label>Segundo Nome</Label>
                    <InputGroup className="shadow">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-collection"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input id="seg_nome" placeholder="Seg. Nome..." type="text" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Endereço de Email</Label>
                <InputGroup className="shadow">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input id="email" placeholder="Seu E-mail" type="email" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>Sua Mensagem</Label>
                <Input className="shadow" id="mensagem" rows="5" type="textarea" />
              </FormGroup>
              <Row>
                <Col md="6">
                  <div className="custom-control custom-checkbox mb-3">
                    <Input className="custom-control-input" id="customCheck2" type="checkbox" />
                    <Label className="custom-control-label" htmlFor="customCheck2">
                      <span>Eu não sou um robô</span>
                    </Label>
                  </div>
                </Col>
                <Col md="6">
                  <Button className="pull-right bg-gradient-info border-0 text-white" onClick={()=>{alert('Função Desabilitada no Momento.\nTente novamente mais tarde !')}}>
                    Enviar Mensagem
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Form>
        </Card>
      </Container>
    </>
  )
}
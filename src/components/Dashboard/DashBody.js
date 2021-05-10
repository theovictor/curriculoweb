import React from 'react';
import DashMenu from 'components/Dashboard/DashMenu.js';
import Formulario from 'components/Formulario/Formulario.js';
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap';
export default function DashBody() {
  return (
    <>
      <Container className="mt-8" fluid>
        <Row>
          <Col className="order-xl-1 mb-0 mb-xl-0" xl="3">
            <DashMenu />
          </Col>
          <Col className="order-xl-2 mt-6" xl="9">
            <Card className="telaRND bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Meu Curriculo</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Formulario />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
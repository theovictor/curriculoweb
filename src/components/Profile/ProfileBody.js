import React from "react";
import { Button, Card, Container, Row, Col } from "reactstrap";

import ProfileData from './ProfileData';

export default function ProfileBody() {
  return (
    <Container>
      <Card className="card-profile left shadow mt--300">
        <div className="px-4">
          <Row className="justify-content-left">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/theme/team-4-800x800.jpg")}
                  />
              </div>
            </Col>

            {/****** inicio menu redes sociais *******/}
            <Col className="order-lg-3 text-lg-right align-self-lg-center" lg="4">
              <div className="card-profile-actions py-4 mt-lg-0">

                {/****** FACEBOOK *******/}
                <Button
                  className="mr-4"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-facebook-square" />
                </Button>

                {/****** INSTAGRAM *******/}
                <Button
                  className="mr-4"
                  color="danger"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-instagram" />
                </Button>

                {/****** TWITTER *******/}
                <Button
                  className="mr-4"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-twitter" />
                </Button>

                {/****** LINKEDIN *******/}
                <Button
                  className="mr-4"
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-linkedin-in" />
                </Button>
              </div>
            </Col>
            {/****** fim menu redes sociais *******/}
          </Row>

          {/****** APRESENTAÇÃO  *******/}
          <div className="text-center mt-5">
            <h3>
              Jessica Jones <span className="font-weight-light">, 27</span>
            </h3>

            {/****** CIDADE, ESTADO E PAÍS  *******/}
            <div className="h6 font-weight-300">
              <i className="ni location_pin mr-2" />
              Bucharest, Romania
            </div>

            {/****** COMPONENTE DE DADOS  *******/}
            <div className="h6 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              <ProfileData />
            </div>
          </div>

          {/****** DESCRIÇÃO  *******/}
          <div className="mt-1 py-5 border-top text-center">
            <Row className="justify-content-center">
              <Col lg="9">
                <p>
                  Objetivo: Contribuir para que meus conhecimentos possam trazer benefícios
                  e crescimento para a instituição, aprimorando também minhas habilidades
                  profissionais estando disposto a aprender coisas novas todos os dias.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </Container>
  );
}
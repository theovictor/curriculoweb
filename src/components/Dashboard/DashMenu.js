import React from "react";
import {
    Col,
    Row,
    Card,
    CardBody,
    Button
} from "reactstrap";
export default function DashMenu(){
  return(
    <>
      <Card className="card-profile shadow">
          <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                          <img alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}/>
                  </div>
              </Col>
          </Row>
          <CardBody className="pt-0 pt-md-4">
              <div className="text-center">
                  <h3 className="mt-7">Mariazinha</h3>
                  <div className="h5 font-weight-300">dos Biricuticos</div>
                  <hr className="my-4"/>
                  <Row className="justify-content-betwee mt-2">
                      <Col className="align-items-center">
                          <Button className="btn-icon border-0" color="default" type="button" outline
                              onClick={(e) => e.preventDefault()} size="sm"
                          >
                              <span className="icone mt-2 mb-2">
                                  <i className="fas fa-file-alt"/>
                              </span>
                              <span className="btn-inner-text">
                                  Criar Curriculo
                              </span>
                          </Button>
                      </Col>
                      <Col className="align-items-center">
                          <Button className="btn-icon border-0" color="default" type="button" outline
                              onClick={(e) => e.preventDefault()} size="sm"
                          >
                              <span className="icone mt-2 mb-2">
                                  <i className="fas fa-edit"/>
                              </span>
                              <span className="btn-inner-text">
                                  Editar Curriculo
                              </span>
                          </Button>
                      </Col>
                  </Row>
                  <Row className="justify-content-between mt-3">
                      <Col className="align-items-center">
                          <Button className="btn-icon border-0" color="default" type="button" outline
                              onClick={(e) => e.preventDefault()} size="sm"
                          >
                              <span className="icone mt-2 mb-2">
                                  <i className="fas fa-user-edit"/>
                              </span>
                              <span className="btn-inner-text">
                                  Editar Perfil
                              </span>
                          </Button>
                      </Col>
                      <Col className="align-items-center">
                          <Button className="btn-icon border-0" color="default" type="button" outline
                              onClick={(e) => e.preventDefault()} size="sm"
                          >
                              <span className="icone mt-2 mb-2">
                                  <i className="fas fa-file-powerpoint"/>
                              </span>
                              <span className="btn-inner-text">
                                  Exportar Curriculo
                              </span>
                          </Button>
                      </Col>
                  </Row>
              </div>
          </CardBody>
      </Card>
    </>
  );
}
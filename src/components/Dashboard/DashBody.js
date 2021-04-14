import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";

function DashBody(){
    return(
        <>
            <Container className="mt-8">
                <Row>
                    <Col className="order-xl-1 mb-0 mb-xl-0" xl="4">
                        <Card className="card-profile shadow">
                            <Row className="justify-content-center">
                                <Col className="order-lg-2" lg="3">
                                    <div className="card-profile-image">
                                        <a href="#" onClick={(e) => e.preventDefault()}>
                                            <img alt="..."
                                                className="rounded-circle"
                                                src={require("assets/img/theme/team-4-800x800.jpg")}/>
                                        </a>
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
                    </Col>
                    <Col className="order-xl-2 mt-6" xl="8">
                        <Card className="telaRND bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Meu Curriculo</h3>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button color="primary" href="#"
                                            onClick={(e) => e.preventDefault()} size="sm"
                                        >
                                            Configurações
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Suas Informações
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Nome
                                                </label>
                                                <Input className="form-control-alternative"
                                                    defaultValue="Mariazinha dos Biricuticos"
                                                    id="input-username"
                                                    placeholder="Nome"
                                                    type="text"
                                                />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Email
                                                    </label>
                                                    <Input className="form-control-alternative"
                                                        id="input-email"
                                                        placeholder="mariazinha@exemplo.com"
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        Primeiro nome
                                                    </label>
                                                    <Input className="form-control-alternative"
                                                        defaultValue="Mariazinha"
                                                        id="input-first-name"
                                                        placeholder="Primeiro nome"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Ultimo nome
                                                    </label>
                                                    <Input className="form-control-alternative"
                                                        defaultValue="Biricutico"
                                                        id="input-last-name"
                                                        placeholder="Ultimo nome"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default DashBody;
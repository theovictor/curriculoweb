import React from "react";
import {
    Col,
    Row,
    Form,
    FormGroup,
    Input
} from "reactstrap";
function DashForm1(){
    return(
        <>
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
        </>
    );
}
export default DashForm1;
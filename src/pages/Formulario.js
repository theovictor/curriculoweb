import React, {useState} from "react";
import { useFormik, validateYupSchema, yupToFormErrors } from 'formik';
import {Input, Form, Row, Col, FormGroup, Button } from "reactstrap";
import * as yup from 'yup';
export default function Formulario() {

    const [value, setValue] = useState(1);

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          firstName: yup.string().required();
        },
    })

    return(
        <>
        <Form>
                <h6 className="heading-small text-muted mb-4">
                    Suas Informações
                </h6>

                {value === 1? 
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
                    :


                    <div className="pl-lg-4">
                    <Row>
                        <Col lg="6">
                            <FormGroup>
                                <label className="form-control-label"
                                htmlFor="input-username"
                            >
                                Endereço
                            </label>
                            <Input className="form-control-alternative"
                                defaultValue="Mariazinha dos Biricuticos"
                                id="input-username"
                                placeholder=""
                                type="text"
                            />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <label className="form-control-label"
                                    htmlFor="input-email"
                                >
                                    Telefone
                                </label>
                                <Input className="form-control-alternative"
                                    id="input-email"
                                    placeholder=""
                                    type="email"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
                }
            </Form>
            <Button className="btn-icon border-0" color="default" type="button"
                onClick={() => {setValue(value+1)}} size="sm"
            >
                Avançar
            </Button>
        </>
    );
}
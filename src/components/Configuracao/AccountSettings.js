import React, { useEffect } from 'react';
import { Button, Card, CardHeader, Form, FormFeedback, InputGroup, InputGroupAddon, Row, Col, Container, CardBody } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, 
  // useDispatch 
} from 'react-redux'
// import userActions from '../../store/actions/userActions'
import isLoged from "helpers/isLoged";
import Upload from 'components/Upload/Upload'
import '../../assets/css/settings-page.css'

export default function AccountSettings() {
  const history = useHistory();
  const routeChange = () => { history.push('/') }
  if (!isLoged()) { routeChange() }

  const rd_user = useSelector( state => state.userReducer);
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      confirmPassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Ambas as senhas devem ser iguais!"
          )
        }),
      })
    })
    

  useEffect(() => {
    if (rd_user.user) {
      formik.setFieldValue('nome', rd_user.user.nome ?  rd_user.user.nome : '')
      formik.setFieldValue('email', rd_user.user.email ?  rd_user.user.email : '')
    }
  }, [rd_user])

  return (
    <>
      <Container className="mt-7">
        <Row>
          <Col className="order-xl-1 mb-2 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <section className="text-center">
                <Upload avatar />
                <h3 className="nome mt--4">{rd_user.user?.nome? rd_user.user.nome : null}</h3>
              </section>
            </Card>
          </Col>
          <Col className="order-xl-2" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white">
                <Row className="align-items-center">
                  <Col>
                    <h4 className="mb-0">Configurações</h4>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="bg-white align-items-center">
                <Form className="align-items-center mt-4">
                  <Row>
                    <Col className="align-self-baseline mb-1">
                      <InputGroup className="account mb-3 justify-content-center">
                        <InputGroupAddon className="align-self-center" addonType="append">
                          <i className="ni ni-single-02 mr-3"/>
                        </InputGroupAddon>
                        <TextField id="nome" label="Nome" size="small" variant="outlined" disabled {...formik.getFieldProps('nome')} style={{width: '20rem'}}/>
                        {/* <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 rounded-circle" color="success" size="sm" disabled>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-pencil"/>
                            </span>
                          </Button>
                        </InputGroupAddon> */}
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="align-self-baseline mb-1">
                      <InputGroup className="account mb-3 justify-content-center">
                        <InputGroupAddon className="align-self-center" addonType="append">
                          <i className="ni ni-email-83 mr-3"/>
                        </InputGroupAddon>
                        <TextField id="email" label="E-mail" size="small" variant="outlined" disabled {...formik.getFieldProps('email')} style={{width: '20rem'}}/>
                        {/* <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 rounded-circle" color="success" size="sm" disabled>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-pencil"/>
                            </span>
                          </Button>
                        </InputGroupAddon> */}
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col className="align-self-baseline mb-1">
                      <InputGroup className="account mb-3 justify-content-center">
                        <InputGroupAddon className="align-self-center" addonType="append">
                          <i className="ni ni-lock-circle-open mr-3"/>
                        </InputGroupAddon>
                        <TextField id="password" label="Nova Senha" size="small" variant="outlined" type="password" disabled {...formik.getFieldProps('password')} style={{width: '20rem'}}/>
                        {/* <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 rounded-circle" color="success" size="sm" disabled>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-pencil"/>
                            </span>
                          </Button>
                        </InputGroupAddon> */}
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col className="align-self-baseline mb-1">
                      <InputGroup className="account mb-3 justify-content-center">
                        <InputGroupAddon className="align-self-center" addonType="append">
                          <i className="ni ni-lock-circle-open mr-3"/>
                        </InputGroupAddon>
                        <TextField id="confirmPassword" label="Comfirmar Senha" size="small" variant="outlined" type="password" disabled
                          error={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
                          {...formik.getFieldProps('confirmPassword')} style={{width: '20rem'}}/>
                        {/* <InputGroupAddon addonType="append">
                          <Button className="btn-icon ml-2 rounded-circle" color="danger" size="sm" disabled>
                            <span className="btn-inner--icon">
                              <i className="fa fa-3x fa-times-circle"/>
                            </span>
                          </Button>
                        </InputGroupAddon> */}
                        <FormFeedback>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}</FormFeedback>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Button className="btn-icon float-right mt-2 bg-gradient-success text-white" onClick={() => { }} disabled>
                      <span className="btn-inner--icon">
                        <i className="ni ni-check-bold ml--2" />
                      </span>
                      <span className="btn-inner--text ml-2">Salvar</span>
                    </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
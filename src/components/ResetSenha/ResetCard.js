import React from "react";
import { Link } from "react-router-dom";
import "assets/css/ResetPage.css";
import Logo from "components/Logo";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import Container from "reactstrap/lib/Container";
// Components
function ResetCard() {
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
      <Container>  
          <Card className=" borda bg-secondary shadow border-0 ">
            <CardHeader>
            <Logo/>
              <h4 className="text-center">Resetar Senha</h4>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-1">
                <small>Digite seu e-mail para redefinir a senha</small>
              </div>
              <Form role="form">
                <FormGroup className={"mb-1" + emailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={() => setEmailFocus("focused")}
                      onBlur={() => setEmailFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button
                    className="buttonEnviar"
                    color="primary"
                    type="button"
                  >
                    Enviar
                  </Button>
                </div>
                <Link to="/">
                  <Button
                    className="btn-icon btn-3"
                    size="sm"
                    color="secondary"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-bold-left" />
                    </span>
                    <span className="btn-inner--text">Voltar</span>
                  </Button>
                </Link>
              </Form>
            </CardBody>
          </Card>
      </Container>

    </>
  );
}
export default ResetCard;

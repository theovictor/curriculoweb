import React from "react";
import { Link } from "react-router-dom";
import "assets/css/ResetPage.css";
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
// Components
function ResetCard() {
    const [emailFocus, setEmailFocus] = React.useState("");
    return(
        <>
            <Card className="bg-secondary shadow border-0">
                <CardHeader>
                    <CardImg alt="..."
                        src={require("assets/img/logo.png")}
                    ></CardImg>
                    <CardTitle className="text-center" tag="h4">
                        Resetar Senha
                    </CardTitle>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                        <smal>Digite o seu e-mail para redefinir a senha</smal>
                    </div>
                    <Form role="form">
                        <FormGroup className={"mb-3" + emailFocus}>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-email-83"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    onFocus={() => setEmailFocus("focused")}
                                    onBlur={() => setEmailFocus("")}
                                />
                            </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                            <Button className="my-4" color="primary" type="button">
                                Enviar
                            </Button>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-hand-point-left mr-1"/>
                            <Link to="/index-page" tag={Link}>
                                Voltar
                            </Link>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </>
    );
}
export default ResetCard;
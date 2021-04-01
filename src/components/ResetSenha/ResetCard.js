import React from "react";
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
    InputGroupText
} from "reactstrap";
// Components
function ResetCard(){
    const [emailFocus, setEmailFocus] = React.useState("");
    return(
        <>
            <Card className="bg-secondary shadow border-0">
                <CardHeader>
                    <CardImg
                        alt="..."
                        src={require("assets/img/ill/ill-2.svg")}>
                    </CardImg>
                    <CardTitle className="text-center" tag="h4">
                        Resetar Senha
                    </CardTitle>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                        <small>Digite seu e-mail para redefinir a senha</small>
                    </div>
                    <Form role="form">
                        <FormGroup className={"mb-3" + emailFocus}>
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
                            <Button className="my-4" color="primary" type="button">
                                Enviar
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </>
    );
}
export default ResetCard;
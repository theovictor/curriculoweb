import React from "react";
import {Link} from "react-router-dom";
import Logo from "components/Logo/Logo.js";
import {
    Button,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
function SignIn(){
    const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
    const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
    return(
        <>
            <div className="form-container sign-in-container">
                <Form action="#" role="form">
                    <Logo/>
                    <h2>Entrar</h2>
                    <span className="text-default mb-4">Use sua conta</span>
                    <FormGroup className={"mb-3" + signinEmailFocus}>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-email-83"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                                placeholder="Email"
                                type="email"
                                onFocus={() => setSigninEmailFocus("focused")}
                                onBlur={() => setSigninEmailFocus("")}>
                            </Input>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className={signinPasswordFocus}>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-lock-circle-open"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Senha"
                                type="password"
                                onFocus={() => setSigninPasswordFocus("focused")}
                                onBlur={() => setSigninPasswordFocus("")}>
                            </Input>
                        </InputGroup>
                    </FormGroup>
                    <Link to="/reset-page">
                        Esqueci minha senha!
                    </Link>
                    <Button className="mt-3" color="primary">
                        Entrar
                    </Button>
                </Form>
            </div>
        </>
    );
}
export default SignIn;
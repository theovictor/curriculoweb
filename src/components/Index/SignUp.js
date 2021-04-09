import React from "react";
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
function SignUp(){
    const [signupNameFocus, setSignupNameFocus] = React.useState("");
    const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
    const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
    return(
        <>
            <div className="form-container sign-up-container">
                <Form>
                    <Logo/>
                    <h2>Crie sua Conta</h2>
                    <span className="text-default mb-4">
                        Use seu email para registrar
                    </span>
                    <FormGroup className={"mb-3" + signupNameFocus}>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-circle-08"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Nome"
                                type="text"
                                onFocus={() => setSignupNameFocus("focused")}
                                onBlur={() => setSignupNameFocus("")}>
                            </Input>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className={"mb-3" + signupEmailFocus}>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-email-83"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                                placeholder="Email"
                                type="email"
                                onFocus={() => setSignupEmailFocus("focused")}
                                onBlur={() => setSignupEmailFocus("")}>
                            </Input>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className={signupPasswordFocus}>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-lock-circle-open"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                                placeholder="Senha"
                                type="password"
                                onFocus={() => setSignupPasswordFocus("focused")}
                                onBlur={() => setSignupPasswordFocus("")}>
                            </Input>
                        </InputGroup>
                    </FormGroup>
                    <Button color="primary">Criar Conta</Button>
                </Form>
            </div>
        </>
    );
}
export default SignUp;
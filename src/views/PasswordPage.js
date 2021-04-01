import React from "react";
import "assets/css/PasswordPg.css";
import {
    Button,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
} from "reactstrap";
import { Link } from "react-router-dom";

function PasswordPage () { 
    const [activeContainer, setActiveContainer] = React.useState("");
    const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
    const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
    React.useEffect(() => {
        document.body.classList.add("password-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup(){
            document.body.classList.remove("password-page");
        };
    }, []);
    return(
        <>
        <div className="wrapper">
                <section className="section section-shaped section-lg">
                <div className="shape shape-style-1 bg-gradient-warning">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
        <Container className={activeContainer}>
        <div className="form-container sign-in-container">
                            <Form action="#" role="form">
                                <img className="rounded-circle" src={require("../assets/img/logo.png")} width="0" alt="..."/>    
                                <h2>Esqueceu sua senha?</h2>
                                <span>Digite o seu e-mail para redefinir a sua senha</span>
                                <FormGroup className={"mt-4" + signinEmailFocus}>
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
                                <Button className="mt-3" color="primary">
                                    Redefinir senha
                                </Button>
                                <Link className="link-voltar" to="/">
                                <i className="fa fa-home"> Voltar</i>
                                </Link>
                            </Form>
                        </div>
                        </Container>
                        </section>
                        </div>
                        </>
    );
}

export default PasswordPage;
import React from "react";
import "assets/css/HomePg.css";
import { Link } from "react-router-dom";
//reactstrap components
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
function HomePg(){
    const [activeContainer, setActiveContainer] = React.useState("");
    const [signupNameFocus, setSignupNameFocus] = React.useState("");
    const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
    const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
    const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
    const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
    React.useEffect(() => {
        document.body.classList.add("register-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup(){
            document.body.classList.remove("register-page");
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
                        <div className="form-container sign-up-container">
                            <Form>
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
                        <div className="form-container sign-in-container">
                            <Form action="#" role="form">
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
                                <Link to="/password-page">
                                    Esqueci minha senha!
                                </Link>
                                <Button className="mt-3" color="primary">
                                    Entrar
                                </Button>
                            </Form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1 className="text-white">Bem Vindo a CONNEC COMP</h1>
                                    <p>Aqui você economiza papel e ajuda o meio ambiente!</p>
                                    <Button
                                        className="btn-neutral"
                                        color="default"
                                        id="signIN"
                                        size="sm"
                                        onClick={() => setActiveContainer("")}
                                    >
                                        Entrar
                                    </Button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1 className="text-white">Olá amigo!</h1>
                                    <p>Entre com seus dados pessoais e comece a usar o nosso sistema totalmente gratuito.</p>
                                    <Button
                                        className="btn-neutral"
                                        color="default"
                                        id="signUP"
                                        size="sm"
                                        onClick={() => setActiveContainer("right-panel-active")}
                                    >
                                        Criar Conta
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    );
}
export default HomePg;
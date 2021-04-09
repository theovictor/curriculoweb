import React from "react";
import "assets/css/IndexPage.css";
import SignUp from "components/Index/SignUp.js";
import SignIn from "components/Index/SignIn.js";
import {
    Button,
    Container,
} from "reactstrap";
function Index(){
    const [activeContainer, setActiveContainer] = React.useState("");
    React.useEffect(() => {
        document.body.classList.add("index-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup(){
            document.body.classList.remove("index-page");
        };
    }, []);
    return(
        <>
            <div className="wrapper">
                <section className="section section-shaped section-lg">
                    <div className="shape shape-style-1 bg-gradient-teal">
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
                        <SignUp />
                        <SignIn />
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
export default Index;
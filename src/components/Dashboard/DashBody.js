import React from "react";
import { Container, Row, Col } from "reactstrap";

function DashBody(){
    return(
        <>
            <Container>
                <Row>
                    <Col sm={{ size: "4" }} className="sidebarCol">
                        <ul>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </Col>
                    <Col sm={{ size: "7", offset: 1 }} className="colDados">
                        <div className="dados">
                            <h6>Nome completo:</h6>
                                <p>Breno Nogueira Araújo</p>
                            <h6>Endereço:</h6>
                                <p>Estado</p>
                                <p>Cidade</p>
                                <p>Bairro</p>
                                <p>CEP</p>
                            <h6>Telefone:</h6>
                                <p>(XX)XXXXX-XXXX</p>
                            <h6>Estado Civíl:</h6>
                                <p>Solteiro</p>
                            <h6>Cursos Complementares:</h6>
                                <p>Inglês avançado</p>
                            <h6>Experiência Profissional</h6>
                                <p>Local</p>
                                <p>Inicio - fim</p>
                                <p>Atividade</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default DashBody;
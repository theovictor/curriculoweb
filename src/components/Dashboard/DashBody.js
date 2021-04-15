import React from "react";
import DashMenu from "components/Dashboard/DashMenu.js";
//import DashForm1 from "components/Dashboard/DashForm1.js";
//import DashForm2 from "components/Dashboard/DashForm2.js";
//import DashForm3 from "components/Dashboard/DashForm3.js";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";
function DashBody(){
    return(
        <>
            <Container className="mt-8">
                <Row>
                    <Col className="order-xl-1 mb-0 mb-xl-0" xl="4">
                        <DashMenu />
                    </Col>
                    <Col className="order-xl-2 mt-6" xl="8">
                        <Card className="telaRND bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Meu Curriculo</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default DashBody;
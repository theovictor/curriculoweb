import React from "react";
import { Container, Col} from "reactstrap";
import ResetCard from "components/ResetSenha/ResetCard.js";

function ResetPage(){
    React.useEffect(() => {
        document.body.classList.add("reset-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup(){
            document.body.classList.remove("reset-page");
        };
    });
    return(
        <>
        <div className="wrapper">
            <section className="section section-shaped section-lg">
                <div className="shape shape-style-1 bg-gradient-teal">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            <Container>
                <Col className="mx-auto" lg="5" mb="8">
                    <ResetCard />
                </Col>
            </Container>
            </section>
        </div>
        </>
    );
}
export default ResetPage;
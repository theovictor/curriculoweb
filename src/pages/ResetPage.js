import React, {useEffect} from "react";
import { Container, Col } from "reactstrap";

import ResetCard from "components/ResetSenha/ResetCard.js";

export default function ResetPage() {
  useEffect(() => {
    document.body.classList.add("reset");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("reset");
    };
  },[]);
  
  return (
    <>
      <div className="section-shaped my-0 skew-separator skew-mini">
        <div className="page-header page-header-small header-filter">
          <div className="page-header-image"/>
        </div>
      </div>
      <section className="upper">
        <Container>
          <Col className="mx-auto" lg="5" mb="1">
            <ResetCard />
          </Col>
        </Container>
      </section>
    </>
  );
}
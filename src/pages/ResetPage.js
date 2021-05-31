import React, {useEffect} from "react";
import { Container, Col } from "reactstrap";

import 'assets/css/reset-page.css'

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
            <Col className="mx-auto" lg="5" mb="1">
              <ResetCard />
            </Col>
          </Container>
        </section>
      </div>
    </>
  );
}
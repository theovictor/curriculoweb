import React, {useEffect}from 'react';
import {Container, Col, Row} from 'reactstrap';
import DashNavbar from 'components/Navbars/DashNavbar';
import CursosList from 'components/Cursos/CursosList'
export default function Cursos(){
  useEffect(() => {
    document.body.classList.add('cursos');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup(){
      document.body.classList.remove('cursos');
    };
  }, []);
  return(
    <>
      <DashNavbar type="transparent"/>
      {/* <div className="wrapper">
        <div className="section-shaped my-0 skew-separator skew-mini">
          <div className="page-header page-header-small header-filter">
            <div className="page-header-image" style={{backgroundImage:'url("'+require("assets/img/theme/curved2.jpg")+'")',}}/> */}
            <Container className="mb-4">
              <div className="header-body text-center mb-2">
                <Row className="justify-content-center">
                  <Col className="px-1" lg="6" md="8" xl="5">
                    <h1 className="text-white">Bem Vindo!</h1>
                    <p className="text-lead text-white">
                      Entre com sua conta, ou cria uma gratuitamente!!
                    </p>
                  </Col>
                </Row>
              </div>
              <CursosList/>
            </Container>
          {/* </div>
        </div>
      </div> */}
    </>
  );
}
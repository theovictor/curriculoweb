import React from "react";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Card, Container, Row, Col } from 'reactstrap';
import { dataTable } from 'components/variables/general.js';
import ModalEscola from 'components/Modal/ModalEscola.js';

export default function Escolares(){
  return (
    <>
      <Container fluid>
        <Row>
            <Card>
              <ToolkitProvider
                  data={dataTable}
                  keyField="name"
                  columns={[
                    {
                      dataField: "escola",
                      text: "Escola/Universidade",
                      sort: true,
                    },
                    {
                      dataField: "curso",
                      text: "Curso",
                      sort: true,
                    },
                    {
                      dataField: "inicio",
                      text: "Início",
                      sort: true,
                    },
                    {
                      dataField: "termino",
                      text: "Término",
                      sort: true,
                    },
                    {
                      dataField: "periodo",
                      text: "Período",
                      sort: true,
                    },
                    {
                      dataField: "tunor",
                      text: "Turno",
                      sort: true,
                    },
                    {
                      dataField: "status",
                      text: "Status",
                      sort: true,
                    },
                    {
                      dataField: "acoes",
                      text: "Ações",
                      sort: true,
                    },
                  ]}
                >
                  {(props) => (
                    <div className="py-4 table-responsive">
                      <Container fluid>
                        <Row>
                          <Col md={4} sm={6}>
                            <ModalEscola/>
                          </Col>
                        </Row>
                      </Container>
                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4={true}
                        bordered={false}
                      />
                    </div>
                  )}
                </ToolkitProvider>
            </Card>
        </Row>
      </Container>
    </>
  );
}
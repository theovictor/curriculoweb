import React from "react";
import { Card, Container, Row, Col, Button } from 'reactstrap';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ModalEscola from 'components/Modal/ModalEscola.js';

export default function Escolares(){
  const dataTable = [
    {
      id: 1,
      escola: 'Faro',
      curso: 'engenharia',
      inicio: '20/05/2021',
      termino: '21/05/2021',
      periodo: '8',
      turno: 'Noturno',
      status: 'cursando'      
    },
    {
      id: 2,
      escola: 'UNIR',
      curso: 'engenharia',
      inicio: '20/05/2021',
      termino: '21/05/2021',
      periodo: '8',
      turno: 'Noturno',
      status: 'cursando'      
    },
  ];
  const Editar = () => {
    return(
      <Col>
        <Button onClick={()=>{}}>Editar</Button>
      </Col>
    )
  }
  const Deletar = () => {
    return(
      <Col>
        <Button onClick={()=>{}}>Deletar</Button>
      </Col>
    )
  }
  return (
    <>
      <Container fluid>
        <Row>
            <Card>
              <ToolkitProvider
                  data={dataTable}
                  keyField="id"
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
                      dataField: "turno",
                      text: "Turno",
                      sort: true,
                    },
                    {
                      dataField: "status",
                      text: "Status",
                      sort: true,
                    },
                    {
                      text: "Ações",
                      formatter: Editar,
                    }
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
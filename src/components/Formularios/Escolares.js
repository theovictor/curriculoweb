import React from "react";
import { Card, Container, Row, Col, Button } from 'reactstrap';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ModalEscola from 'components/Modal/ModalEscola.js';

export default function Escolares(){
  // dados que vira do banco.
  const dataTableEscolar = [
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
      escola: 'Faro',
      curso: 'engenharia',
      inicio: '20/05/2021',
      termino: '21/05/2021',
      periodo: '8',
      turno: 'Noturno',
      status: 'cursando'      
    }
  ];
  // função para editar o campo.
  function btnEditar() {
    alert('editar campo')
  }
  // função para deletar o campo.
  function btnDeletar() {
    alert('deletar campo')
  }
  // constante que adiciona os buttons de acoes na linha.
  const addBotoesAcoes = () => {
    return(
      <div className="btnAcoes">
        <Button className="btn-icon" color="success" onClick={btnEditar}>
          <span className="btn-inner--icon">
            <i className="fa fa-pencil"/>
          </span>
        </Button>
        <Button className="btn-icon" color="danger" onClick={btnDeletar}>
          <span className="btn-inner--icon">
            <i className="fa fa-trash-o"/>
          </span>
        </Button>
      </div>
    )
  }
  return (
    <>
      <Container fluid>
        <Row>
            <Card className="tabelinha">
              <ToolkitProvider
                // data = nome da tabela que tera no banco.
                data={dataTableEscolar}
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
                    dataField: "ações",
                    text: "Ações",
                    formatter: addBotoesAcoes,
                  }
                ]}
              >
                {(props) => (
                  //Renderização da Tabela
                  <div className="table-responsive pt-3">
                    <Container fluid>
                      <Row>
                        <Col>
                          {/* aqui sera chamado o component ModalEscola */}
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
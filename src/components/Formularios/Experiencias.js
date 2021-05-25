import React from "react";
import { Card, Container, Row, Col, Button } from 'reactstrap';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ModalExperiencia from 'components/Modal/ModalExperiencia.js';

export default function Experiencias(){
  // Dados que vira do banco
  const dataTableExperiencia = [
    {
      id: 1,
      nome: 'Repositor de Estoque',
      local: 'Atacadão',
      atividade: 'Realizar a reposição do estoque nas prateleiras',
      dataInicio: '07-03-2017',
      dataTermino: '27-11-2020',
    },
    {
      id: 2,
      nome: 'Farmaceutico',
      local: 'Farmabem',
      atividade: 'Vendedor de Remédios',
      dataInicio: '07-04-2016',
      dataTermino: '30-01-2019',
    },
  ];
  // função para editar o campo.
  function btnEditar() {
    alert('editar campo')
  };
  // função para deletar o campo.
  function btnDeletar() {
    alert('deletar campo')
  };
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
  };
  // React.useEffect(() => {
  //   console.log(formik.values)
  // }, [formik.values])
  return (
    <>
      <Container fluid>
        <Row> {/* Render da Tabela Conhecimentos*/}
          <Card className="tabelinha">
            <ToolkitProvider
              // data = nome da tabela que tera no banco. 
              data={dataTableExperiencia}
              keyField="id"
              columns={[
                {
                  dataField: 'nome',
                  text: 'Nome',
                  sort: true,
                },
                {
                  dataField: 'local',
                  text: 'Local',
                  sort: true,
                },
                {
                  dataField: 'atividade',
                  text: 'Atividade',
                  sort: true,
                },
                {
                  dataField: 'dataInicio',
                  text: 'Data de Início',
                  sort: true,
                },
                {
                  dataField: 'dataTermino',
                  text: 'Data de Término',
                  sort: true,
                },
                {
                  dataField: 'actions',
                  text: 'Ações',
                  formatter: addBotoesAcoes,
                }
              ]}
            >
              {(props) => (
                <div className="table-responsive pt-3">
                  <Container fluid>
                    <Row>
                      <Col>
                        {/* aqui sera chamado o component ModalExperiencia */}
                        <ModalExperiencia/>
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
import React from "react";
import { Card, Container, Row, Col, Button, Form, Input, Label } from 'reactstrap';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ModalConhecimentos from 'components/Modal/ModalConhecimento.js';
import {useFormik} from 'formik';

export default function Conhecimentos(){
  // variaveis do formulario
  const formik = useFormik ({
    initialValues: {
      cursoComplementar: '',
      docsAdicionais: '',
    }
  });
  // Dados que vira do banco
  const dataTableConhecimento = [
    {
      id: 1,
      conhecimento: 'Linux Terminal',
      nivel: 'Intermediário',      
    },
    {
      id: 2,
      conhecimento: 'Excel',
      nivel: 'Avançado',     
    }
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
              data={dataTableConhecimento}
              keyField="id"
              columns={[
                {
                  dataField: 'conhecimento',
                  text: 'Conhecimentos',
                  sort: true,
                },
                {
                  dataField: 'nivel',
                  text: 'Nível',
                  sort: true,
                },
                {
                  dataField: 'ações',
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
                        {/* aqui sera chamado o component ModalConhecimentos */}
                        <ModalConhecimentos/>
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
        <hr className="line-primary"></hr>
        <Form onSubmit={formik.handleSubmit}>{/* Render Cursos Complementares e Documentos Adicionais*/}
          <Row>
            <Label className="form-control-label" htmlFor="cursoComplementar">CURSOS COMPLEMENTARES.</Label>
            <Input className="form-control-alternative" id="cursoComplementar" placeholder="Insira aqui os cursos que você possui." rows="3" type="textarea"
              {...formik.getFieldProps('cursoComplementar')}/>
          </Row>
          <hr className="line-primary"></hr>
          <Row className="mb-3">
            <Label className="form-control-label" htmlFor="docsAdicionais">DOCUMENTOS ADICIONAIS.</Label>
            <Input className="form-control-alternative" id="docsAdicionais" placeholder="Insira aqui os documentos que você possui." rows="3" type="textarea"
              {...formik.getFieldProps('docsAdicionais')}/>
          </Row>
            <Button className="btn-icon float-right mb-2" color="success" onClick={() => {}}>
              <span className="btn-inner--icon">
                <i className="ni ni-check-bold ml--2"/>
              </span>
              <span className="btn-inner--text ml-2">Salvar</span>
            </Button>
        </Form>
      </Container>
    </>
  );
}
import React, {useEffect, useState} from "react";
import { Card, Container, Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ModalEscola from 'components/Modal/ModalEscola.js';
import curriculoActions from '../../store/actions/curriculoActions'

export default function Escolares(){

  const dispatch = useDispatch()
  const dados_formacao = useSelector(state => state.curriculoReducer)
  const [ dataRow , setDataRow] = useState()

  function btnNovo() {
    dispatch(curriculoActions.modal_escola(true))
  }

  // função para editar o campo.
  const btnEditar = () => {
    dispatch(curriculoActions.modal_escola(true))
    dispatch(curriculoActions.edit_mode(true))
  }
  // função para deletar o campo.
  const btnDeletar = () => {
    alert('deletar campo')
  }


  // useEffect(() => {
  //   console.log(dados_formacao.show_curriculo.formacoes)
  // }, [dados_formacao])
  
  
  // constante que adiciona os buttons de acoes na linha.
  const AddBotoesAcoes = () => {
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

  useEffect(() => {
    // console.log(dataRow)
    dispatch(curriculoActions.show_formacao(dataRow))
  }, [dataRow])


  return (
    <>
      <Container fluid>
        <Row>
            <Card className="tabelinha">
              <ToolkitProvider
                // data = nome da tabela que tera no banco.
                data={dados_formacao.show_curriculo.formacoes && dados_formacao.show_curriculo.formacoes}
                keyField="_id"
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
                    dataField: "dataInicio",
                    text: "Início",
                    sort: true,
                  },
                  {
                    dataField: "dataTermino",
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
                    formatter: AddBotoesAcoes,
                  }
                ]}
              >
                {(props) => (<>
                  {/* //Renderização da Tabela */}
                  <div className="table-responsive pt-3">
                  <Button className="mb-3" color="primary" type="button" onClick={btnNovo}>
                    <span className="btn-inner--icon">
                      <i className="fa fa-plus-circle ml--2"></i>
                    </span>
                    <span className="btn-inner--text ml-2"> Novo Curso</span>
                  </Button>
                  {/* {console.log(props.baseProps.data)} */}
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      bordered={false}
                      rowEvents={{onClick: (e, row, idx) => {
                        setDataRow(row)
                      }}}
                    />
                  </div>
                  <ModalEscola/>
                  </>
                )}
              </ToolkitProvider>
            </Card>
        </Row>
      </Container>
    </>
  );
}
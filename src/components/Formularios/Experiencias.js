import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import curriculoActions from '../../store/actions/curriculoActions'
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ModalExperiencia from 'components/Modal/ModalExperiencia.js';

export default function Experiencias(){
  const dispatch = useDispatch()
  const dados_formacao = useSelector(state => state.curriculoReducer)
  const [ dataRow , setDataRow] = useState()

  const btnNovo = () => {
    dispatch(curriculoActions.modal_experiencia(true))
  }

  const addBotoesAcoes = () => {
    return(
      <div className="btnAcoes">
        <Button className="btn-icon" color="danger" onClick={btnDeletar}>
          <span className="btn-inner--icon">
            <i className="fa fa-trash-o"/>
          </span>
        </Button>
      </div>
    )
  };

  const btnDeletar = () => {
    alert('deletar campo')
  };

  useEffect(() => {
    dispatch(curriculoActions.show_experiencia(dataRow))
    console.log(dataRow)
  }, [dataRow])

  return (
    <>
      <Container fluid>
        <Row> {/* Render da Tabela Conhecimentos*/}
          <Card className="tabelinha">
            <ToolkitProvider
              data={dados_formacao.show_curriculo.experiencias && dados_formacao.show_curriculo.experiencias}
              keyField="_id"
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
                  dataField: 'atividades',
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
              {(props) => (<>
                <div className="table-responsive pt-3">
                  <Button className="mb-3" color="primary" type="button" onClick={btnNovo}>
                    <span className="btn-inner--icon">
                      <i className="fa fa-plus-circle ml--2"/>
                    </span>
                    <span className="btn-inner--text ml-2">Nova Expe.</span>
                  </Button>
                  <BootstrapTable
                    {...props.baseProps}
                    bootstrap4={true}
                    bordered={false}
                    rowEvents={{onClick: (e, row, idx) => {
                      setDataRow(row)
                    }}}
                  />
                </div>
                <ModalExperiencia/>
              </>
              )}
            </ToolkitProvider>
          </Card>
        </Row>
      </Container>
    </>
  );
}
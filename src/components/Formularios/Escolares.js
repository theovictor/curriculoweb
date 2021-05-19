import React from "react";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Button, ButtonGroup, Card, Container, Row, Col, UncontrolledTooltip} from 'reactstrap';
import { dataTable } from 'components/variables/general.js';

// const { SearchBar } = Search;

export default function Escolares(){
  const componentRef = React.useRef(null);
  const copyToClipboardAsTable = (el) => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <div className="col">
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
                          <Col xs={12} sm={6}>
                            <ButtonGroup>
                              <Button
                                className="buttons-copy buttons-html5"
                                color="default"
                                size="sm"
                                id="copy-tooltip"
                                onClick={() => {}}
                              >
                                <span>Copy</span>
                              </Button>
                            </ButtonGroup>
                          </Col>
                        </Row>
                      </Container>
                      <BootstrapTable
                        ref={componentRef}
                        {...props.baseProps}
                        bootstrap4={true}
                        bordered={false}
                        id="react-bs-table"
                      />
                    </div>
                  )}
                </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}
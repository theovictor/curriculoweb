import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import isLoged from "helpers/isLoged";
import {
  Button,
  Card,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';
export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState("tab1");

  const history = useHistory();
 
  const routeChange = () =>{ 
     
    history.push('/');
  }

  if(!isLoged()){routeChange()};

  return (
    <>
      <div className="bg-secondary">
        <Card className="container bg-white mb-0">
          <Row>
            <Col md="3">
              <div className="section">
                <section className="text-center">
                  {/* Component de Upload de Foto*/}
                  <h3 className="title mt-4">Charlie Bailey</h3>
                </section>
                <section>
                  <br></br>
                  <Nav className="flex-column" role="tablist">
                    <NavItem>
                      <NavLink
                        className={activeTab === "tab1" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("tab1");
                        }}
                      >
                        <i className="tim-icons icon-single-02"></i>
                          General
                        </NavLink>
                    </NavItem>
                    <hr className="line-primary"></hr>
                  </Nav>
                </section>
                <br></br>
              </div>
            </Col>
            <Col className="ml-auto" md="8">
              <div className="section">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="tab1">
                    <div>
                      <header>
                        <h2 className="text-uppercase">
                          General information
                          </h2>
                      </header>
                      <hr className="line-primary"></hr>
                      <br></br>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels" htmlFor="#firstName">
                            First Name
                            </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                          <FormGroup>
                            <Input
                              defaultValue="Charlie"
                              id="firstName"
                              name="firstName"
                              required="required"
                              type="text"
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels" htmlFor="#lastName">
                            Last Name
                            </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                          <FormGroup>
                            <Input
                              defaultValue="Bailey"
                              id="lastName"
                              name="lastName"
                              required="required"
                              type="text"
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels">I’m</label>
                        </Col>
                        <Col className="align-self-center" md="4">
                          <FormGroup>
                            <Input
                              data-trigger=""
                              id="choices-single-default-1"
                              name="choices-single-default-1"
                              type="select"
                            >
                              <option defaultValue="2">Male</option>
                              <option defaultValue="3">Female</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels">Birth Date</label>
                        </Col>
                        <Col className="align-self-center" md="9">
                          <Row>
                            <Col className="align-self-center" md="4">
                              <FormGroup>
                                <Input
                                  data-trigger=""
                                  id="choices-single-default-2"
                                  name="choices-single-default-2"
                                  type="select"
                                >
                                  <option>January</option>
                                  <option>February</option>
                                  <option>March</option>
                                  <option>April</option>
                                  <option>May</option>
                                  <option>June</option>
                                  <option>July</option>
                                  <option>August</option>
                                  <option>September</option>
                                  <option>October</option>
                                  <option>November</option>
                                  <option>December</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md="4">
                              <FormGroup>
                                <Input
                                  data-trigger=""
                                  id="choices-single-default-3"
                                  name="choices-single-default-3"
                                  type="select"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                  <option>13</option>
                                  <option>14</option>
                                  <option>15</option>
                                  <option>16</option>
                                  <option>17</option>
                                  <option>18</option>
                                  <option>19</option>
                                  <option>20</option>
                                  <option>21</option>
                                  <option>22</option>
                                  <option>23</option>
                                  <option>24</option>
                                  <option>25</option>
                                  <option>26</option>
                                  <option>27</option>
                                  <option>28</option>
                                  <option>29</option>
                                  <option>30</option>
                                  <option>31</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md="4">
                              <FormGroup>
                                <Input
                                  data-trigger=""
                                  id="choices-single-default-4"
                                  name="choices-single-default-4"
                                  type="select"
                                >
                                  <option>1986</option>
                                  <option>1987</option>
                                  <option>1988</option>
                                  <option>1989</option>
                                  <option>1990</option>
                                  <option>1991</option>
                                  <option>1992</option>
                                  <option>1993</option>
                                  <option>1994</option>
                                  <option>1995</option>
                                  <option>1996</option>
                                  <option>1997</option>
                                  <option>1998</option>
                                  <option>1999</option>
                                  <option>2000</option>
                                  <option>2001</option>
                                  <option>2002</option>
                                  <option>2003</option>
                                  <option>2004</option>
                                  <option>2005</option>
                                  <option>2006</option>
                                  <option>2007</option>
                                  <option>2008</option>
                                  <option>2009</option>
                                  <option>2010</option>
                                  <option>2011</option>
                                  <option>2012</option>
                                  <option>2013</option>
                                  <option>2014</option>
                                  <option>2015</option>
                                  <option>2016</option>
                                  <option>2017</option>
                                  <option>2018</option>
                                  <option>2019</option>
                                  <option>2020</option>
                                  <option>2021</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels" htmlFor="#email">
                            Email
                            </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                          <FormGroup>
                            <Input
                              defaultValue="charlie.bailey@example.com"
                              id="email"
                              name="email"
                              required="required"
                              type="email"
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels" htmlFor="#confirmEmail">
                            Confirm Email
                            </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                          <FormGroup>
                            <Input
                              defaultValue="charlie.bailey@example.com"
                              id="confirmEmail"
                              name="confirmEmail"
                              required="required"
                              type="email"
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels" htmlFor="#location">
                            Your Location
                            </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                          <FormGroup>
                            <Input
                              defaultValue="Sydney, A"
                              id="location"
                              name="location"
                              required="required"
                              type="text"
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels" htmlFor="#phone">
                            Phone Number
                            </label>
                        </Col>
                        <Col className="align-self-center" md="4">
                          <FormGroup>
                            <Input
                              defaultValue="+40 745 031 200"
                              id="phone"
                              name="phone"
                              required="required"
                              type="tel"
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center" md="3">
                          <label className="labels">Language</label>
                        </Col>
                        <Col className="align-self-center" md="4">
                          <FormGroup>
                            <Input
                              data-trigger=""
                              id="choices-single-default-5"
                              name="choices-single-default-5"
                              type="select"
                            >
                              <option>English</option>
                              <option defaultValue="2">French</option>
                              <option defaultValue="3">Spanish</option>
                              <option defaultValue="4">Deutsche</option>
                              <option defaultValue="4">Russian</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="mt-5">
                        <Col md="6">
                          <Button color="primary" type="submit">
                            Save Changes
                            </Button>
                          <Button color="primary" outline type="reset">
                            Cancel
                            </Button>
                        </Col>
                      </Row>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}
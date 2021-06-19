import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const ProfileData = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}>
                        Informações Pessoais
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }} >
                        Dados Escolares
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}>
                        Conhecimentos
                     </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}>
                        Documentos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => { toggle('5'); }}>
                        Experiências
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="6">
                            <Card body className="text-md-left">
                               <span><strong>Sexo: </strong>Masculino</span>
                               <span><strong>Data de Nascimento: </strong>23/10/1996</span>
                               <span><strong>Idade: </strong>24 anos</span>
                               <span><strong>Nacionalidade: </strong>Brasileiro</span>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body className="text-md-left">
                               <span><strong>Celular/Whatsapp: </strong>(69) 98126-1181</span>
                               <span><strong>E-mail: </strong>breno.nog.araujo@hotmail.com</span>
                               <span><strong>Cidade: </strong>Porto Velho</span>
                               <span><strong>Estado: </strong>Rondônia</span>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <hr/>
                        <Col sm="12">
                            <Card body className="text-md-left">
                                <span><strong>Endereço: </strong>Rua Fernando de Noronha, Bairro Nova Floresta, Nº 4026 </span>
                            </Card>                 
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6"> 
                            <Card body className="text-md-left">
                                <span><strong>Tipo: </strong>Ensino Médio Completo</span>
                                <span><strong>Ano de Formação:</strong>2014</span>
                                <span><strong>Escola:</strong>BlaBlaBla</span>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body className="text-md-left">
                                <span><strong>Tipo: </strong>Superior Incompleto</span>
                                <span><strong>Instituição: </strong>Faculdade Sapiens</span>
                                <span><strong>Curso: </strong>Sistemas de Informação</span>
                                <span><strong>Ano de Formação: </strong>2022</span>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <Card body className="text-md-left">
                                <span><strong>Área de conhecimento: </strong>Informática</span>
                                Desenvolvimento Web - HTML5, CSS, JavaScript, React, NodeJS, Adonis, Laravel
                                <span>Redes, hardware e software</span>
                                <span>Microsoft Office</span>
                                <span>Windows, Linux</span>
                                <span>Inglês avançado</span>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                        <Col sm="6">
                            <Card body className="text-md-left">
                               <span>Carteira Nacional de Habilitação - Categoria B</span>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                    <Row>
                        <Col sm="6">
                            <Card body className="text-md-left">
                                 <strong>Experiência: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, pos
                                 <strong>Atividades:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, pos
                            </Card>
                        </Col>
                        <Col sm="6">
                        <Card body className="text-md-left">
                                 <strong>Experiência</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, pos
                                 <strong>Atividades:</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, pos
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default ProfileData;
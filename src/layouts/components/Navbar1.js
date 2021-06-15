import React, {useEffect} from "react";
import { UncontrolledCollapse, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, Media, NavbarBrand, Navbar, Nav, Container, Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";
// import Logo from "components/Logo/Logo.js";
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../../store/actions/userActions'
// import curriculoActions from 'store/actions/curriculoActions';

export default function Navbar1() {
  const reducer = useSelector( state => state.userReducer);
  const nome = sessionStorage.getItem('nome')
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!reducer.user_name){
    dispatch(userActions.user_name(nome))
    }
  }, [])
  

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
          <Container className="nav-container bg-gradient-info">
            <NavbarBrand className="mr-lg-5 ml-4" to="#" tag={Link}>
              <div className="logo-navbar"/>
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="avatar avatar-sm rounded-circle">
                <img className="logo-user-navbar" alt=""/>
              </span>
            </button>
            <UncontrolledCollapse toggler="#navbar_global" navbar>
              <div className="navbar-collapse-header">
                <Row>
                  <div className="collapse-brand">
                    <Media className="align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        <img className="logo-user-navbar" alt="" />
                      </span>
                      <Media className="ml-2 mr-1 d-lg-block">
                        <span className="mb-0 text-sm font-weight-bold">
                          {reducer.user_name? reducer.user_name : null}
                        </span>
                      </Media>
                    </Media>
                  </div>
                  <Col className="collapse-close">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/dados_iniciais" tag={Link}>
                    <i className="fa fa-home d-lg-none mr-2" />
                    <span className="nav-link-inner--text">Início</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/meu_perfil" tag={Link}>
                    <i className="ni ni-single-02 d-lg-none mr-2" />
                    <span className="nav-link-inner--text">Meu Perfil</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/configuracao" tag={Link}>
                    <i className="ni ni-settings-gear-65 d-lg-none mr-2" />
                    <span className="nav-link-inner--text">Configurações</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/contato" tag={Link}>
                    <i className="ni ni-support-16 d-lg-none mr-2" />
                    <span className="nav-link-inner--text">Contato</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="d-lg-none" nav>
                  <DropdownToggle nav to="/" tag={Link} onClick={() => { 
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('nome');
                    sessionStorage.removeItem('user_id');
                    sessionStorage.removeItem('thumbnail_url');
                  }}>
                    <i className="ni ni-user-run d-lg-none mr-2" />
                    <span className="nav-link-inner--text">Sair</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <div className="d-none d-lg-block ml-lg-4">
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <Card className="card-nav collapse-brand bg-gradient-gray-dark">
                        <Media className="align-items-center">
                          <span className="avatar avatar-sm rounded-circle">
                            <img className="logo-user-navbar"/>
                          </span>
                          <Media className="ml-1 mr-1 d-lg-block">
                            <span className="mb-0 text-sm font-weight-bold" id="nome">
                              {reducer.user_name? reducer.user_name : null}
                            </span>
                          </Media>
                        </Media>
                      </Card>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem to="/" tag={Link} onClick={() => {
                        sessionStorage.removeItem('token');
                        sessionStorage.removeItem('nome');
                        sessionStorage.removeItem('user_id');
                        sessionStorage.removeItem('thumbnail_url');
                      }}>
                        <i className="ni ni-user-run mr-2" />
                        <span className="nav-link-inner--text font-weight-bold">Sair</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}